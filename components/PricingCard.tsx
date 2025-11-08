
import React from 'react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  onSelect?: () => void;
}

export default function PricingCard({ name, price, features, popular = false, onSelect }: PricingCardProps) {
  return (
    <div 
      className={`relative p-8 rounded-2xl ${
        popular 
          ? 'bg-primary text-white shadow-2xl scale-105' 
          : 'bg-white text-gray-900 border-2 border-gray-200'
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg 
              className={`h-6 w-6 mr-2 flex-shrink-0 ${
                popular ? 'text-accent' : 'text-primary'
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={popular ? 'secondary' : 'primary'}
        className="w-full"
        size="lg"
        onClick={onSelect}
      >
        Get Started
      </Button>
    </div>
  );
}
