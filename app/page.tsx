
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: '⚡ Lightning Fast',
      description: 'Built with Next.js 14 for optimal performance and speed.',
    },
    {
      title: '🎨 Beautiful Design',
      description: 'Modern, responsive UI with Tailwind CSS out of the box.',
    },
    {
      title: '💳 Payment Ready',
      description: 'Stripe integration ready for accepting payments instantly.',
    },
    {
      title: '📱 Mobile First',
      description: 'Fully responsive design that works on all devices.',
    },
    {
      title: '🔒 Secure',
      description: 'Built with security best practices from day one.',
    },
    {
      title: '🚀 Production Ready',
      description: 'Deploy to Vercel in seconds with zero configuration.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Up to 5 projects',
        'Basic support',
        'Core features',
        '5GB storage',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: [
        'Unlimited projects',
        'Priority support',
        'Advanced features',
        '100GB storage',
        'Custom domain',
        'Analytics dashboard',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integrations',
        'Unlimited storage',
        'SLA guarantee',
        'Advanced security',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                From idea to income — <span className="text-primary">on autopilot</span>.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Launch your business faster with our production-ready Next.js starter. 
                Everything you need to start generating revenue, built-in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Autopilot Demo — Free 14‑day
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/assets/hero-3x2.png"
                alt="Hero illustration"
                fill
                className="object-contain rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600">
              Built with modern tools and best practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that's right for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl ${
                  tier.popular 
                    ? 'bg-primary text-white shadow-2xl scale-105' 
                    : 'bg-white text-gray-900 border-2 border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    <span className={tier.popular ? 'text-blue-100' : 'text-gray-600'}>
                      {tier.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className={`h-6 w-6 mr-2 flex-shrink-0 ${
                          tier.popular ? 'text-accent' : 'text-primary'
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={tier.popular ? 'secondary' : 'primary'}
                  className="w-full"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Start Your Free Trial"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Welcome to Autopilot! Start your 14-day free trial and experience how easy it is to launch your business.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Acme Inc."
              />
            </div>
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                alert('Demo mode - Form submission would happen here!');
              }}
            >
              Start Free Trial
            </Button>
          </form>
          <p className="text-xs text-gray-500 text-center">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </Modal>
    </>
  );
}
