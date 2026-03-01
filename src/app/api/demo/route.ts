import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  return neon(databaseUrl);
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
