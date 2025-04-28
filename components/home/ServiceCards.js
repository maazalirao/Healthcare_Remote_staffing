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
    hidden: { y: 50, opacity: 0 },
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
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-blue-100 opacity-30"></div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-blue-400 opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-blue-400 opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 rounded-full text-blue-600 mb-4">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What Can We Do For You?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out as your preferred partner for healthcare staffing solutions.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          ref={ref}
          variants={containerVariants}
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
        >
          {/* Calendar Management Card */}
          <motion.div 
            className="relative group" 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            animate={inView ? floatingAnimation : {}}
            custom={0}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-100 text-blue-600 mb-6">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Calendar Management</h3>
              <p className="text-gray-600 flex-grow mb-6">
                Manage your day-to-day responsibilities by scheduling and coordinating appointments, setting reminders, and handling travel arrangements.
              </p>
              <Link
                href="/services/calendar-management"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-blue-100 text-blue-700 font-medium transition-all duration-300 hover:bg-blue-200 mt-auto"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* General Admin Card */}
          <motion.div 
            className="relative group" 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            animate={inView ? {
              ...floatingAnimation,
              transition: {
                ...floatingAnimation.transition,
                delay: 0.2
              }
            } : {}}
            custom={1}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-100 text-blue-600 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">General Administration</h3>
              <p className="text-gray-600 flex-grow mb-6">
                Command all aspects of your administrative work by having our virtual assistants perform scheduling, record management, and documentation.
              </p>
              <Link
                href="/services/general-admin"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-blue-100 text-blue-700 font-medium transition-all duration-300 hover:bg-blue-200 mt-auto"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Data Management Card */}
          <motion.div 
            className="relative group" 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            animate={inView ? {
              ...floatingAnimation,
              transition: {
                ...floatingAnimation.transition,
                delay: 0.4
              }
            } : {}}
            custom={2}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-blue-100 text-blue-600 mb-6">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Management</h3>
              <p className="text-gray-600 flex-grow mb-6">
                Keep your healthcare data organized by consistently processing patient information, maintaining electronic health records, and generating reports.
              </p>
              <Link
                href="/services/data-management"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-blue-100 text-blue-700 font-medium transition-all duration-300 hover:bg-blue-200 mt-auto"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 