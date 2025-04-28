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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with image and blur effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        {/* Background image with blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 backdrop-blur-sm"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80")',
            filter: 'blur(2px)'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-md bg-black/10 p-10 rounded-2xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block mb-2">Your Global Workforce</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-white mb-12 leading-relaxed drop-shadow-lg font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Connect with top-tier <span className="font-semibold">Industry professionals </span> at <span className="font-bold">80% less cost</span> than local equivalents.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button 
              size="xl" 
              variant="primary" 
              className="font-medium text-xl py-5 px-14 rounded-full shadow-xl hover:transform hover:scale-105 transition-all bg-blue-500 border-0"
              href="/intake"
            >
              Hire Now
            </Button>
            
            <Button 
              size="xl" 
              variant="white" 
              className="font-medium text-xl py-5 px-14 rounded-full shadow-xl hover:transform hover:scale-105 transition-all bg-white text-blue-900 hover:bg-blue-50"
              href="/services"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-white/10 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.2,
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full border border-white/20 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.15,
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
    </section>
  );
} 