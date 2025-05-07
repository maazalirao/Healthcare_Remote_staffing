// Header component with logo and navigation links
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Add spacer div to prevent content from being hidden under the fixed header */}
      <div className={`w-full ${scrolled ? 'h-[60px]' : 'h-[72px]'} md:h-[80px]`}></div>
      
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-2' 
            : 'py-3'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(5px)',
          boxShadow: scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <div className="relative w-auto h-10 md:h-12">
                  <Image 
                    src="/images/careviews logo.png" 
                    alt="CareViews Logo"
                    width={160}
                    height={48}
                    priority
                    className="object-contain w-auto h-full"
                    style={{
                      filter: scrolled ? 'brightness(1.1) contrast(1.05)' : 'none',
                    }}
                  />
                </div>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-white' : 'text-gray-700'} ${router.pathname === '/' ? 'font-bold' : ''}`}>
                <span>Home</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/about" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-white' : 'text-gray-700'} ${router.pathname === '/about' ? 'font-bold' : ''}`}>
                <span>About</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/services" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-white' : 'text-gray-700'} ${router.pathname === '/services' ? 'font-bold' : ''}`}>
                <span>Services</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <Link href="/intake" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 ${scrolled ? 'text-white' : 'text-gray-700'} ${router.pathname === '/intake' ? 'font-bold' : ''}`}>
                <span>Intake Form</span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/intake' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <div className="ml-3">
                <Link 
                  href="/contact" 
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                    router.pathname === '/contact' 
                      ? 'bg-blue-700 text-white' 
                      : scrolled 
                        ? 'bg-white text-blue-600 hover:bg-blue-50' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
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
                  scrolled ? 'text-white hover:text-blue-100' : 'text-gray-500 hover:text-blue-600'
                }`}
                aria-expanded={isMenuOpen}
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

        {/* Mobile menu slide panel without overlay */}
        <div 
          className={`md:hidden fixed right-0 top-0 z-50 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out mobile-drawer ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundColor: 'white',  // Ensure solid white background
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'  // Add visible shadow for better definition
          }}
        >
          <div className="p-5 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center">
              <div className="relative w-auto h-9">
                <Image 
                  src="/images/careviews logo.png" 
                  alt="CareViews Logo"
                  width={130}
                  height={36}
                  className="object-contain w-auto h-full"
                  priority
                />
              </div>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="pt-4 pb-3 space-y-1 px-4 bg-white">
            <Link 
              href="/" 
              className={`block px-3 py-3 rounded-lg font-medium text-base hover:bg-blue-50 flex items-center ${router.pathname === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
              onClick={handleNavLinkClick}
            >
              <span className={`border-l-4 pl-3 ${router.pathname === '/' ? 'border-blue-600' : 'border-transparent'}`}>Home</span>
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-3 rounded-lg font-medium text-base hover:bg-blue-50 flex items-center ${router.pathname === '/about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
              onClick={handleNavLinkClick}
            >
              <span className={`border-l-4 pl-3 ${router.pathname === '/about' ? 'border-blue-600' : 'border-transparent'}`}>About</span>
            </Link>
            <Link 
              href="/services" 
              className={`block px-3 py-3 rounded-lg font-medium text-base hover:bg-blue-50 flex items-center ${router.pathname === '/services' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
              onClick={handleNavLinkClick}
            >
              <span className={`border-l-4 pl-3 ${router.pathname === '/services' ? 'border-blue-600' : 'border-transparent'}`}>Services</span>
            </Link>
            <Link 
              href="/intake" 
              className={`block px-3 py-3 rounded-lg font-medium text-base hover:bg-blue-50 flex items-center ${router.pathname === '/intake' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
              onClick={handleNavLinkClick}
            >
              <span className={`border-l-4 pl-3 ${router.pathname === '/intake' ? 'border-blue-600' : 'border-transparent'}`}>Intake Form</span>
            </Link>
            <div className="mt-6 px-3">
              <Link 
                href="/contact" 
                className={`block w-full py-3 px-4 rounded-md font-medium text-center ${
                  router.pathname === '/contact' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition duration-150 shadow-md`}
                onClick={handleNavLinkClick}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
            <div className="text-sm text-gray-500 text-center">
              &copy; {new Date().getFullYear()} CareViews Staffing
            </div>
          </div>
        </div>
        
        {/* Transparent overlay for click handling only */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 z-40 bg-transparent"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
} 