// ProblemSolution component displaying common problems and our solution
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Tab } from '@headlessui/react';

export default function ProblemSolution() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Define the missing pulseAnimation
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.9, 1, 0.9],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('problem-solution-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const problems = [
    {
      title: "High Turnover Rate",
      description: "Healthcare facilities struggle with high staff turnover, leading to increased recruitment costs and decreased quality of care.",
      icon: (
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-14 h-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.path 
            d="M19 5L5 19M5.00001 5L19 19" 
            stroke="rgb(220, 38, 38)" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="rgb(220, 38, 38)" 
            strokeWidth="2" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.svg>
      )
    },
    {
      title: "Talent Shortage",
      description: "Finding qualified healthcare professionals is increasingly difficult, especially in specialized fields and rural areas.",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-14 h-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.path
            d="M12 4v16m8-8H4"
            stroke="rgb(220, 38, 38)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="rgb(220, 38, 38)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.svg>
      )
    },
    {
      title: "Cost Inefficiency",
      description: "Traditional staffing methods are costly, with high agency fees, recruitment costs, and expenses related to staff turnover.",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-14 h-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.path
            d="M15 5L5 15M7.5 5H15v7.5"
            stroke="rgb(220, 38, 38)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="rgb(220, 38, 38)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.svg>
      )
    }
  ];

  const solutions = [
    {
      title: "Remote Staffing Model",
      description: "Our platform enables healthcare facilities to hire qualified remote professionals, reducing turnover and increasing staff satisfaction.",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-14 h-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.path
            d="M5 12l5 5l10 -10"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.svg>
      )
    },
    {
      title: "Global Talent Pool",
      description: "Access a diverse pool of healthcare professionals from around the world, finding the perfect match for specialized positions.",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-14 h-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.path
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M2 12h20"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          />
        </motion.svg>
      )
    },
    {
      title: "Cost-Effective Solution",
      description: "Save on recruitment, training, and overhead costs with our streamlined approach to healthcare staffing.",
      icon: (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-14 h-14"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, rotate: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.path
            d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M12 2v2M12 20v2M20 12h2M2 12h2"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="problem-solution-section" 
      ref={sectionRef}
      className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute -bottom-16 -right-16 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-32 -left-16 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-indigo-200 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-purple-200 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -15, 0],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-teal-200 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 10, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center transition-all duration-1000 transform"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={pulseAnimation}
          >
            <Badge variant="primary" className="mb-3 sm:mb-4 text-xs sm:text-sm">Healthcare Staffing Challenges</Badge>
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transforming Healthcare Staffing Challenges
          </motion.h2>
          <motion.p 
            className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Healthcare organizations face unique challenges with remote staffing. Discover how our solutions address these pain points.
          </motion.p>
        </motion.div>

        <Tab.Group onChange={setActiveTabIndex}>
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tab.List className="inline-flex p-1 space-x-2 bg-blue-50 rounded-xl">
              <Tab
                className={({ selected }) =>
                  `px-5 py-2.5 rounded-lg font-medium transition-all duration-200
                  ${selected 
                    ? 'bg-white text-blue-700 shadow-md' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/[0.5]'
                  }`
                }
              >
                Problems
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-5 py-2.5 rounded-lg font-medium transition-all duration-200
                  ${selected 
                    ? 'bg-white text-blue-700 shadow-md' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/[0.5]'
                  }`
                }
              >
                Solutions
              </Tab>
            </Tab.List>
          </motion.div>
          
          <Tab.Panels className="mt-2">
            <AnimatePresence mode="wait">
              <Tab.Panel key={activeTabIndex}>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {(activeTabIndex === 0 ? problems : solutions).map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -10, 
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)' 
                      }}
                      className={`bg-white p-8 rounded-2xl shadow-md border transition-all duration-300 ${
                        activeTabIndex === 0 
                          ? 'border-red-100 hover:border-red-200' 
                          : 'border-green-100 hover:border-green-200'
                      }`}
                    >
                      <div className="mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </Tab.Panel>
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>

        <motion.div 
          className="mt-10 sm:mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 sm:mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Ready to transform your healthcare staffing approach?
          </motion.h3>
          <motion.p 
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-6 sm:mb-8"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our comprehensive solution addresses the complex challenges of remote healthcare staffing, 
            giving you access to qualified professionals while reducing administrative burden.
          </motion.p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                href="/intake" 
                size="lg" 
                rounded 
                withAnimation 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Start Staffing Now
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                href="/services" 
                variant="outline" 
                size="lg" 
                rounded 
                withAnimation 
                className="w-full sm:w-auto mt-3 sm:mt-0"
              >
                Explore Our Services
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 