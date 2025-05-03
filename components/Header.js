// Enhanced header component with animations and improved mobile experience
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Close menu function (memoized with useCallback)
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Handle initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    // Close mobile menu on route change
    router.events.on('routeChangeStart', closeMenu);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeStart', closeMenu);
    };
  }, [router.events, closeMenu]);

  // Define active link style
  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 transition-transform duration-300 hover:scale-105" onClick={closeMenu}>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                scrolled ? 'bg-blue-600 shadow-md' : 'bg-white'
              }`}>
                <span className={`font-bold text-xl transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-blue-600'
                }`}>CV</span>
              </div>
              <span className={`text-xl font-bold font-heading transition-colors duration-300 ${
                scrolled ? 'text-blue-800' : 'text-white'
              }`}>
                Clearview Staffing
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:gap-10">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Intake Form', href: '/intake' },
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`group relative px-3 py-2 font-medium text-base transition-all duration-200 ${
                  scrolled 
                    ? 'text-gray-800 hover:text-blue-700' 
                    : 'text-white hover:text-blue-100'
                } ${isActive(item.href) ? 'font-semibold' : ''}`}
              >
                <span className="relative z-10">{item.name}</span>
                <span 
                  className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
            
            <div className="ml-3">
              <Link 
                href="/contact" 
                className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-sm hover:shadow-md transform hover:translate-y-[-2px] ${
                  scrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                scrolled 
                  ? 'text-gray-500 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-100 hover:bg-white/10'
              } transition-all duration-200`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 transition-transform duration-200 rotate-90" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6 transition-transform duration-200" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide-down animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg rounded-b-xl border-t border-gray-100">
          <div className="pt-3 pb-4 px-4 space-y-1">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Intake Form', href: '/intake' },
            ].map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-300 delay-${index * 100}`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
                }}
              >
                <Link 
                  href={item.href} 
                  className={`block px-4 py-3 my-1 rounded-lg text-lg font-medium ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  } transition-colors duration-200`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            
            <div
              className="mt-4 transform transition-all duration-300"
              style={{ 
                transitionDelay: '200ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
              }}
            >
              <Link 
                href="/contact" 
                className="block w-full px-4 py-3 rounded-lg text-center text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 