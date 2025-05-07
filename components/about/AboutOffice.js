import Image from 'next/image';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AboutOffice() {
  const features = [
    {
      title: "State-of-the-art Facilities",
      description: "Our offices are equipped with the latest technology to ensure seamless communication with clients and remote staff worldwide.",
      icon: ComputerDesktopIcon,
      color: "bg-blue-100",
      textColor: "text-blue-700",
      delay: 0.2
    },
    {
      title: "Collaborative Environment",
      description: "Our open-plan offices encourage teamwork and knowledge sharing among our industry-specialized staffing teams.",
      icon: UserGroupIcon,
      color: "bg-indigo-100",
      textColor: "text-indigo-700",
      delay: 0.3
    },
    {
      title: "Global Connectivity",
      description: "Our dedicated teams work across time zones to provide 24/7 support to our clients and professionals in various industries.",
      icon: GlobeAltIcon,
      color: "bg-purple-100",
      textColor: "text-purple-700",
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Our Work Environment
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Clearview Staffing Group, we&apos;re proud of our modern, collaborative workspaces designed to foster innovation and exceptional service delivery across all industries.
            </p>
            
            <div className="space-y-6">
              {features.map((feature) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className={`${feature.color} rounded-full p-3 flex-shrink-0 mr-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold ${feature.textColor} mb-2`}>{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-50 py-4 px-2 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">4</p>
                <p className="text-sm text-gray-600">Global Offices</p>
              </div>
              <div className="bg-gray-50 py-4 px-2 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-gray-600">Support</p>
              </div>
              <div className="bg-gray-50 py-4 px-2 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">120+</p>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              <div className="bg-gray-50 py-4 px-2 rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-blue-600">15+</p>
                <p className="text-sm text-gray-600">Languages</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-full h-full rounded-xl rotate-3 opacity-20"></div>
              <div className="rounded-xl overflow-hidden shadow-2xl relative">
                <Image 
                  src="/images/austin-distel-wawEfYdpkag-unsplash.jpg" 
                  alt="Our office environment" 
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent py-8 px-6">
                  <p className="text-white text-xl font-semibold">Our London Office</p>
                  <p className="text-blue-100">Where our European staffing operations are coordinated</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg overflow-hidden shadow-md relative h-48">
                <Image 
                  src="/images/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg" 
                  alt="Collaborative workspace" 
                  fill
                  className="hover:scale-105 transition-transform duration-500 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-medium">Singapore Hub</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md relative h-48">
                <Image 
                  src="/images/campaign-creators-gMsnXqILjp4-unsplash.jpg" 
                  alt="Meeting room" 
                  fill
                  className="hover:scale-105 transition-transform duration-500 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-medium">New York Office</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 