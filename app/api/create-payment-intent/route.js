// This is your test secret API key.
import { NextRequest, NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => parseInt(items[0]['price']) * 100;

export async function POST(request) {
  const { items } = await request.json();

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  });
}
