// MissionVision component displaying company mission and vision
import { motion } from 'framer-motion';
import { LightBulbIcon, EyeIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Mission & Vision 
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            Bridging the gap between exceptional talent and innovative organizations worldwide
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                <LightBulbIcon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower organizations by connecting them with exceptional remote talent, enabling business growth and workforce flexibility across industries.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl shadow-md overflow-hidden md:translate-y-4"
          >
            <div className="p-6 sm:p-8">
              <div className="bg-blue-200 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                <EyeIcon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the global leader in remote staffing, recognized for our ability to match the right talent with the right organizations, driving innovation and efficiency.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                <SparklesIcon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Our Promise</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver staffing solutions that exceed expectations, with transparency, integrity, and an unwavering commitment to client and candidate success.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Our One Clear Goal</h3>
            <p className="text-blue-50 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
              Clearview Staffing Group was created with one clear goal: To help organizations run more efficiently by delivering specialized remote staffing solutions — saving them time, money, and resources.
            </p>
            <div className="mt-8 w-16 h-1 bg-white opacity-50 mx-auto"></div>
            <p className="mt-8 text-blue-100 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              With business demands evolving and in-house hiring costs soaring, remote staffing is the future. We&apos;re here to make it seamless, efficient, and reliable.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-white hover:bg-blue-50 transition-colors duration-300 max-w-xs mx-auto">
                Explore Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 