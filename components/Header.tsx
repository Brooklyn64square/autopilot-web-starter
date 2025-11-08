
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/logo.png" 
              alt="Autopilot Logo" 
              width={150} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link 
              href="#contact" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
