import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import services from '../../data/services';
import { iconMapping } from '../../data/services';

export default function ServiceCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Get the top 3 services based on order in data file (or you could filter by other criteria)
  const topServices = services.slice(0, 3);

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
    <section className="relative py-10 sm:py-14 md:py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-100 opacity-20"></div>
        <div className="absolute bottom-10 -left-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-100 opacity-20"></div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-400 opacity-15"
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
          className="absolute bottom-1/4 left-1/3 w-3 sm:w-5 h-3 sm:h-5 rounded-full bg-blue-400 opacity-15"
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
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 rounded-full text-blue-600 mb-2 sm:mb-3">
              Featured Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight px-2">
              Our Top Staffing Solutions
            </h2>
            <p className="mt-2 sm:mt-3 max-w-3xl mx-auto text-base sm:text-lg text-gray-500 sm:mt-4 px-2">
              Discover our most sought-after staffing solutions that help organizations optimize operations,
              reduce costs, and accelerate growth with top talent from around the world.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden" 
          animate={inView ? "visible" : "hidden"}
        >
          {topServices.map((service, index) => {
            const Icon = iconMapping[service.iconName];
            const delay = index * 0.2;
            
            return (
              <motion.div 
                key={service.id}
                className="relative group" 
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                animate={inView ? {
                  ...floatingAnimation,
                  transition: {
                    ...floatingAnimation.transition,
                    delay: delay
                  }
                } : {}}
                custom={index}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <div className="relative bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200 h-full flex flex-col cursor-pointer group">
                    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-blue-100 text-blue-600 mb-3 sm:mb-4 md:mb-5 group-hover:bg-blue-200 transition-colors duration-300">
                      {Icon && <Icon className="h-6 w-6 sm:h-7 sm:w-7" />}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow mb-3 sm:mb-4 md:mb-5">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {service.specializations && service.specializations.slice(0, 3).map((spec, i) => (
                          <span key={i} className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {spec}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-blue-50 text-blue-700 font-medium transition-all duration-300 group-hover:bg-blue-100 mt-auto text-xs sm:text-sm w-full group-hover:translate-x-1">
                        Learn More
                        <svg className="ml-1 sm:ml-1.5 h-3 sm:h-4 w-3 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-8 sm:mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            {/* Pulsing background effect */}
            <motion.div 
              className="absolute inset-0 rounded-lg bg-blue-500 opacity-20"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            <Link
              href="/services"
              className="relative inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-blue-600 text-white font-medium text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-blue-700 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Explore All Services</span>
              <svg className="ml-1.5 sm:ml-2 h-4 sm:h-5 w-4 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          {/* Hint text below button */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">Discover our complete range of specialized staffing solutions</p>
        </motion.div>
      </div>
    </section>
  );
} 