'use client';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';

import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout() {
  const searchParams = useSearchParams();
  const price = searchParams.get('price');

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    if (price && price !== '') {
      fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ price: price }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="my-10">
      {clientSecret ? (
        <div className="min-h-[60vh]">
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm price={price} />
          </Elements>
        </div>
      ) : (
        <div className="text-center min-h-[60vh] relative">
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-10 w-10"></div>
          </div>
        </div>
      )}
    </div>
  );
}

// update data in db, after payment is success
