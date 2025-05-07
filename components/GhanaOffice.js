import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GhanaOffice() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: '/images/ghanna_office.jpg', alt: 'Ghana Office Main View' },
    { src: '/images/ghanna_office_2.jpg', alt: 'Ghana Office Workspace' },
    { src: '/images/ghanna_office_3.jpg', alt: 'Ghana Office Conference Room' },
    { src: '/images/ghanna_office_4.jpg', alt: 'Ghana Office Team Area' },
  ];

  // Image gallery animation variants
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Ghana Office
          </motion.h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 mb-6 rounded-full"
            initial={{ width: "0px", opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="max-w-3xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore our state-of-the-art facility in Ghana where we deliver exceptional remote staffing solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main image showcase */}
          <motion.div 
            className="relative overflow-hidden rounded-xl shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-10 bg-gray-100 relative">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                width={800}
                height={450}
                className="object-cover rounded-xl transition-opacity duration-500 w-full h-full"
                quality={90}
                priority
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentImage === index 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Info section */}
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expanding Our Global Presence</h3>
            <p className="text-gray-600 mb-6">
              Our Ghana office represents our commitment to leveraging global talent while creating opportunities in emerging markets. Equipped with cutting-edge technology and staffed by highly skilled professionals, this location serves as a strategic hub for our remote workforce solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Strategic Location</h4>
                  <p className="text-gray-600">Situated in a prime business district with excellent connectivity and infrastructure.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Modern Facilities</h4>
                  <p className="text-gray-600">State-of-the-art workspaces designed for productivity, collaboration, and employee well-being.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Talent Development</h4>
                  <p className="text-gray-600">Continuous professional development programs to enhance skills and capabilities of our team.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="/about" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Learn More About Our Global Operations
                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail gallery */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                currentImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
              variants={itemVariants}
              onClick={() => setCurrentImage(index)}
            >
              <div className="aspect-w-16 aspect-h-10 bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={170}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                />
                <div className={`absolute inset-0 bg-blue-600 transition-opacity duration-300 ${
                  currentImage === index ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 