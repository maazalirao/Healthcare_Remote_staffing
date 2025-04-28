import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ProcessSteps() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 rounded-full text-blue-600 mb-4">
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              How We Work With You
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to get started with our remote healthcare staffing solutions.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative mt-24"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Step 1 */}
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16"
            variants={stepVariants}
          >
            <div className="rounded-full flex-shrink-0 overflow-hidden w-20 h-20 md:w-32 md:h-32 bg-white shadow-xl flex items-center justify-center">
              <motion.div 
                className="flex items-center justify-center w-full h-full text-indigo-600 bg-blue-50 text-2xl md:text-3xl font-bold z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span>1</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery Call</h3>
              <p className="text-gray-600">
                Initial strategic call to identify all the pain points in your healthcare operations and identify optimal solutions. 
                You receive a consultation (in-person, phone, or video call) to discuss the themes, scope of work, skill set requirements, 
                preferred communication methods, and time zones.
              </p>
            </div>
            <div className="hidden md:block md:w-1/3">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl h-48 md:h-60"
                whileHover={{ scale: 1.03, rotate: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-semibold text-lg">Discovery Call</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Connecting line */}
          <motion.div 
            className="absolute left-10 md:left-16 top-20 md:top-[7.5rem] w-1 h-20 md:h-32 bg-indigo-200 z-0"
            variants={lineVariants}
          ></motion.div>
          
          {/* Step 2 */}
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-8 md:mt-12"
            variants={stepVariants}
          >
            <div className="rounded-full flex-shrink-0 overflow-hidden w-20 h-20 md:w-32 md:h-32 bg-white shadow-xl flex items-center justify-center">
              <motion.div 
                className="flex items-center justify-center w-full h-full text-indigo-600 bg-blue-50 text-2xl md:text-3xl font-bold z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span>2</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Contract</h3>
              <p className="text-gray-600">
                With everything discussed and Virtual Assistant(s) in place, we send the contract to you for review and 
                signature through DocuSign. We'll issue the invoice for the one-time initiation fee and have 
                your VA(s) sign a Non-Disclosure Agreement (NDA) to protect your confidential information.
              </p>
            </div>
            <div className="hidden md:block md:w-1/3">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl h-48 md:h-60"
                whileHover={{ scale: 1.03, rotate: -1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-semibold text-lg">Contract Signing</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Connecting line */}
          <motion.div 
            className="absolute left-10 md:left-16 top-[11.5rem] md:top-[17.5rem] w-1 h-20 md:h-32 bg-indigo-200 z-0"
            variants={lineVariants}
          ></motion.div>
          
          {/* Step 3 */}
          <motion.div 
            className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-8 md:mt-12"
            variants={stepVariants}
          >
            <div className="rounded-full flex-shrink-0 overflow-hidden w-20 h-20 md:w-32 md:h-32 bg-white shadow-xl flex items-center justify-center">
              <motion.div 
                className="flex items-center justify-center w-full h-full text-indigo-600 bg-blue-50 text-2xl md:text-3xl font-bold z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span>3</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Onboarding</h3>
              <p className="text-gray-600">
                An initial meeting with you and your Virtual Assistant to establish rapport and discuss primary job tasks and themes. 
                Required paperwork is completed and access to all relevant VA tools, software, and systems is set up. 
                Followed by VA orientation on your business, tools, and associated software.
              </p>
            </div>
            <div className="hidden md:block md:w-1/3">
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-xl h-48 md:h-60"
                whileHover={{ scale: 1.03, rotate: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-semibold text-lg">Onboarding Process</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 