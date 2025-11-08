
import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';

export const metadata: Metadata = {
  title: 'Features — Autopilot',
  description: 'Explore all the powerful features that make Autopilot the complete AI brand operator',
};

export default function FeaturesPage() {
  const features = [
    {
      title: "Instant Brand Builder",
      desc: "AI-generated brand name, logo, visual identity, and product photography perfectly tuned to your target audience and market position.",
      icon: "🎨",
      details: ["Brand naming & logo design", "Product photography", "Color palette & typography", "Brand guidelines"]
    },
    {
      title: "Autonomous Commerce Engine",
      desc: "Complete ecommerce infrastructure with dynamic pricing, inventory management, payment processing, and automated fulfillment routing.",
      icon: "💰",
      details: ["Dynamic pricing optimization", "Inventory sync", "Multi-gateway payments", "Fulfillment automation"]
    },
    {
      title: "Conversational Sales Agents",
      desc: "AI-powered chat agents that engage visitors 24/7, pre-qualify leads, answer questions, and hand off to humans at the perfect moment.",
      icon: "💬",
      details: ["24/7 availability", "Natural conversations", "Lead qualification", "Smart human handoff"]
    },
    {
      title: "Growth Autopilot",
      desc: "Autonomous ad campaign management across Meta and Google with automatic creative generation, targeting optimization, and budget allocation.",
      icon: "📊",
      details: ["Ad creative generation", "Audience targeting", "Budget optimization", "Multi-platform campaigns"]
    },
    {
      title: "Continuous Conversion Lab",
      desc: "Automated A/B and multivariate testing of pages, copy, and offers with intelligent rollout of winning variations.",
      icon: "🧪",
      details: ["A/B testing", "Multivariate experiments", "Statistical significance", "Automatic rollouts"]
    },
    {
      title: "Virtual COO Dashboard",
      desc: "Real-time insights into cashflow, tasks, experiment results, and strategic recommendations with one-click approvals.",
      icon: "📋",
      details: ["Cashflow monitoring", "Task management", "Experiment tracking", "Strategic insights"]
    },
    {
      title: "Email & SMS Automation",
      desc: "Personalized email and SMS campaigns triggered by customer behavior, with AI-optimized send times and content.",
      icon: "✉️",
      details: ["Behavioral triggers", "Personalization", "Send-time optimization", "Multi-channel campaigns"]
    },
    {
      title: "Customer Intelligence",
      desc: "Deep customer analytics, segmentation, and lifetime value prediction to inform strategic decisions.",
      icon: "🎯",
      details: ["Customer segmentation", "LTV prediction", "Behavioral analytics", "Churn prediction"]
    },
    {
      title: "SEO Optimization",
      desc: "Automatic on-page SEO optimization, content recommendations, and technical SEO monitoring.",
      icon: "🔍",
      details: ["On-page optimization", "Content recommendations", "Technical SEO", "Performance monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Complete AI Brand Operations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch, run, and scale your brand — fully autonomous with human oversight
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.desc}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-page">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Autopilot connects with all the tools you already use
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Stripe', 'Shopify', 'Meta Ads', 'Google Ads', 'Shippo', 'Zapier', 'Mailchimp', 'Klaviyo'].map((integration) => (
              <div key={integration} className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-center">
                <span className="font-semibold text-gray-700">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experience the power of Autopilot
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial and see all features in action
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
