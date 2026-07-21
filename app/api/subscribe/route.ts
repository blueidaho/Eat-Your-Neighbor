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

  const host = process.env.SMTP_HOST ?? 'smtp.hostinger.com';
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const notifyTo = process.env.NOTIFY_EMAIL ?? user;

  if (!user || !pass) {
    console.error('Missing SMTP env vars: set SMTP_USER and SMTP_PASSWORD');
    return NextResponse.json(
      { error: 'The mailroom is closed for renovations. Try again shortly.' },
      { status: 500 },
    );
  }

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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('SMTP send failed:', err);
    return NextResponse.json(
      { error: 'Something got buried in the cemetery. Try again.' },
      { status: 500 },
    );
  }
}
