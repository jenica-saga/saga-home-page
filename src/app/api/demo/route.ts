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

async function sendNotification(name: string, email: string, practice: string, role?: string, phone?: string, ehr?: string, providerCount?: string, painPoint?: string) {
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
        ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
        ${ehr ? `<p><strong>EHR System:</strong> ${ehr}</p>` : ''}
        ${providerCount ? `<p><strong>Provider Count:</strong> ${providerCount}</p>` : ''}
        ${painPoint ? `<p><strong>Biggest Challenge:</strong> ${painPoint}</p>` : ''}
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
    const { name, email, practice, role, phone, ehr, providerCount, painPoint } = body;

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
        role TEXT,
        ehr TEXT,
        provider_count TEXT,
        pain_point TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Add new columns if they don't exist (for existing tables)
    await sql`ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS ehr TEXT`;
    await sql`ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS provider_count TEXT`;
    await sql`ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS role TEXT`;
    await sql`ALTER TABLE demo_requests ADD COLUMN IF NOT EXISTS pain_point TEXT`;

    // Insert the demo request
    await sql`
      INSERT INTO demo_requests (name, email, practice, role, phone, ehr, provider_count, pain_point)
      VALUES (${name}, ${email}, ${practice}, ${role || null}, ${phone || null}, ${ehr || null}, ${providerCount || null}, ${painPoint || null})
    `;

    // Send notification email (non-blocking — don't fail the request if email fails)
    sendNotification(name, email, practice, role, phone, ehr, providerCount, painPoint);

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
      SELECT id, name, email, practice, role, phone, ehr, provider_count, pain_point, created_at
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
