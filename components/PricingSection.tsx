'use client';

import { useState } from 'react';
import { PricingTier } from '@/lib/stripe';

interface PricingTierConfig {
  id: PricingTier;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
}

const tiers: PricingTierConfig[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$49',
    description: 'one-time',
    features: [
      'Next.js 14 starter template',
      'Tailwind CSS setup',
      'Basic Stripe integration',
      'Email templates',
      'Documentation',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$99',
    description: 'one-time',
    features: [
      'Everything in Starter',
      'Advanced Stripe features',
      'Authentication system',
      'Admin dashboard',
      'Priority support',
      'Lifetime updates',
    ],
    popular: true,
    buttonText: 'Get Started',
    buttonVariant: 'primary',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'pricing',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'Team training',
      'SLA guarantee',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
  },
];

export default function PricingSection() {
  const [loadingTier, setLoadingTier] = useState<PricingTier | null>(null);

  const handleCheckout = async (tier: PricingTier) => {
    if (tier === 'enterprise') {
      window.location.href = '/contact';
      return;
    }

    setLoadingTier(tier);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tier }),
      });

      const data = await response.json();

      if (data.redirect) {
        window.location.href = data.redirect;
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        alert(`Error: ${data.error}`);
        setLoadingTier(null);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('An error occurred. Please try again.');
      setLoadingTier(null);
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include lifetime access.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white p-8 rounded-xl border-2 transition-all ${
                tier.popular
                  ? 'border-blue-600 relative hover:shadow-2xl transform hover:scale-105'
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                <span className="text-gray-600"> {tier.description}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-600 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-gray-700 ${
                        idx === 0 && tier.id !== 'starter' ? 'font-semibold' : ''
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handleCheckout(tier.id)}
                disabled={loadingTier === tier.id}
                className={`w-full py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  tier.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {loadingTier === tier.id ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  tier.buttonText
                )}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">✓ No recurring charges • ✓ Lifetime updates • ✓ Money-back guarantee</p>
        </div>
      </div>
    </section>
  );
}
