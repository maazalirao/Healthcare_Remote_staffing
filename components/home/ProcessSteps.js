import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ClipboardDocumentListIcon, UserGroupIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

export default function ProcessSteps() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const steps = [
    {
      name: 'Tell Us What You Need',
      description: 'Fill out a short request form detailing your staffing requirements, role specifics, and desired qualifications.',
      icon: ClipboardDocumentListIcon,
    },
    {
      name: 'Get Vetted Candidates',
      description: 'We carefully match and present 1–3 pre-screened, best-fit professionals ready for your review and interview.',
      icon: UserGroupIcon,
    },
    {
      name: 'Onboard and Scale',
      description: 'Select your ideal candidate, onboard them quickly, and start saving time and money immediately. Scale your remote team as needed.',
      icon: PresentationChartLineIcon,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} className='py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <motion.h2 
            className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className='text-lg text-gray-600 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our simple 3-step process connects you with elite remote healthcare staff quickly.
          </motion.p>
        </div>

        <motion.div 
          className='grid md:grid-cols-3 gap-10 md:gap-8'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.name} 
              className='text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform transition duration-300 hover:scale-105 hover:shadow-xl'
              variants={itemVariants}
            >
              <div className='mb-5'>
                <span className='inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 ring-4 ring-blue-50'>
                  <step.icon className='h-8 w-8' aria-hidden='true' />
                </span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>{step.name}</h3>
              <p className='text-gray-600'>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 