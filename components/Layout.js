// Layout component that wraps all pages with a common header and footer
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsRouteChanging(true);
    };
    
    const handleRouteChangeComplete = () => {
      setIsRouteChanging(false);
    };
    
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
    // Set page as loaded after initial render
    setPageLoaded(true);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Loading indicator */}
      {isRouteChanging && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-600 z-50 animate-pulse" />
      )}
      
      <Header />
      
      <main className={`flex-grow transition-opacity duration-500 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
} 