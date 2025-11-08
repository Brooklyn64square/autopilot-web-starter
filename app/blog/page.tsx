
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'launching-saas-in-days-not-months',
    title: 'Launching Your SaaS in Days, Not Months',
    excerpt: 'Learn how modern Next.js starters can help you ship your product faster and start validating your business idea in record time.',
    date: 'November 5, 2025',
    author: {
      name: 'Alex Martinez',
      avatar: '👨‍💻',
    },
    category: 'Product',
    readTime: '5 min read',
    image: 'https://www.shutterstock.com/image-vector/rocket-launch-sky-flying-over-260nw-1482551156.jpg',
  },
  {
    slug: 'stripe-integration-best-practices',
    title: 'Stripe Integration: Best Practices for 2025',
    excerpt: 'A comprehensive guide to integrating Stripe payments in your Next.js application, from setup to advanced features like subscriptions.',
    date: 'November 1, 2025',
    author: {
      name: 'Sarah Chen',
      avatar: '👩‍💼',
    },
    category: 'Technical',
    readTime: '8 min read',
    image: 'https://media.istockphoto.com/id/496994371/vector/vector-credit-card.jpg?s=612x612&w=0&k=20&c=adCXUABpW3bKCsuZ2DyNb0mGKNUuqHp3mb4P6hg1kS8=',
  },
  {
    slug: 'nextjs-14-app-router-guide',
    title: 'Next.js 14 App Router: A Complete Guide',
    excerpt: 'Dive deep into the Next.js 14 App Router and learn how server components and streaming can dramatically improve your application performance.',
    date: 'October 28, 2025',
    author: {
      name: 'David Kim',
      avatar: '👨‍🔬',
    },
    category: 'Technical',
    readTime: '12 min read',
    image: 'https://static.vecteezy.com/system/resources/previews/005/445/998/non_2x/person-developing-a-website-glyph-illustration-of-web-developer-vector.jpg',
  },
  {
    slug: 'from-zero-to-revenue',
    title: 'From Zero to $10K MRR: A Case Study',
    excerpt: 'How one entrepreneur used Autopilot to launch a profitable SaaS business in just 30 days, complete with lessons learned.',
    date: 'October 25, 2025',
    author: {
      name: 'Emma Wilson',
      avatar: '👩‍🚀',
    },
    category: 'Case Study',
    readTime: '10 min read',
    image: 'https://thumbs.dreamstime.com/b/upward-trending-arrow-business-graph-red-dimensional-zigzag-showing-growth-improvement-success-development-viewed-44092356.jpg',
  },
  {
    slug: 'tailwind-css-productivity-tips',
    title: '10 Tailwind CSS Tips to Boost Your Productivity',
    excerpt: 'Master these Tailwind CSS techniques to build beautiful, responsive interfaces faster than ever before.',
    date: 'October 20, 2025',
    author: {
      name: 'Marcus Taylor',
      avatar: '🎨',
    },
    category: 'Design',
    readTime: '6 min read',
    image: 'http://unfocussed.com/cdn/shop/articles/Essential_Design_Principles_97e6546e-c631-414b-bc6d-bda49e17c344.jpg?v=1710642429',
  },
  {
    slug: 'authentication-security-checklist',
    title: 'Authentication Security Checklist for Modern Apps',
    excerpt: 'Essential security practices every developer should implement when building authentication systems in 2025.',
    date: 'October 15, 2025',
    author: {
      name: 'Rachel Foster',
      avatar: '🔐',
    },
    category: 'Security',
    readTime: '7 min read',
    image: 'https://thumbs.dreamstime.com/z/cybersecurity-shield-padlock-icon-graphic-shield-graphic-gradient-colors-orange-to-purple-bright-yellow-padlock-400374314.jpg',
  },
];

const categories = ['All', 'Product', 'Technical', 'Case Study', 'Design', 'Security'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The Autopilot Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Insights, tutorials, and best practices for building and launching successful web applications.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                {/* Featured Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-contain p-8"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{post.author.avatar}</span>
                      <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss an Update</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest articles, tutorials, and product updates delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            Join 5,000+ developers who get our weekly newsletter
          </p>
        </div>
      </section>
    </div>
  );
}
