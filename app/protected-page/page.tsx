'use client';
import { useEffect } from 'react';

export default function ProtectedPage() {
  const subscribeUserToPush = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BBndgWKwLs0XPuy9DIH-Og5YpGrEdHjAIu4eW561L-gmXbqpqLm_gEHoE_pZwWtD0pQFf01CPWBpB0oprDXr7ZM', // Replace with your actual VAPID public key
      });

      // Send the subscription object to your backend to store it for later
      await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('User is subscribed to push notifications:', subscription);
    } catch (error) {
      console.error('Error subscribing user to push notifications:', error);
    }
  };

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      subscribeUserToPush();
    }
  }, []);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible by authenticated users.</p>
    </div>
  );
}
