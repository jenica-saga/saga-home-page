import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  return neon(databaseUrl);
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

async function sendNotification(name: string, email: string, practice: string, phone?: string) {
  const resend = getResend();
  if (!resend) return;

  try {
    await resend.emails.send({
      from: 'Saga AI <notifications@usesaga.ai>',
      to: 'jenica@usesaga.ai',
      subject: `New demo request from ${name} at ${practice}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Practice:</strong> ${practice}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</p>
        <hr />
        <p style="color: #6d635a; font-size: 13px;">This notification was sent by Saga AI.</p>
      `,
    });
  } catch (error) {
    console.error('Failed to send notification email:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, practice, phone } = body;

    // Basic validation
    if (!name || !email || !practice) {
      return NextResponse.json(
        { error: 'Name, email, and practice are required.' },
        { status: 400 }
      );
    }

    // Email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const sql = getDb();

    // Create table if it doesn't exist (runs once, idempotent)
    await sql`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        practice TEXT NOT NULL,
        phone TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Insert the demo request
    await sql`
      INSERT INTO demo_requests (name, email, practice, phone)
      VALUES (${name}, ${email}, ${practice}, ${phone || null})
    `;

    // Send notification email (non-blocking — don't fail the request if email fails)
    sendNotification(name, email, practice, phone);

    return NextResponse.json(
      { success: true, message: 'Demo request received!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const sql = getDb();

    const requests = await sql`
      SELECT id, name, email, practice, phone, created_at
      FROM demo_requests
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({ count: requests.length, requests });
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    return NextResponse.json(
      { error: 'Could not fetch requests.', requests: [] },
      { status: 500 }
    );
  }
}
