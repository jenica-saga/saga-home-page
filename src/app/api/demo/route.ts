import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'demo-requests.json');

interface DemoRequest {
  name: string;
  email: string;
  practice: string;
  phone?: string;
  timestamp: string;
}

async function readRequests(): Promise<DemoRequest[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeRequests(requests: DemoRequest[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(requests, null, 2));
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

    const newRequest: DemoRequest = {
      name,
      email,
      practice,
      phone: phone || undefined,
      timestamp: new Date().toISOString(),
    };

    // Read existing, append, write back
    const existing = await readRequests();
    existing.push(newRequest);
    await writeRequests(existing);

    return NextResponse.json(
      { success: true, message: 'Demo request received!' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple endpoint to check requests (protected in production)
  const requests = await readRequests();
  return NextResponse.json({ count: requests.length, requests });
}
