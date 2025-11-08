
'use client';

import { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OnboardingData {
  step: number;
  name: string;
  email: string;
  company: string;
  audience: string;
  product: string;
  tone: string;
  margin: string;
}

export default function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  const [data, setData] = useState<OnboardingData>({
    step: 1,
    name: '',
    email: '',
    company: '',
    audience: '',
    product: '',
    tone: '',
    margin: '',
  });

  // Load from localStorage on mount
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem('autopilot-onboarding');
      if (saved) {
        try {
          setData(JSON.parse(saved));
        } catch (e) {
          console.error('Failed to parse saved onboarding data');
        }
      }
    }
  }, [isOpen]);

  // Save to localStorage on data change
  useEffect(() => {
    if (isOpen) {
      localStorage.setItem('autopilot-onboarding', JSON.stringify(data));
    }
  }, [data, isOpen]);

  const handleChange = (field: keyof OnboardingData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (data.step < 3) {
      setData(prev => ({ ...prev, step: prev.step + 1 }));
    } else {
      // Final submission
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (data.step > 1) {
      setData(prev => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleSubmit = () => {
    // In production, this would send data to your backend
    console.log('Submitting onboarding data:', data);
    alert('Demo mode: Your trial would start now! Check the console for your data.');
    localStorage.removeItem('autopilot-onboarding');
    handleCloseModal();
  };

  const handleCloseModal = () => {
    onClose();
    // Reset to step 1 when closing
    setTimeout(() => {
      setData(prev => ({ ...prev, step: 1 }));
    }, 300);
  };

  const isStepValid = () => {
    if (data.step === 1) {
      return data.name && data.email && data.company;
    }
    if (data.step === 2) {
      return data.audience && data.product;
    }
    if (data.step === 3) {
      return data.tone && data.margin;
    }
    return false;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      title={`Start Your Free Trial - Step ${data.step} of 3`}
    >
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="flex gap-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 flex-1 rounded-full transition-colors ${
                step <= data.step ? 'bg-primary' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Basic Info */}
        {data.step === 1 && (
          <div className="space-y-4">
            <p className="text-gray-600">Let's start with the basics</p>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company/Brand Name *
              </label>
              <input
                type="text"
                id="company"
                value={data.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Acme Inc."
              />
            </div>
          </div>
        )}

        {/* Step 2: Audience & Product */}
        {data.step === 2 && (
          <div className="space-y-4">
            <p className="text-gray-600">Tell us about your business</p>
            <div>
              <label htmlFor="audience" className="block text-sm font-medium text-gray-700 mb-1">
                Target Audience *
              </label>
              <textarea
                id="audience"
                value={data.audience}
                onChange={(e) => handleChange('audience', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., Busy professionals aged 25-40 looking for..."
                rows={3}
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                Product/Service *
              </label>
              <textarea
                id="product"
                value={data.product}
                onChange={(e) => handleChange('product', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Describe what you're selling..."
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Step 3: Brand & Margins */}
        {data.step === 3 && (
          <div className="space-y-4">
            <p className="text-gray-600">Final touches</p>
            <div>
              <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">
                Brand Tone *
              </label>
              <select
                id="tone"
                value={data.tone}
                onChange={(e) => handleChange('tone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a tone...</option>
                <option value="professional">Professional & Trustworthy</option>
                <option value="friendly">Friendly & Approachable</option>
                <option value="bold">Bold & Disruptive</option>
                <option value="luxury">Luxury & Premium</option>
              </select>
            </div>
            <div>
              <label htmlFor="margin" className="block text-sm font-medium text-gray-700 mb-1">
                Target Profit Margin *
              </label>
              <select
                id="margin"
                value={data.margin}
                onChange={(e) => handleChange('margin', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select margin...</option>
                <option value="20-30">20-30%</option>
                <option value="30-50">30-50%</option>
                <option value="50-70">50-70%</option>
                <option value="70+">70%+</option>
              </select>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 pt-4">
          {data.step > 1 && (
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1"
            >
              Back
            </Button>
          )}
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex-1"
          >
            {data.step === 3 ? 'Start Free Trial' : 'Next'}
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </Modal>
  );
}
