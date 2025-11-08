
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="p-8 rounded-xl bg-white border-2 border-gray-100 shadow-lg">
      <div className="text-4xl text-primary mb-4">"</div>
      <p className="text-gray-700 text-lg mb-6 italic">
        {quote}
      </p>
      <p className="text-gray-900 font-semibold">
        — {author}
      </p>
    </div>
  );
}
