// Hero component with headline, subheadline, and CTA button
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating animation variants for decorative elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  // Staggered content reveal animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/70 z-10"></div>
      
      {/* Background color fallback */}
      <div className="absolute inset-0 bg-blue-900 z-0"></div>
      
      {/* Decorative elements with floating animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-5">
        <motion.div 
          className="absolute top-[10%] right-[15%] w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ ...floatingAnimation, x: [0, 15, 0] }}
        ></motion.div>
        <motion.div 
          className="absolute top-[40%] right-[25%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ ...floatingAnimation, x: [0, -20, 0] }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-[20%] left-[20%] w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ ...floatingAnimation, x: [0, 25, 0] }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-[15%] left-[30%] w-60 h-60 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ ...floatingAnimation, x: [0, -15, 0] }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5
          }}
        ></motion.div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-32 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
              variants={itemVariants}
            >
              <span className="block">Specialized</span>
              <span className="block mt-1 text-blue-200">Healthcare Staffing</span>
              <span className="block mt-1 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">Solutions</span>
            </motion.h1>
            <motion.p 
              className="mt-6 max-w-lg text-xl text-blue-100 leading-relaxed"
              variants={itemVariants}
            >
              We connect top healthcare organizations with qualified remote professionals, ensuring quality care delivery while reducing administrative burdens.
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link
                href="/intake"
                className="group relative px-8 py-3 text-base font-medium rounded-full bg-white text-blue-700 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
              >
                <motion.span 
                  className="absolute inset-0 w-0 bg-blue-100 transition-all duration-300 ease-out group-hover:w-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
                <span className="relative z-10">Start Your Staffing Request</span>
              </Link>
              <Link
                href="/services"
                className="group relative px-8 py-3 text-base font-medium rounded-full text-white border border-blue-300 overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <motion.span 
                  className="absolute inset-0 bg-blue-700 bg-opacity-30 transition-all duration-300 ease-out group-hover:bg-opacity-50"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.5 }}
                />
                <span className="relative z-10">Explore Our Services</span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <motion.div 
              className="relative"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-indigo-500 rounded-lg opacity-10 blur-xl"></div>
              <motion.div 
                className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-8 shadow-xl"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-400"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    ></motion.div>
                    <span className="text-white font-medium">Available now</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-700 bg-opacity-30 text-blue-100 text-sm">
                    Verified Partners
                  </div>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="p-4 bg-white bg-opacity-5 rounded-xl group cursor-pointer"
                    whileHover={{ 
                      scale: 1.03, 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full text-white font-bold"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#4338ca",
                        }}
                      >RN</motion.div>
                      <div>
                        <div className="text-white font-semibold">Registered Nurses</div>
                        <div className="text-blue-200 text-sm">240+ Available Professionals</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 bg-white bg-opacity-5 rounded-xl group cursor-pointer"
                    whileHover={{ 
                      scale: 1.03, 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#6366f1",
                        }}
                      >PA</motion.div>
                      <div>
                        <div className="text-white font-semibold">Physician Assistants</div>
                        <div className="text-blue-200 text-sm">120+ Available Professionals</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="p-4 bg-white bg-opacity-5 rounded-xl group cursor-pointer"
                    whileHover={{ 
                      scale: 1.03, 
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#9333ea",
                        }}
                      >MA</motion.div>
                      <div>
                        <div className="text-white font-semibold">Medical Assistants</div>
                        <div className="text-blue-200 text-sm">180+ Available Professionals</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-8 text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                    View all specialties →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 