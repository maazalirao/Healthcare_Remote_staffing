// Header component with logo and navigation links
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${scrolled ? 'bg-blue-600' : 'bg-white'}`}>
                <span className={`font-bold text-xl ${scrolled ? 'text-white' : 'text-blue-600'}`}>CV</span>
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-blue-800' : 'text-white'}`}>
                Clearview Staffing
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/intake" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <span>Intake Form</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="ml-3">
              <Link 
                href="/contact" 
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${
                scrolled ? 'text-gray-500 hover:text-blue-600' : 'text-white hover:text-blue-100'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg rounded-b-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Services
            </Link>
            <Link href="/intake" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Intake Form
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 