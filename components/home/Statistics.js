import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom hook for counting animation
const useCountAnimation = (end, duration = 2, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  useEffect(() => {
    if (!startOnView || inView) {
      let startTime;
      let animationFrame;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };
      
      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, startOnView, inView]);
  
  return [count, ref];
};

export default function Statistics() {
  const [cost, costRef] = useCountAnimation(73);
  const [productivity, productivityRef] = useCountAnimation(13);
  const [companies, companiesRef] = useCountAnimation(67);
  const [employees, employeesRef] = useCountAnimation(59);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-900 to-indigo-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-500 bg-opacity-30 rounded-full text-indigo-200 mb-2 sm:mb-3">
              # By The Numbers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight px-2">
              Outsourcing Staffing Statistics Make the Case
            </h2>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-75 blur-xl"></div>
            <div className="relative bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg border border-indigo-500 border-opacity-20 h-full flex flex-col">
              <div ref={costRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {cost}%
              </div>
              <div className="text-sm sm:text-base text-gray-300 flex-grow">
                cost saving by hiring a remote professional
              </div>
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-75 blur-xl"></div>
            <div className="relative bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg border border-indigo-500 border-opacity-20 h-full flex flex-col">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-400 mb-2">
                &gt;<span ref={productivityRef}>{productivity}</span>%
              </div>
              <div className="text-sm sm:text-base text-gray-300 flex-grow">
                avg. productivity boost from remote staffing
              </div>
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-75 blur-xl"></div>
            <div className="relative bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg border border-indigo-500 border-opacity-20 h-full flex flex-col">
              <div ref={companiesRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {companies}%
              </div>
              <div className="text-sm sm:text-base text-gray-300 flex-grow">
                of global companies hired 1+ remote staff in 2023
              </div>
            </div>
          </motion.div>
          
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg opacity-75 blur-xl"></div>
            <div className="relative bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg border border-indigo-500 border-opacity-20 h-full flex flex-col">
              <div ref={employeesRef} className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-400 mb-2">
                {employees}%
              </div>
              <div className="text-sm sm:text-base text-gray-300 flex-grow">
                of remote staff report higher job satisfaction
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 