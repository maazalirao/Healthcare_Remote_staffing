// Hero component with headline, subheadline, and CTA button
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/70 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/healthcare-hero.jpg')] bg-cover bg-center opacity-40"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[15%] w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[40%] right-[25%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] left-[20%] w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              <span className="block">Specialized</span>
              <span className="block mt-1 text-blue-200">Healthcare Staffing</span>
              <span className="block mt-1 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-blue-100 leading-relaxed">
              We connect top healthcare organizations with qualified remote professionals, ensuring quality care delivery while reducing administrative burdens.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/intake"
                className="px-8 py-3 text-base font-medium rounded-full bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
              >
                Start Your Staffing Request
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 text-base font-medium rounded-full bg-blue-700 bg-opacity-30 text-white border border-blue-300 hover:bg-blue-600 hover:bg-opacity-50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          
          <div className={`hidden lg:block transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-indigo-500 rounded-lg opacity-10 blur-xl"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-white font-medium">Available now</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-700 bg-opacity-30 text-blue-100 text-sm">
                    Verified Partners
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-white bg-opacity-5 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold">RN</div>
                      <div>
                        <div className="text-white font-semibold">Registered Nurses</div>
                        <div className="text-blue-200 text-sm">240+ Available Professionals</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white bg-opacity-5 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold">PA</div>
                      <div>
                        <div className="text-white font-semibold">Physician Assistants</div>
                        <div className="text-blue-200 text-sm">120+ Available Professionals</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white bg-opacity-5 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">MA</div>
                      <div>
                        <div className="text-white font-semibold">Medical Assistants</div>
                        <div className="text-blue-200 text-sm">180+ Available Professionals</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                    View all specialties →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 