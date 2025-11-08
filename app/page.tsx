'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: '⚡ Lightning Fast Setup',
      description: 'Clone, configure, and deploy in under 10 minutes.',
    },
    {
      title: '🔐 Auth Built-In',
      description: 'Secure authentication with NextAuth.js out of the box.',
    },
    {
      title: '💳 Stripe Integration',
      description: 'Accept payments instantly with pre-configured Stripe.',
    },
    {
      title: '🎨 Beautiful UI',
      description: 'Tailwind CSS components that look great everywhere.',
    },
    {
      title: '📱 Fully Responsive',
      description: 'Perfect on mobile, tablet, and desktop.',
    },
    {
      title: '🚀 Deploy Anywhere',
      description: 'Vercel, Netlify, or your own server—your choice.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '',
      features: [
        'Complete source code',
        'Stripe integration',
        'Basic components',
        'Documentation',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$99',
      period: '',
      features: [
        'Everything in Starter',
        'Premium components',
        'Priority support',
        'Lifetime updates',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote: "Autopilot saved me weeks of setup time. I launched my SaaS in 3 days!",
      author: "Alex Chen",
      role: "Founder, TaskFlow",
    },
    {
      quote: "The best Next.js starter I've used. Clean code, great docs.",
      author: "Sarah Miller",
      role: "Developer, IndieMaker",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0066FF] to-[#00CCFF] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                From idea to income — on autopilot.
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Launch your business faster with our production-ready Next.js starter. Everything you need to start generating income, built in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Get Started Demo — Free Setup
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                  alt="Modern business workspace with laptop and technology"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Built with modern tools and best practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all duration-200 bg-white dark:bg-gray-900"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the plan that's right for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl transition-transform duration-200 ${
                  tier.popular 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 transform' 
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:scale-105'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    {tier.period && (
                      <span className={tier.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg 
                        className={`h-6 w-6 mr-2 flex-shrink-0 ${
                          tier.popular ? 'text-yellow-300' : 'text-blue-600 dark:text-purple-400'
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={tier.popular ? '' : 'dark:text-gray-300'}>{feature}</span>
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by developers worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what others are saying about Autopilot
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 border-2 border-gray-100 dark:border-gray-700 shadow-lg"
              >
                <div className="mb-6">
                  <svg 
                    className="h-12 w-12 text-blue-600 dark:text-purple-400 opacity-50" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Build Your Next Big Thing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of developers shipping faster with Autopilot.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl"
          >
            Get Autopilot Now
          </Button>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Get Started with Autopilot"
      >
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            Start building your SaaS today with Autopilot. Choose your plan and get instant access to the complete starter kit.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Plan
              </label>
              <select
                id="plan"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option>Starter - $49</option>
                <option>Pro - $99 (Recommended)</option>
                <option>Enterprise - Custom</option>
              </select>
            </div>
            <Button 
              type="submit" 
              variant="primary" 
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                alert('Demo mode - Purchase would be processed through Stripe here!');
              }}
            >
              Get Started Now
            </Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Secure payment powered by Stripe. Instant access to source code.
          </p>
        </div>
      </Modal>
    </>
  );
}
