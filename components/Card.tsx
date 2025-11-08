
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        p-6 rounded-xl bg-white border-2 border-gray-100
        ${hover ? 'hover:border-primary hover:shadow-lg transition-all duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
