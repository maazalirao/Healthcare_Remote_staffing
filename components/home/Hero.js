// Hero component for the homepage
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi'; // Import for scroll indicator

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background with image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Enhanced overlay with more sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-900/40 z-10"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 z-[11]"></div>
        
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/austin-distel-wawEfYdpkag-unsplash.jpg"
            alt="Professionals in a meeting"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 md:py-20 mt-24">
        <div className="max-w-4xl mx-auto text-center p-6 sm:p-8 md:p-12 rounded-xl relative">
          {/* Glassy background with subtle border */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 backdrop-filter backdrop-blur-sm z-[-1]"></div>
          
          {/* Decorative elements - hidden on small screens */}
          <div className="absolute -top-10 -left-10 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl hidden sm:block"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl hidden sm:block"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-2 text-blue-300 font-semibold tracking-wider uppercase text-xs sm:text-sm"
          >
            Professional Remote Staffing
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Your Global Workforce</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Connect with top-tier <span className="font-semibold">industry professionals </span> at <span className="font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">80% less cost</span> than local equivalents.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              size="xl" 
              variant="primary" 
              className="font-medium text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 rounded-full shadow-xl hover:shadow-blue-500/40 hover:transform hover:scale-105 transition-all bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 border-0 relative overflow-hidden group"
              href="/intake"
            >
              <span className="relative z-10">Request Staff Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
            
            <Button 
              size="xl" 
              variant="white" 
              className="font-medium text-base sm:text-lg py-3 sm:py-4 px-8 sm:px-12 rounded-full shadow-lg hover:transform hover:scale-105 transition-all bg-white/90 text-blue-900 hover:bg-white border border-white/80 relative overflow-hidden group"
              href="/services"
            >
              <span className="relative z-10">Our Services</span>
              <div className="absolute inset-0 bg-blue-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
          </motion.div>
          
          {/* Stats section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="text-center mb-4 sm:mb-0">
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">100+</p>
              <p className="text-white/70 text-xs sm:text-sm">Industry Professionals</p>
            </div>
            <div className="text-center mb-4 sm:mb-0">
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">24/7</p>
              <p className="text-white/70 text-xs sm:text-sm">Support Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">15+</p>
              <p className="text-white/70 text-xs sm:text-sm">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced floating elements - hidden on small screens */}
      <div className="absolute inset-0 pointer-events-none z-[15] hidden sm:block">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-32 md:w-40 h-32 md:h-40 rounded-full border border-blue-300/20"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/6 w-16 md:w-24 h-16 md:h-24 rounded-full bg-blue-400/5 border border-blue-400/10"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.3,
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        onClick={() => window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        })}
      >
        <FiChevronDown className="text-white/70 text-3xl sm:text-4xl" />
      </motion.div>
    </section>
  );
} 