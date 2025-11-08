
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
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
            <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
