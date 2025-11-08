
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function FeatureCard({ title, description, icon = '✨' }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}
