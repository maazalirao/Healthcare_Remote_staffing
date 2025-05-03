// TrustBuilders component with bullet points highlighting trust factors
import { ShieldCheckIcon, GlobeAltIcon, BriefcaseIcon, LightBulbIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function TrustBuilders() {
  const trustPoints = [
    {
      text: "All Candidates Thoroughly Vetted for Security & Privacy",
      icon: ShieldCheckIcon,
      color: "bg-blue-50 text-blue-600"
    },
    {
      text: "Remote Staff Based in U.S. and International Talent Pools",
      icon: GlobeAltIcon,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      text: "Specialized Talent Across Multiple Industries",
      icon: BriefcaseIcon,
      color: "bg-teal-50 text-teal-600"
    },
    {
      text: "Comprehensive Background Checks for Every Professional",
      icon: ShieldCheckIcon,
      color: "bg-blue-50 text-blue-600"
    },
    {
      text: "Skill & Qualification Verification Guaranteed",
      icon: ClipboardDocumentCheckIcon,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      text: "Ongoing Performance Monitoring & Support",
      icon: LightBulbIcon,
      color: "bg-teal-50 text-teal-600"
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
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative py-10 sm:py-14 md:py-20 bg-gradient-to-b from-blue-800 to-blue-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-500 opacity-10"></div>
        <div className="absolute bottom-10 -left-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-600 opacity-10"></div>
        
        <motion.div
          className="absolute top-1/3 left-1/4 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-blue-200 opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-300 opacity-20"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-900 bg-opacity-50 rounded-full text-blue-100 mb-2 sm:mb-3 md:mb-4">
            Trusted Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight px-2">
            Scale Smarter with Remote Staff You Can Trust
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-blue-100 px-2">
            We ensure quality, expertise, and reliability through rigorous vetting and industry-specific focus.
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 bg-white shadow-xl rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="px-4 py-6 sm:px-6 sm:py-8 md:p-10">
            <motion.ul 
              className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {trustPoints.map((point, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className={`flex-shrink-0 p-1.5 sm:p-2 rounded-lg ${point.color}`}>
                    <point.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-3 sm:ml-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">{point.text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid md:grid-cols-5 gap-6 sm:gap-8 items-center">
          <motion.div 
            className="md:col-span-3 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              Scale Smarter with Remote Professional Staff You Can Trust.
            </h3>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-blue-100">
              Connect with vetted, specialized talent ready to start immediately.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 sm:gap-4 justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={pulseAnimation}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 bg-white text-blue-700 font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base md:text-lg"
              >
                Request Staff Now
                <svg className="ml-1.5 sm:ml-2 -mr-1 w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 