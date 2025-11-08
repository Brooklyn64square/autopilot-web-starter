
'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import PricingCard from '@/components/PricingCard';
import FAQ from '@/components/FAQ';

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricingTiers = [
    {
      name: "Launch",
      price: "$49/mo",
      features: [
        "Instant brand & landing page",
        "Professional checkout experience",
        "Basic conversational chat",
        "Basic analytics dashboard",
        "Email support",
        "Up to 1,000 visitors/month"
      ]
    },
    {
      name: "Autopilot",
      price: "$399/mo + 1–3%",
      features: [
        "Everything in Launch",
        "Full autonomous operations",
        "Ad campaign management",
        "Growth experiments & A/B testing",
        "Conversational sales agents",
        "Priority support",
        "Up to 50,000 visitors/month",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Managed Growth",
      price: "$2,500+/mo + rev share",
      features: [
        "Everything in Autopilot",
        "White-glove onboarding",
        "Dedicated growth strategist",
        "Custom AI model training",
        "Revenue guarantee (SLA)",
        "Unlimited visitors",
        "24/7 phone support",
        "Quarterly business reviews"
      ]
    }
  ];

  const faqItems = [
    {
      q: "Can I change plans anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      q: "What happens after the free trial?",
      a: "After your 14-day trial, you'll be charged based on the plan you selected. You can cancel anytime before the trial ends with no charges."
    },
    {
      q: "How does the revenue share work?",
      a: "For Autopilot and Managed Growth plans, we take a small percentage (1-3%) of incremental revenue generated through the platform. We only succeed when you succeed."
    },
    {
      q: "Are there any setup fees?",
      a: "No setup fees. All plans include complete onboarding and brand launch at no extra cost."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards (Visa, Mastercard, Amex) and can arrange invoicing for annual plans."
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your money, no questions asked."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your growth stage. All plans include 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard 
                key={index} 
                {...tier}
                onSelect={() => window.location.href = '/'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-page">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Feature Comparison
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Launch</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Autopilot</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Managed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Brand Builder', true, true, true],
                  ['Checkout & Payments', true, true, true],
                  ['Basic Chat', true, true, true],
                  ['Analytics Dashboard', true, true, true],
                  ['Ad Campaign Management', false, true, true],
                  ['A/B Testing', false, true, true],
                  ['AI Sales Agents', false, true, true],
                  ['Dedicated Strategist', false, false, true],
                  ['Revenue Guarantee', false, false, true],
                  ['Custom AI Training', false, false, true]
                ].map(([feature, launch, autopilot, managed], idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 text-sm text-gray-900">{feature as string}</td>
                    <td className="px-6 py-4 text-center">
                      {launch ? <span className="text-primary">✓</span> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {autopilot ? <span className="text-primary">✓</span> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {managed ? <span className="text-primary">✓</span> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pricing FAQ
          </h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Start your free trial today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No credit card required. Cancel anytime.
          </p>
          <Link href="/">
            <Button size="lg">
              Start Autopilot Demo — Free 14‑day
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
