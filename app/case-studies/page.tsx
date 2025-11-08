import Link from 'next/link';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    company: 'TechFlow',
    industry: 'SaaS',
    logo: '💼',
    challenge: 'TechFlow needed to launch their MVP quickly to validate their product-market fit, but building from scratch would take months.',
    solution: 'Using Autopilot, they deployed a production-ready application with payment processing, authentication, and email workflows in just 3 days.',
    results: [
      { metric: 'Time to Market', value: '3 days' },
      { metric: 'Development Cost', value: '-85%' },
      { metric: 'MRR after 3 months', value: '$12,000' },
    ],
    testimonial: {
      quote: 'Autopilot saved us months of development time. We went from idea to paying customers in less than a week.',
      author: 'Sarah Chen',
      role: 'Founder & CEO, TechFlow',
    },
  },
  {
    id: '2',
    company: 'FitnessPro',
    industry: 'Health & Wellness',
    logo: '🏋️',
    challenge: 'FitnessPro wanted to pivot their business model to subscription-based coaching but lacked the technical infrastructure.',
    solution: 'Autopilot provided the complete foundation including Stripe subscriptions, user management, and automated email sequences for onboarding.',
    results: [
      { metric: 'Launch Time', value: '5 days' },
      { metric: 'Active Subscribers', value: '500+' },
      { metric: 'Monthly Revenue', value: '$25,000' },
    ],
    testimonial: {
      quote: 'The built-in payment and authentication features meant we could focus on our content instead of infrastructure.',
      author: 'Marcus Johnson',
      role: 'Co-founder, FitnessPro',
    },
  },
  {
    id: '3',
    company: 'DesignHub',
    industry: 'Creative Services',
    logo: '🎨',
    challenge: 'DesignHub needed a professional platform to sell design templates and digital products but had limited technical resources.',
    solution: 'Autopilot\'s starter template included everything needed for digital product sales, from payment processing to instant digital delivery.',
    results: [
      { metric: 'Setup Time', value: '2 days' },
      { metric: 'Products Sold', value: '1,200+' },
      { metric: 'Revenue (First Quarter)', value: '$45,000' },
    ],
    testimonial: {
      quote: 'As a designer, I was able to launch a fully functional e-commerce platform without writing a single line of code.',
      author: 'Elena Rodriguez',
      role: 'Founder, DesignHub',
    },
  },
  {
    id: '4',
    company: 'LearnFast',
    industry: 'Education Technology',
    logo: '📚',
    challenge: 'LearnFast wanted to create an online course platform but needed advanced features like subscription management and content gating.',
    solution: 'They customized Autopilot\'s authentication and payment flows to create a comprehensive learning management system.',
    results: [
      { metric: 'Development Time', value: '1 week' },
      { metric: 'Enrolled Students', value: '2,500+' },
      { metric: 'Course Completion Rate', value: '78%' },
    ],
    testimonial: {
      quote: 'Starting with Autopilot meant we could spend our time creating great content instead of building infrastructure.',
      author: 'David Park',
      role: 'CEO, LearnFast',
    },
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how businesses are using Autopilot to launch faster, scale smarter, and focus on what matters most — their customers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{study.logo}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{study.company}</h2>
                      <p className="text-gray-600">{study.industry}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">The Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{study.testimonial.author}</p>
                      <p className="text-sm text-gray-600">{study.testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Key Results</h3>
                  <div className="space-y-4">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl"
                      >
                        <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                        <div className="text-gray-700 font-medium">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of entrepreneurs who have launched successful businesses with Autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-block"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
