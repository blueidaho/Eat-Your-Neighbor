import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

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

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !serverPrefix || !audienceId) {
    console.error('Missing Mailchimp env vars: set MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_AUDIENCE_ID');
    return NextResponse.json(
      { error: 'The mailroom is closed for renovations. Try again shortly.' },
      { status: 500 },
    );
  }

  const subscriberHash = crypto.createHash('md5').update(email).digest('hex');
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'subscribed',
        tags: ['eat-your-neighbor-waitlist'],
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data?.title === 'Forgotten Email Not Subscribed') {
        return NextResponse.json(
          { error: "Mailchimp remembers you unsubscribing before. Respect that, or use a different email." },
          { status: 400 },
        );
      }
      console.error('Mailchimp error:', data);
      return NextResponse.json(
        { error: "The Nugs rejected that request. Try again in a bit." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Mailchimp request failed:', err);
    return NextResponse.json(
      { error: 'Something got buried in the cemetery. Try again.' },
      { status: 500 },
    );
  }
}
