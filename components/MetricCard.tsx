
import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-gray-600 text-sm sm:text-base">
        {label}
      </div>
    </div>
  );
}
