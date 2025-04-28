// Hero component for the homepage
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient background instead of image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-blue-800 to-indigo-700"></div>
        
        {/* Abstract background animation */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <motion.path
            d="M0,100 C30,70 70,30 100,100"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M0,50 C20,60 50,30 100,50"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.path
            d="M0,80 C40,90 60,70 100,80"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.1 }}
          />
        </motion.svg>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated circles */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-overlay opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-500 mix-blend-overlay opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        
        {/* Floating icons */}
        <motion.div 
          className="absolute top-1/3 right-1/5 text-white opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/5 text-white opacity-20"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white/15 text-white backdrop-blur-sm mb-4 border border-white/20"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(255, 255, 255, 0)',
                  '0 0 0 10px rgba(255, 255, 255, 0.2)',
                  '0 0 0 0 rgba(255, 255, 255, 0)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              Revolutionizing Healthcare Staffing
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Connect With Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">Healthcare Professionals</span> Remotely
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Streamline your healthcare staffing process with our platform that connects you to qualified remote professionals, saving time and resources.
          </motion.p>
          
          {/* Cost Savings Banner */}
          <motion.div
            className="mb-8 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-lg p-4 shadow-lg"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex items-center">
              <svg className="w-8 h-8 text-blue-900 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 8l-8 8"></path>
                <path d="M8 8l8 8"></path>
              </svg>
              <p className="font-semibold text-blue-900 text-lg">
                Up to <span className="font-bold text-xl">40% lower costs</span> than traditional staffing agencies
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="primary" 
                className="font-semibold"
                href="/start"
              >
                Start Staffing Now
                <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="white" 
                className="font-semibold text-blue-700 relative overflow-hidden"
                href="/services"
              >
                <span className="relative z-10">Explore Our Services</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 