'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import OnboardingModal from '@/components/OnboardingModal';
import MetricCard from '@/components/MetricCard';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import PricingCard from '@/components/PricingCard';
import FAQ from '@/components/FAQ';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const metrics = [
    { label: "Avg revenue lift", value: "3×" },
    { label: "Time-to-launch", value: "48 hrs" },
    { label: "Average payback", value: "< 90 days" }
  ];

  const howItWorksSteps = [
    { 
      step: 1, 
      title: "Answer 8 quick prompts", 
      desc: "Audience, product, tone, margin targets.",
      icon: "📝"
    },
    { 
      step: 2, 
      title: "One-click brand launch", 
      desc: "Site, checkout, images, copy.",
      icon: "🚀"
    },
    { 
      step: 3, 
      title: "Autopilot", 
      desc: "AI runs ads, optimizes pages, and converts with conversational agents.",
      icon: "🤖"
    },
    { 
      step: 4, 
      title: "Scale", 
      desc: "Continuous experiments and revenue-first recommendations.",
      icon: "📈"
    }
  ];

  const features = [
    { 
      title: "Instant Brand Builder", 
      desc: "Name, logo, photography and product copy tuned to your audience.",
      icon: "🎨"
    },
    { 
      title: "Autonomous Commerce Engine", 
      desc: "Dynamic pricing, inventory sync, payments, fulfillment routing.",
      icon: "💰"
    },
    { 
      title: "Conversational Sales Agents", 
      desc: "24/7 buyer engagement that pre-sells and hands off to humans.",
      icon: "💬"
    },
    { 
      title: "Growth Autopilot", 
      desc: "Ad creative, targeting, and budget optimization that runs and learns.",
      icon: "📊"
    },
    { 
      title: "Continuous Conversion Lab", 
      desc: "Automatic A/B and multivariate tests with rollouts.",
      icon: "🧪"
    },
    { 
      title: "Virtual COO Dashboard", 
      desc: "Cashflow, tasks, experiment insights, and one-click approvals.",
      icon: "📋"
    }
  ];

  const pricingTiers = [
    {
      name: "Launch",
      price: "$49/mo",
      features: [
        "Instant brand & landing page",
        "Checkout, basic chat",
        "Basic analytics"
      ]
    },
    {
      name: "Autopilot",
      price: "$399/mo + 1–3%",
      features: [
        "Full Autopilot",
        "Ad execution",
        "Growth experiments"
      ],
      popular: true
    },
    {
      name: "Managed Growth",
      price: "$2,500+/mo + rev share",
      features: [
        "White-glove service",
        "Dedicated strategist",
        "Revenue guarantee"
      ]
    }
  ];

  const testimonials = [
    { 
      quote: "Autopilot launched our brand in two days and tripled monthly revenue in three months.", 
      author: "Maya R., founder" 
    },
    { 
      quote: "We let the Autopilot run our ads and it paid back in under 60 days.", 
      author: "Leo S., DTC founder" 
    }
  ];

  const faqItems = [
    { 
      q: "How autonomous is the system?", 
      a: "Human-in-loop guardrails; simulation mode shows proposed changes before rollout." 
    },
    { 
      q: "What does revenue share mean?", 
      a: "Optional pilot where we take a percentage of incremental revenue; clear terms before live campaigns." 
    },
    { 
      q: "Which integrations are included?", 
      a: "Stripe, Shopify, Meta/Google Ads, Shippo, Zapier." 
    },
    { 
      q: "What data do you collect?", 
      a: "Product, performance metrics, and anonymized signals; GDPR/CCPA compliant." 
    },
    { 
      q: "Can I pause Autopilot?", 
      a: "Yes, full manual control and simulation available." 
    },
    { 
      q: "How are refunds/fraud handled?", 
      a: "Built-in fraud detection + human review for disputes." 
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                From idea to income — <span className="text-primary">on autopilot</span>.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Launch a professional brand in hours and let our AI run marketing, sales, and fulfillment — with human oversight. Get revenue, not just a website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Autopilot Demo — Free 14‑day
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                >
                  Watch 3‑minute Walkthrough
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Trusted by indie brands and creators — revenue-share pilots available.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/assets/hero-3x2.png"
                alt="Autopilot Dashboard Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-page">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch and scale your brand in 4 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{step.icon}</div>
                <div className="text-primary text-sm font-semibold mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About The Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Core features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run your brand on autopilot
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.desc} icon={feature.icon} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features">
              <Button variant="outline" size="lg">
                Explore All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Your virtual COO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get real-time insights and control with our intuitive dashboard
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600 text-lg">Dashboard Preview Coming Soon</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/dashboard">
              <Button size="lg">
                View Interactive Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your growth stage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard 
                key={index} 
                {...tier} 
                onSelect={() => setIsModalOpen(true)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/pricing" className="text-primary hover:underline">
              Compare all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Micro Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Indie maker + Autopilot = 3× monthly revenue in 90 days
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Launched in 48 hours. Autopilot optimized ads & checkout — conversion went from 1.6% to 4.8% and monthly revenue tripled. Time-to-first-payback: 42 days.
          </p>
          <Link href="/case-studies">
            <Button variant="secondary" size="lg">
              See the full case study →
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-page">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What our customers say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to launch your brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial and see how Autopilot can transform your business
          </p>
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            Start Autopilot Demo — Free 14‑day
          </Button>
        </div>
      </section>

      {/* Onboarding Modal */}
      <OnboardingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
