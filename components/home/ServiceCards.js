import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, BarChart3 } from 'lucide-react';

export default function ServiceCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-100 opacity-20"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-blue-100 opacity-20"></div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-blue-400 opacity-15"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-blue-400 opacity-15"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 rounded-full text-blue-600 mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What We Offer
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide specialized healthcare staffing solutions to meet your organization's unique needs
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
        >
          {/* Calendar Management Card */}
          <motion.div 
            className="relative group" 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            animate={inView ? floatingAnimation : {}}
            custom={0}
          >
            <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md h-full flex flex-col">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600 mb-5">
                <Calendar size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Calendar Management</h3>
              <p className="text-gray-600 text-sm flex-grow mb-5">
                Manage your day-to-day responsibilities by scheduling and coordinating appointments, setting reminders, and handling travel arrangements.
              </p>
              <Link
                href="/services/calendar-management"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium transition-all duration-300 hover:bg-blue-100 mt-auto text-sm"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* General Admin Card */}
          <motion.div 
            className="relative group" 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            animate={inView ? {
              ...floatingAnimation,
              transition: {
                ...floatingAnimation.transition,
                delay: 0.2
              }
            } : {}}
            custom={1}
          >
            <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md h-full flex flex-col">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600 mb-5">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Administration</h3>
              <p className="text-gray-600 text-sm flex-grow mb-5">
                Command all aspects of your administrative work by having our virtual assistants perform scheduling, record management, and documentation.
              </p>
              <Link
                href="/services/general-admin"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium transition-all duration-300 hover:bg-blue-100 mt-auto text-sm"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Data Management Card */}
          <motion.div 
            className="relative group" 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            animate={inView ? {
              ...floatingAnimation,
              transition: {
                ...floatingAnimation.transition,
                delay: 0.4
              }
            } : {}}
            custom={2}
          >
            <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md h-full flex flex-col">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600 mb-5">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Management</h3>
              <p className="text-gray-600 text-sm flex-grow mb-5">
                Keep your healthcare data organized by consistently processing patient information, maintaining electronic health records, and generating reports.
              </p>
              <Link
                href="/services/data-management"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium transition-all duration-300 hover:bg-blue-100 mt-auto text-sm"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-all duration-300 hover:bg-blue-700 shadow-sm"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 