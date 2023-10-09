'use client';
import { useEffect, useState } from 'react';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function CheckoutForm({ price }) {
  const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
  const CLIENT_DOMAIN = process.env.NEXT_PUBLIC_CLIENT_DOMAIN;
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = searchParams.get('payment_intent_client_secret');

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          toast.success('Payment Success, Please Wait!!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          try {
            (async () => {
              await axios.post(`${SERVER_DOMAIN}/api/form/confirm-payment`, {
                id: localStorage.getItem('userid'),
                payment: true,
                subscriptionType: price,
                key: process.env.NEXT_PUBLIC_API_KEY,
              });
              setTimeout(() => {
                router.push('/');
              }, 2000);
            })();
          } catch (err) {
            toast.error('Contact Admin, Something went wrong', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
          }
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          toast.info('Your payment is being processed', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          toast.error('Payment Failed', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          break;
        default:
          setMessage('Something went wrong.');
          toast.error('Something Went Wrong', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          break;
      }
    });
  }, [stripe, searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${CLIENT_DOMAIN}/checkout?price=${price}`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      setMessage('An unexpected error occurred.');
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div>
      <ToastContainer />
      <div className="text-4xl text-[#DF2935] text-center font-bold mb-6">
        Checkout
      </div>
      <div className="mx-auto w-[80%] md:w-[70%] lg:w-[40%]">
        <form id="payment-form" onSubmit={handleSubmit}>
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <button
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline mx-auto w-full"
            disabled={isLoading || !stripe || !elements}
            id="submit"
          >
            <span id="button-text" className="flex flex-row justify-center">
              <span className="py-1">Pay now </span>
              <div className="flex items-center">
                {isLoading && (
                  <div className="spinner ml-2 flex items-center" id="spinner">
                    <div
                      className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message text-center">{message}</div>}
        </form>
      </div>
    </div>
  );
}
