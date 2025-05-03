// ProblemSolution component displaying common problems and our solution
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ProblemSolution() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const problems = [
    "Struggling with high labor costs and low retention?",
    "Need specialized talent without the overhead?",
    "Finding it difficult to scale your team efficiently?"
  ];

  const solution = "We recruit and deliver fully trained remote professionals — vetted, experienced, and reliable — so you can focus on growing your business, not staffing challenges.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const solutionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5, // Delay slightly after problems appear
      },
    },
  };

  return (
    <section 
      id="problem-solution-section" 
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-52 md:w-72 h-40 sm:h-52 md:h-72 bg-blue-100 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-52 md:w-72 h-40 sm:h-52 md:h-72 bg-indigo-100 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Problems Section */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 text-center md:text-left">
              Facing Staffing Hurdles?
            </h2>
            {problems.map((problem, index) => (
              <motion.div 
                key={index} 
                className="flex items-start p-3 sm:p-4 bg-red-50 rounded-lg shadow-sm border border-red-100"
                variants={itemVariants}
              >
                <ExclamationTriangleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0 mr-2 sm:mr-3 mt-0.5 sm:mt-1" />
                <p className="text-base sm:text-lg text-gray-700">{problem}</p>
              </motion.div>
            ))}
          </div>

          {/* Solution Section */}
          <motion.div 
            className="bg-blue-600 text-white p-6 sm:p-7 md:p-8 rounded-xl shadow-lg relative overflow-hidden"
            variants={solutionVariants}
          >
            {/* Decorative overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 opacity-80 z-0"></div>
            
            <div className="relative z-10">
              <CheckCircleIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white mb-3 sm:mb-4 mx-auto md:mx-0" />
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center md:text-left">
                Our Solution
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
                {solution}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 