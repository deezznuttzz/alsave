import { NextResponse } from 'next/server';
import webpush from 'web-push';
import prisma from '@/lib/prisma'; // Assuming you're using Prisma

const publicKey = 'BBndgWKwLs0XPuy9DIH-Og5YpGrEdHjAIu4eW561L-gmXbqpqLm_gEHoE_pZwWtD0pQFf01CPWBpB0oprDXr7ZM';
const privateKey = 'c87V5ZrVXsvWmXrwftDay1nhjQsrZUaHJsjO4QPJWgE';

webpush.setVapidDetails('mailto:youremail@example.com', publicKey, privateKey);

export async function POST(req: Request) {
  const { userId, message } = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: Number(userId) },
  });

  if (!user || !user.subscription) {
    return NextResponse.json({ error: 'User not found or no subscription' }, { status: 404 });
  }

  const payload = JSON.stringify({
    title: 'New Notification',
    body: message || 'You have a new message!',
  });

  try {
    await webpush.sendNotification(JSON.parse(user.subscription), payload);
    return NextResponse.json({ message: 'Notification sent' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
