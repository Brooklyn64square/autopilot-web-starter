
import Stripe from 'stripe';

// Initialize Stripe with a dummy key during build time if not available
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_dummy_key_for_build';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-11-15',
  typescript: true,
});

// Pricing tier configuration
export const PRICING_TIERS = {
  starter: {
    name: 'Starter',
    price: 4900, // $49.00 in cents
    priceId: process.env.STRIPE_STARTER_PRICE_ID || '',
    features: [
      'Next.js 14 starter template',
      'Tailwind CSS setup',
      'Basic Stripe integration',
      'Email templates',
      'Documentation',
    ],
  },
  pro: {
    name: 'Professional',
    price: 9900, // $99.00 in cents
    priceId: process.env.STRIPE_PRO_PRICE_ID || '',
    features: [
      'Everything in Starter',
      'Advanced Stripe features',
      'Authentication system',
      'Admin dashboard',
      'Priority support',
      'Lifetime updates',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    price: null, // Custom pricing
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || '',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'Team training',
      'SLA guarantee',
    ],
  },
} as const;

export type PricingTier = keyof typeof PRICING_TIERS;
