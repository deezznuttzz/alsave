import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming you're using Prisma

export async function POST(req: Request) {
  const subscription = await req.json();
  const userId = '1'; // Replace this with logic to fetch the authenticated user

  // Update the user to store the subscription
  await prisma.user.update({
    where: { id: Number(userId) },
    data: { subscription: JSON.stringify(subscription) },
  });

  return NextResponse.json({ message: 'Subscription saved' });
}
