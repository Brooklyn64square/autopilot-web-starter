
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[500px] h-[125px]">
              <Image
                src="/assets/logo.png"
                alt="Autopilot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors scroll-smooth">
              How it Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors scroll-smooth">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors scroll-smooth">
              Pricing
            </a>
            <span className="text-gray-400 cursor-not-allowed">
              Case Studies
            </span>
            <span className="text-gray-400 cursor-not-allowed">
              Blog
            </span>
            <span className="text-gray-400 cursor-not-allowed">
              Contact
            </span>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/demo">
              <Button variant="outline" size="sm">
                Try Demo
              </Button>
            </Link>
            <Link href="/">
              <Button size="sm">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                How it Works
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>
              <span className="text-gray-400 cursor-not-allowed">
                Case Studies
              </span>
              <span className="text-gray-400 cursor-not-allowed">
                Blog
              </span>
              <span className="text-gray-400 cursor-not-allowed">
                Contact
              </span>
              <div className="pt-4 space-y-2">
                <Link href="/demo" className="block">
                  <Button variant="outline" className="w-full">
                    Try Demo
                  </Button>
                </Link>
                <Link href="/" className="block">
                  <Button className="w-full">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
