import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let email: string;
  try {
    const body = await req.json();
    email = String(body.email ?? '').trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'That email looks half-eaten. Try a whole one.' },
      { status: 400 },
    );
  }

  const mailerliteApiKey = process.env.MAILERLITE_API_KEY;

  if (!mailerliteApiKey) {
    console.error('Missing MAILERLITE_API_KEY env var');
    return NextResponse.json(
      { error: 'The mailroom is closed for renovations. Try again shortly.' },
      { status: 500 },
    );
  }

  try {
    const groupId = process.env.MAILERLITE_GROUP_ID;
    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${mailerliteApiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        ...(groupId ? { groups: [groupId] } : {}),
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error('MailerLite error:', data);
      return NextResponse.json(
        { error: 'The Nugs rejected that request. Try again in a bit.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('MailerLite request failed:', err);
    return NextResponse.json(
      { error: 'Something got buried in the cemetery. Try again.' },
      { status: 500 },
    );
  }

  // Best-effort email notification — the MailerLite list above is the
  // source of truth, so a failure here shouldn't fail the whole request.
  const host = process.env.SMTP_HOST ?? 'smtp.hostinger.com';
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const notifyTo = process.env.NOTIFY_EMAIL ?? user;

  if (user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Eat Your Neighbor" <${user}>`,
        to: notifyTo,
        replyTo: email,
        subject: 'New Eat Your Neighbor waitlist signup',
        text: `New signup: ${email}`,
        html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
      });
    } catch (err) {
      console.error('SMTP notification failed (non-fatal):', err);
    }
  }

  return NextResponse.json({ ok: true });
}
