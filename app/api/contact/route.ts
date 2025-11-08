
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// For production: Connect to your PostgreSQL database using Prisma
// import { PrismaClient } from '@/app/generated/prisma';
// const prisma = new PrismaClient();

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, save to JSON file
    // TODO: Replace with database storage in production
    const contactsDir = path.join(process.cwd(), 'data');
    const contactsFile = path.join(contactsDir, 'contacts.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(contactsDir)) {
      fs.mkdirSync(contactsDir, { recursive: true });
    }

    // Read existing contacts or create new array
    let contacts: any[] = [];
    if (fs.existsSync(contactsFile)) {
      const fileContent = fs.readFileSync(contactsFile, 'utf-8');
      contacts = JSON.parse(fileContent);
    }

    // Add new contact with timestamp
    const newContact = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
    };
    contacts.push(newContact);

    // Save to file
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

    // For production with Prisma:
    // const contact = await prisma.contact.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     company: data.company,
    //     message: data.message,
    //   },
    // });

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: newContact.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
