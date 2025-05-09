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
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2' 
          : 'py-3'
      }`}
      style={{
        backgroundColor: scrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.92)',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59, 130, 246, 0.15)' : '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - visible on all screens */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-auto h-9 md:h-12 flex items-center">
                <div className="absolute -left-3 -top-3 w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full opacity-70 
                  animate-pulse"></div>
                <Image 
                  src="/images/careviews logo.png" 
                  alt="CareViews Logo"
                  width={150}
                  height={45}
                  className="object-contain w-auto h-full relative z-10"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation - hidden on mobile */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 text-gray-700 ${router.pathname === '/' ? 'font-bold text-blue-600' : ''}`}>
              <span>Home</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/about" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 text-gray-700 ${router.pathname === '/about' ? 'font-bold text-blue-600' : ''}`}>
              <span>About</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/services" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 text-gray-700 ${router.pathname === '/services' ? 'font-bold text-blue-600' : ''}`}>
              <span>Services</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link href="/intake" className={`group relative px-2 py-1 font-medium text-sm transition-colors duration-200 text-gray-700 ${router.pathname === '/intake' ? 'font-bold text-blue-600' : ''}`}>
              <span>Intake Form</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${router.pathname === '/intake' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <div className="ml-3">
              <Link 
                href="/contact" 
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  router.pathname === '/contact' 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </nav>
          
          {/* Mobile header elements - visible only on mobile */}
          <div className="flex items-center md:hidden space-x-3">
            {/* Intake form button for mobile */}
            <Link 
              href="/intake" 
              className="px-3 py-1.5 rounded-full font-medium text-xs bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition duration-150"
            >
              Request Staff
            </Link>
            
            {/* Mobile menu button - improved visibility */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 shadow-sm border border-blue-200"
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

      {/* Mobile menu slide panel - with improved styling */}
      <div 
        className={`md:hidden fixed right-0 top-0 z-50 w-72 h-full transform transition-transform duration-300 ease-in-out mobile-drawer ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.2)',
          borderLeft: '1px solid rgba(59, 130, 246, 0.2)',
        }}
      >
        <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-blue-100">
          <div className="flex items-center">
            <div className="relative w-auto h-9">
              <div className="absolute -left-2 -top-2 w-14 h-14 bg-blue-200 rounded-full opacity-80"></div>
              <Image 
                src="/images/careviews logo.png" 
                alt="CareViews Logo"
                width={130}
                height={36}
                className="object-contain w-auto h-full relative z-10"
              />
            </div>
          </div>
          <button 
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-blue-600 hover:text-blue-800 shadow-md border border-blue-200 focus:outline-none transform transition-transform duration-200 hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        
        <div className="py-6 px-5 overflow-y-auto h-[calc(100%-80px)] bg-white">
          <nav className="space-y-2">
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
            
            <div className="mt-6 mb-8">
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
            
            {/* Additional content for the mobile menu */}
            <div className="pt-6 border-t border-gray-200">
              <div className="px-4 py-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Remote Staffing Benefits</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center text-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100 mr-3">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>80% cost reduction</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100 mr-3">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Access to global talent</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100 mr-3">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>24/7 operational support</span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white shadow-inner">
          <div className="text-sm text-gray-600 text-center font-medium">
            &copy; {new Date().getFullYear()} CareViews Staffing
          </div>
        </div>
      </div>
      
      {/* Mobile menu backdrop - adds semi-transparent overlay when menu is open */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      <style jsx global>{`
        .mobile-drawer {
          width: 85%;
          max-width: 320px;
          height: 100vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          will-change: transform;
          overscroll-behavior: contain;
        }
      `}</style>
    </header>
  );
} 