
import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Case Studies — Autopilot',
  description: 'Real results from brands using Autopilot to grow revenue',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Indie Maker Triples Revenue in 90 Days",
      industry: "DTC Accessories",
      challenge: "Low conversion rate and manual marketing taking 20+ hours/week",
      results: [
        "Revenue increased 3× in 90 days",
        "Conversion rate improved from 1.6% to 4.8%",
        "Time spent on marketing reduced to 2 hours/week",
        "First payback in 42 days"
      ],
      quote: "Autopilot launched our brand in two days and tripled monthly revenue in three months.",
      author: "Maya R., Founder"
    },
    {
      title: "Local Service Business Goes National",
      industry: "Home Services",
      challenge: "Limited to local market, inconsistent lead generation",
      results: [
        "Expanded to 15 new markets in 6 months",
        "Lead cost decreased by 60%",
        "Booking rate increased by 40%",
        "Revenue up 250% year-over-year"
      ],
      quote: "We let the Autopilot run our ads and it paid back in under 60 days.",
      author: "Leo S., DTC Founder"
    },
    {
      title: "Creator Launches Product Line",
      industry: "Creator Economy",
      challenge: "Audience but no ecommerce infrastructure",
      results: [
        "Launched brand in 48 hours",
        "First month: $28K in revenue",
        "60% repeat customer rate",
        "4.5% conversion rate from day one"
      ],
      quote: "I went from idea to first sale in under a week. Autopilot handled everything.",
      author: "Jordan T., Content Creator"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Real Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how brands are using Autopilot to launch faster and grow revenue
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="text-sm text-primary font-semibold">{study.industry}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">
                    {study.title}
                  </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">The Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-lg text-gray-700 italic mb-3">
                    "{study.quote}"
                  </p>
                  <p className="text-gray-900 font-semibold">
                    — {study.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial and see what Autopilot can do for you
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
