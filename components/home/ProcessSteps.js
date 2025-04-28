import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ProcessSteps() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const [hoverStep, setHoverStep] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 45,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-100 rounded-full opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-32 -left-12 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-indigo-100 rounded-full opacity-40 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-purple-100 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold bg-blue-100 rounded-full text-blue-600 mb-3 sm:mb-5"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Our Proven Process
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4">
              How We Work With You
            </h2>
            <motion.p 
              className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Our streamlined process makes it easy to get started with our remote staffing solutions.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative mt-10 sm:mt-16 md:mt-24"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Step 1 */}
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6 md:gap-16"
            variants={stepVariants}
            onMouseEnter={() => setHoverStep(1)}
            onMouseLeave={() => setHoverStep(null)}
            whileHover={{ x: 5 }}
          >
            <motion.div 
              className="rounded-full flex-shrink-0 overflow-hidden w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-white shadow-xl flex items-center justify-center"
              animate={hoverStep === 1 ? pulseAnimation : {}}
            >
              <motion.div 
                className="flex items-center justify-center w-full h-full text-indigo-600 bg-blue-50 text-xl sm:text-2xl md:text-3xl font-bold z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >1</motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3"
                animate={hoverStep === 1 ? { color: "#4f46e5", x: 3 } : {}}
                transition={{ duration: 0.3 }}
              >
                Discovery Call
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-gray-600"
                variants={fadeInUpVariants}
              >
                Initial strategic call to identify all the pain points in your healthcare operations and identify optimal solutions. 
                You receive a consultation (in-person, phone, or video call) to discuss the themes, scope of work, skill set requirements, 
                preferred communication methods, and time zones.
              </motion.p>
            </div>
            <div className="hidden md:block md:w-1/3">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl h-40 sm:h-48 md:h-64 group"
                whileHover={{ scale: 1.05, rotate: 1, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={hoverStep === 1 ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-white font-semibold text-base sm:text-lg md:text-xl">Discovery Call</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Connecting line - visible on md and above but hidden on mobile */}
          <div className="hidden md:block">
            <motion.div 
              className="absolute left-10 md:left-16 top-20 md:top-[7.5rem] w-1 h-24 md:h-36 bg-gradient-to-b from-blue-200 to-indigo-300 rounded-full z-0"
              variants={lineVariants}
              animate={inView ? { boxShadow: "0 0 8px rgba(99, 102, 241, 0.5)" } : {}}
            ></motion.div>
          </div>
          
          {/* Mobile divider */}
          <div className="flex justify-center md:hidden my-5">
            <motion.div 
              className="w-1 h-10 bg-gradient-to-b from-blue-200 to-indigo-300 rounded-full"
              variants={lineVariants}
            ></motion.div>
          </div>
          
          {/* Step 2 */}
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6 md:gap-16 mt-5 md:mt-16"
            variants={stepVariants}
            onMouseEnter={() => setHoverStep(2)}
            onMouseLeave={() => setHoverStep(null)}
            whileHover={{ x: 5 }}
          >
            <motion.div 
              className="rounded-full flex-shrink-0 overflow-hidden w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-white shadow-xl flex items-center justify-center"
              animate={hoverStep === 2 ? pulseAnimation : {}}
            >
              <motion.div 
                className="flex items-center justify-center w-full h-full text-indigo-600 bg-blue-50 text-xl sm:text-2xl md:text-3xl font-bold z-10"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >2</motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3"
                animate={hoverStep === 2 ? { color: "#6366f1", x: 3 } : {}}
                transition={{ duration: 0.3 }}
              >
                Contract
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-gray-600"
                variants={fadeInUpVariants}
              >
                With everything discussed and Virtual Assistant(s) in place, we send the contract to you for review and 
                signature through DocuSign. We'll issue the invoice for the one-time initiation fee to begin
                the onboarding process with your new team members.
              </motion.p>
            </div>
            <div className="hidden md:block md:w-1/3">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl h-40 sm:h-48 md:h-64 group"
                whileHover={{ scale: 1.05, rotate: -1, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={hoverStep === 2 ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-white font-semibold text-base sm:text-lg md:text-xl">Contract Signing</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Connecting line - visible on md and above but hidden on mobile */}
          <div className="hidden md:block">
            <motion.div 
              className="absolute left-10 md:left-16 top-[12rem] md:top-[19rem] w-1 h-24 md:h-36 bg-gradient-to-b from-indigo-300 to-purple-300 rounded-full z-0"
              variants={lineVariants}
              animate={inView ? { boxShadow: "0 0 8px rgba(139, 92, 246, 0.5)" } : {}}
            ></motion.div>
          </div>
          
          {/* Mobile divider */}
          <div className="flex justify-center md:hidden my-5">
            <motion.div 
              className="w-1 h-10 bg-gradient-to-b from-indigo-300 to-purple-300 rounded-full"
              variants={lineVariants}
            ></motion.div>
          </div>
          
          {/* Step 3 */}
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6 md:gap-16 mt-5 md:mt-16"
            variants={stepVariants}
            onMouseEnter={() => setHoverStep(3)}
            onMouseLeave={() => setHoverStep(null)}
            whileHover={{ x: 5 }}
          >
            <motion.div 
              className="rounded-full flex-shrink-0 overflow-hidden w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-white shadow-xl flex items-center justify-center"
              animate={hoverStep === 3 ? pulseAnimation : {}}
            >
              <motion.div 
                className="flex items-center justify-center w-full h-full text-indigo-600 bg-blue-50 text-xl sm:text-2xl md:text-3xl font-bold z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >3</motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <div className="md:w-1/2 text-center md:text-left">
              <motion.h3 
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3"
                animate={hoverStep === 3 ? { color: "#a855f7", x: 3 } : {}}
                transition={{ duration: 0.3 }}
              >
                Onboarding
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-gray-600"
                variants={fadeInUpVariants}
              >
                An initial meeting with you and your team members to establish rapport and discuss primary job tasks and expectations. 
                Required paperwork is completed and access to all relevant tools, software, and systems is set up. 
                Followed by orientation on your business, tools, and associated software.
              </motion.p>
            </div>
            <div className="hidden md:block md:w-1/3">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl h-40 sm:h-48 md:h-64 group"
                whileHover={{ scale: 1.05, rotate: 1, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={hoverStep === 3 ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-white font-semibold text-base sm:text-lg md:text-xl">Onboarding Process</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Final CTA button */}
          <motion.div 
            className="mt-12 sm:mt-16 md:mt-20 text-center"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Start Your Journey Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 