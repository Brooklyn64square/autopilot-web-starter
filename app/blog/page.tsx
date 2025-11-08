
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Autopilot',
  description: 'Latest insights on AI-powered brand operations and DTC growth',
};

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of DTC: AI-First Brand Operations",
      excerpt: "How artificial intelligence is transforming the way brands launch, operate, and scale in 2025.",
      category: "Industry Trends",
      date: "Nov 5, 2025",
      readTime: "5 min read"
    },
    {
      title: "From Maker to Revenue: Launching Your First Brand",
      excerpt: "A step-by-step guide for indie makers and creators looking to launch their first product.",
      category: "Getting Started",
      date: "Nov 1, 2025",
      readTime: "8 min read"
    },
    {
      title: "Revenue Share vs. SaaS: Which Pricing Model is Right?",
      excerpt: "Understanding the pros and cons of different pricing models for AI brand operators.",
      category: "Business Strategy",
      date: "Oct 28, 2025",
      readTime: "6 min read"
    },
    {
      title: "Conversion Optimization on Autopilot",
      excerpt: "How continuous A/B testing and AI-driven optimization can 3× your conversion rate.",
      category: "Marketing",
      date: "Oct 24, 2025",
      readTime: "7 min read"
    },
    {
      title: "The Human-in-Loop Advantage",
      excerpt: "Why the best autonomous systems still need strategic human oversight.",
      category: "AI & Automation",
      date: "Oct 20, 2025",
      readTime: "5 min read"
    },
    {
      title: "Case Study: $0 to $50K MRR in 6 Months",
      excerpt: "Deep dive into how one creator used Autopilot to build a sustainable online business.",
      category: "Case Studies",
      date: "Oct 15, 2025",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights on AI-powered brand operations, growth strategies, and DTC trends
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">📝</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link href="#" className="text-primary text-sm font-semibold hover:underline">
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest insights on AI-powered brand operations delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
