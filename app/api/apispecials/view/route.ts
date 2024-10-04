import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  // Fetch all specials with related place information
  const specials = await prisma.special.findMany({
    include: { places: true }
  });
  return NextResponse.json(specials);
}
