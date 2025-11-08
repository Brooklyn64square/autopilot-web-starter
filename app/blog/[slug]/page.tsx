
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  readTime: string;
  image: string;
}

// Sample blog post data
const blogPosts: Record<string, BlogPost> = {
  'launching-saas-in-days-not-months': {
    slug: 'launching-saas-in-days-not-months',
    title: 'Launching Your SaaS in Days, Not Months',
    excerpt: 'Learn how modern Next.js starters can help you ship your product faster and start validating your business idea in record time.',
    date: 'November 5, 2025',
    author: {
      name: 'Alex Martinez',
      avatar: '👨‍💻',
      bio: 'Full-stack developer and startup advisor with 10+ years of experience building SaaS products.',
    },
    category: 'Product',
    readTime: '5 min read',
    image: 'https://thumbs.dreamstime.com/b/papercut-rocket-launch-yellow-gradient-background-startup-concept-396993042.jpg',
    content: `
# The Speed Problem

In today's fast-moving tech landscape, speed is everything. The faster you can validate your idea with real users, the better your chances of success. Yet, many entrepreneurs spend months building the "perfect" product before getting any user feedback.

## The Traditional Approach

Traditionally, launching a SaaS product involved:

- Setting up infrastructure and DevOps pipelines
- Building authentication from scratch
- Integrating payment processors
- Creating email templates
- Setting up databases and ORMs
- Implementing security best practices

All of this before you even start building your core product features!

## The Modern Solution

Modern Next.js starters like Autopilot change this equation dramatically. Instead of spending months on boilerplate, you can launch in days by:

1. **Starting with Production-Ready Code**: All the infrastructure is already built and tested
2. **Focus on Your Unique Value**: Spend time on what makes your product special
3. **Iterate Based on Feedback**: Get to market faster and learn from real users

## Real Results

Companies using this approach have reported:

- 85% reduction in initial development time
- 70% lower initial costs
- Faster time to first paying customer
- More time for customer development

## Getting Started

The key is to start with a solid foundation and customize only what you need. Here's the recommended approach:

1. Deploy the starter template
2. Customize branding and copy
3. Add your unique features
4. Launch and start collecting feedback
5. Iterate based on user needs

## Conclusion

The goal isn't to build the perfect product from day one. It's to get something in front of users quickly, learn from their feedback, and iterate. Modern starters make this possible by handling all the boring stuff so you can focus on what matters.

Ready to launch faster? Get started with Autopilot today.
    `,
  },
  'stripe-integration-best-practices': {
    slug: 'stripe-integration-best-practices',
    title: 'Stripe Integration: Best Practices for 2025',
    excerpt: 'A comprehensive guide to integrating Stripe payments in your Next.js application, from setup to advanced features like subscriptions.',
    date: 'November 1, 2025',
    author: {
      name: 'Sarah Chen',
      avatar: '👩‍💼',
      bio: 'Payment systems architect and fintech consultant specializing in modern payment solutions.',
    },
    category: 'Technical',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/5849559/pexels-photo-5849559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `
# Modern Stripe Integration

Stripe has become the de facto standard for online payments, and for good reason. But there are many ways to integrate it, and some are better than others.

## Key Considerations

When integrating Stripe into your Next.js application, consider these factors:

### Security First

- Always use Stripe's official SDK
- Never expose your secret keys in client-side code
- Use environment variables for configuration
- Implement webhook signature verification
- Use HTTPS in production

### User Experience

- Provide clear error messages
- Show loading states during payment processing
- Handle edge cases gracefully
- Support multiple payment methods
- Make the checkout flow as smooth as possible

## Implementation Steps

Here's the recommended approach for a solid Stripe integration:

1. **Set up your Stripe account** and get your API keys
2. **Install the Stripe SDK** for both client and server
3. **Create payment intents** on the server side
4. **Implement the checkout flow** on the client
5. **Set up webhook handlers** for payment events
6. **Test thoroughly** with Stripe's test mode

## Advanced Features

Once you have the basics working, consider these advanced features:

- **Subscription Management**: Recurring billing for SaaS products
- **Metered Billing**: Usage-based pricing models
- **Connect**: Marketplace and platform payments
- **Radar**: Fraud prevention
- **Billing Portal**: Self-service subscription management

## Common Pitfalls to Avoid

Many developers make these mistakes when integrating Stripe:

1. Not properly handling webhooks
2. Exposing secret keys in client code
3. Not implementing idempotency
4. Poor error handling
5. Not testing edge cases

## Conclusion

A well-implemented Stripe integration can be the difference between a smooth customer experience and a frustrating one. Take the time to do it right, and your users will thank you.
    `,
  },
  // Add more posts as needed...
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-blue-200 hover:text-white transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <span className="font-semibold text-blue-200 uppercase tracking-wide">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-contain p-12"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Author Info */}
            <div className="flex items-center space-x-4 pb-8 mb-8 border-b border-gray-200">
              <div className="text-5xl">{post.author.avatar}</div>
              <div>
                <div className="font-semibold text-gray-900 text-lg">{post.author.name}</div>
                <div className="text-gray-600">{post.author.bio}</div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-700 ml-6">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                if (paragraph.match(/^\d+\. /)) {
                  return (
                    <li key={index} className="text-gray-700 ml-6 list-decimal">
                      {paragraph.replace(/^\d+\. /, '')}
                    </li>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="text-gray-700 mb-4 font-bold">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.trim() === '') {
                  return <div key={index} className="h-4" />;
                }
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Share & Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              View All Posts
            </Link>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Share on Twitter
              </button>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts CTA */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Launch your SaaS in days with our production-ready Next.js starter.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
