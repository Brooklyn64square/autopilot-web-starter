
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'How It Works — Autopilot',
  description: 'Learn how Autopilot launches and scales your brand in 4 simple steps',
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      title: "Answer 8 quick prompts",
      description: "Tell us about your audience, product, tone, and margin targets. Our AI uses this to understand your brand DNA.",
      details: [
        "Target audience demographics and pain points",
        "Product/service description and unique value",
        "Brand tone and voice preferences",
        "Profit margin targets and pricing strategy"
      ],
      icon: "📝"
    },
    {
      step: 2,
      title: "One-click brand launch",
      description: "Autopilot generates your complete brand identity, website, and checkout experience in hours.",
      details: [
        "Brand name, logo, and visual identity",
        "Professional product photography",
        "Persuasive copy tuned to your audience",
        "Fully functional checkout and payment processing"
      ],
      icon: "🚀"
    },
    {
      step: 3,
      title: "AI runs your operations",
      description: "Autopilot takes over marketing, sales, and optimization while you maintain oversight.",
      details: [
        "Autonomous ad campaigns (Meta, Google)",
        "Conversational AI sales agents",
        "Continuous page and copy optimization",
        "Real-time budget allocation"
      ],
      icon: "🤖"
    },
    {
      step: 4,
      title: "Scale with confidence",
      description: "Autopilot runs experiments and provides revenue-first recommendations to accelerate growth.",
      details: [
        "Automatic A/B and multivariate testing",
        "Predictive analytics and forecasting",
        "Strategic growth recommendations",
        "Human-in-loop approvals for major changes"
      ],
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            How Autopilot Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to revenue-generating brand in 4 simple steps
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-primary text-sm font-semibold mb-2">STEP {step.step}</div>
                <div className="text-6xl mb-4">{step.icon}</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-gray-400 text-lg">Illustration {step.step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Launch your brand in hours with a free 14-day trial
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
