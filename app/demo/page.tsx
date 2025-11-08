'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';

// Simple Code Block Component with Syntax Highlighting
function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}

// Interactive Demo Components
function InteractiveButtonDemo() {
  const [clickCount, setClickCount] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<'primary' | 'secondary' | 'outline'>('primary');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl border-2 border-blue-200">
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4">Try clicking the button!</h4>
          <Button 
            variant={selectedVariant} 
            size={selectedSize}
            onClick={() => setClickCount(clickCount + 1)}
          >
            Click me! ({clickCount})
          </Button>
          <p className="text-sm text-gray-600 mt-4">Clicked {clickCount} times</p>
        </div>

        <div className="mt-6 pt-6 border-t border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Variant</label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="outline">Outline</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <CodeBlock
        code={`<Button variant="${selectedVariant}" size="${selectedSize}">
  Click me!
</Button>`}
      />
    </div>
  );
}

function InteractiveFormDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              rows={4}
              placeholder="Your message here..."
            />
          </div>
          <Button type="submit" className="w-full">
            Submit Form
          </Button>
          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-pulse">
              ✓ Form submitted successfully!
            </div>
          )}
        </form>
      </div>

      <CodeBlock
        code={`const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

<form onSubmit={handleSubmit}>
  <input
    type="text"
    value={formData.name}
    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    className="w-full px-4 py-2 border rounded-lg"
  />
  {/* More form fields... */}
</form>`}
      />
    </div>
  );
}

function InteractiveCardDemo() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            onMouseEnter={() => setHoveredCard(num)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`transform transition-all duration-300 ${
              hoveredCard === num ? 'scale-105' : 'scale-100'
            }`}
          >
            <FeatureCard
              icon={num === 1 ? '🚀' : num === 2 ? '⚡' : '🎨'}
              title={`Feature ${num}`}
              description={`This is an interactive card that responds to hover. ${
                hoveredCard === num ? 'Currently hovering!' : 'Hover over me!'
              }`}
            />
          </div>
        ))}
      </div>

      <CodeBlock
        code={`<FeatureCard
  icon="🚀"
  title="Feature Title"
  description="Feature description text"
/>`}
      />
    </div>
  );
}

function ResponsiveDemo() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Mobile', 'Tablet', 'Desktop', 'Large'].map((device) => (
            <div
              key={device}
              className="bg-white p-4 rounded-lg shadow text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-2xl mb-2">📱</div>
              <p className="font-semibold">{device}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6">
          Resize your browser to see responsive behavior!
        </p>
      </div>

      <CodeBlock
        code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Responsive grid layout */}
</div>`}
      />
    </div>
  );
}

function AnimationDemo() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border-2 border-amber-200">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4">
            <div className={`w-16 h-16 bg-primary rounded-lg ${isAnimating ? 'animate-spin' : ''}`} />
            <div className={`w-16 h-16 bg-accent rounded-lg ${isAnimating ? 'animate-bounce' : ''}`} />
            <div className={`w-16 h-16 bg-amber-500 rounded-lg ${isAnimating ? 'animate-pulse' : ''}`} />
          </div>
          <Button onClick={() => setIsAnimating(!isAnimating)}>
            {isAnimating ? 'Stop Animations' : 'Start Animations'}
          </Button>
        </div>
      </div>

      <CodeBlock
        code={`<div className="animate-spin">Spinning</div>
<div className="animate-bounce">Bouncing</div>
<div className="animate-pulse">Pulsing</div>`}
      />
    </div>
  );
}

function SandboxPlayground() {
  const [bgColor, setBgColor] = useState('bg-blue-500');
  const [textSize, setTextSize] = useState('text-xl');
  const [borderRadius, setBorderRadius] = useState('rounded-lg');
  const [customText, setCustomText] = useState('Hello, Autopilot!');

  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500'];
  const sizes = ['text-sm', 'text-base', 'text-xl', 'text-2xl', 'text-4xl'];
  const radius = ['rounded-none', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-full'];

  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-8 rounded-xl border-2 border-gray-300">
        <h4 className="text-lg font-semibold mb-6 text-center">Interactive Sandbox</h4>
        
        {/* Preview */}
        <div className="bg-white p-8 rounded-xl mb-6 flex items-center justify-center min-h-[200px]">
          <div className={`${bgColor} ${textSize} ${borderRadius} text-white px-8 py-4 shadow-lg transition-all duration-300`}>
            {customText}
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
            <select
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              {colors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Text Size</label>
            <select
              value={textSize}
              onChange={(e) => setTextSize(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
            <select
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              {radius.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">Custom Text</label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your text..."
            />
          </div>
        </div>
      </div>

      <CodeBlock
        code={`<div className="${bgColor} ${textSize} ${borderRadius} text-white px-8 py-4">
  ${customText}
</div>`}
      />
    </div>
  );
}

export default function DemoPage() {
  const [activeSection, setActiveSection] = useState('buttons');

  const sections = [
    { id: 'buttons', name: 'Buttons', icon: '🔘' },
    { id: 'forms', name: 'Forms', icon: '📝' },
    { id: 'cards', name: 'Cards', icon: '🃏' },
    { id: 'responsive', name: 'Responsive', icon: '📱' },
    { id: 'animations', name: 'Animations', icon: '✨' },
    { id: 'sandbox', name: 'Sandbox', icon: '🎮' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Interactive Demo
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore the power of the Autopilot starter with live, interactive component previews, 
            code examples, and a sandbox to experiment with styling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeSection === section.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-blue-700 text-white hover:bg-blue-600'
                }`}
              >
                {section.icon} {section.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What This Demo Showcases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See all the powerful features included in the Autopilot starter
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="⚡"
              title="Next.js 14"
              description="Built with the latest Next.js App Router for maximum performance"
            />
            <FeatureCard
              icon="🎨"
              title="Tailwind CSS"
              description="Utility-first CSS framework for rapid UI development"
            />
            <FeatureCard
              icon="🔧"
              title="TypeScript"
              description="Full type safety throughout your application"
            />
            <FeatureCard
              icon="📱"
              title="Responsive"
              description="Mobile-first design that works on all devices"
            />
            <FeatureCard
              icon="✨"
              title="Animations"
              description="Smooth transitions and animations out of the box"
            />
            <FeatureCard
              icon="🚀"
              title="Production Ready"
              description="Deploy to Vercel, AWS, or anywhere else instantly"
            />
          </div>
        </div>
      </section>

      {/* Interactive Component Demos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Buttons */}
          <div id="buttons">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔘 Button Components</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Fully customizable button components with variants, sizes, and interactive states.
            </p>
            <InteractiveButtonDemo />
          </div>

          {/* Forms */}
          <div id="forms">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📝 Form Handling</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Complete form components with validation, state management, and beautiful styling.
            </p>
            <InteractiveFormDemo />
          </div>

          {/* Cards */}
          <div id="cards">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🃏 Card Components</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Versatile card components with hover effects and smooth transitions.
            </p>
            <InteractiveCardDemo />
          </div>

          {/* Responsive Design */}
          <div id="responsive">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📱 Responsive Design</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Mobile-first responsive layouts that adapt to any screen size.
            </p>
            <ResponsiveDemo />
          </div>

          {/* Animations */}
          <div id="animations">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">✨ Animations & Transitions</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Built-in animation utilities for engaging user experiences.
            </p>
            <AnimationDemo />
          </div>

          {/* Sandbox */}
          <div id="sandbox">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎮 Styling Sandbox</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Experiment with Tailwind utilities and see changes in real-time.
            </p>
            <SandboxPlayground />
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Start Code
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Copy and paste these examples to get started quickly
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Create a Simple Page</h3>
              <CodeBlock
                code={`export default function MyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to My Page
        </h1>
        <p className="text-gray-600 text-lg">
          Built with the Autopilot Next.js starter
        </p>
      </div>
    </div>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Route Example</h3>
              <CodeBlock
                code={`export async function POST(request: Request) {
  const data = await request.json();
  
  // Process your data here
  
  return Response.json({ 
    success: true, 
    message: 'Data processed successfully' 
  });
}`}
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stripe Integration</h3>
              <CodeBlock
                code={`import { stripe } from '@/lib/stripe';

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price: 'price_xxxxx',
    quantity: 1,
  }],
  mode: 'payment',
  success_url: \`\${process.env.NEXT_PUBLIC_URL}/success\`,
  cancel_url: \`\${process.env.NEXT_PUBLIC_URL}/cancel\`,
});`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the Autopilot starter and launch your project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-xl">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
