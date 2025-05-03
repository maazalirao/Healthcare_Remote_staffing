import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon, UserGroupIcon, LightBulbIcon, HeartIcon, ClockIcon, BuildingOffice2Icon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function OfficeLocations() {
  const workEthics = [
    {
      id: 1,
      title: "Excellence & Quality",
      description: "We hold ourselves to the highest standards in every interaction, placement, and service we provide. Our commitment to excellence drives us to continuously improve and deliver exceptional results.",
      keyPoint: "Commitment to the highest standards",
      principleOne: "Thorough vetting and quality assurance",
      principleTwo: "Continuous improvement in all processes",
      image: "/images/jason-goodman-Oalh2MojUuk-unsplash.jpg",
      established: "Core Value",
      icon: CheckCircleIcon
    },
    {
      id: 2,
      title: "Transparency & Integrity",
      description: "We believe that honest communication and ethical practices are the foundation of lasting relationships. We are straightforward about our processes and maintain confidentiality in all client interactions.",
      keyPoint: "Open and honest communication",
      principleOne: "Full disclosure on processes and expectations",
      principleTwo: "Ethical handling of sensitive information",
      image: "/images/austin-distel-wawEfYdpkag-unsplash.jpg",
      established: "Core Value",
      icon: HeartIcon
    },
    {
      id: 3,
      title: "Innovation & Adaptability",
      description: "In a rapidly changing work environment, we stay ahead of trends and embrace new technologies and methods to ensure our staffing solutions remain cutting-edge and effective for our clients' evolving needs.",
      keyPoint: "Forward-thinking approach",
      principleOne: "Embracing new staffing technologies",
      principleTwo: "Adapting to changing market conditions",
      image: "/images/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg",
      established: "Core Value",
      icon: LightBulbIcon
    },
    {
      id: 4,
      title: "Client Partnership",
      description: "We see ourselves as an extension of your team, not just a service provider. Our collaborative approach ensures we understand your unique needs and become a trusted partner in your organization's success.",
      keyPoint: "True partnership mentality",
      principleOne: "Collaborative approach to staffing solutions",
      principleTwo: "Long-term relationship building",
      image: "/images/campaign-creators-gMsnXqILjp4-unsplash.jpg",
      established: "Core Value",
      icon: UserGroupIcon
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Work Ethics
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            The principles and values that guide how we operate and deliver excellence to our clients
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full">
            <ClockIcon className="h-4 w-4 mr-2" />
            These values shape every aspect of our staffing solutions
          </div>
        </motion.div>
        
        <div className="relative mb-16 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md p-6 sm:p-8 border border-gray-100">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-100 rounded-full opacity-30 blur-2xl"></div>
          
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
              {['Respect', 'Trust', 'Diligence', 'Client-Focus'].map((value, index) => (
                <motion.div 
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <BuildingOffice2Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-500">Guiding Principle</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 text-white mb-4">
                <GlobeAltIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Ethics in Everything We Do</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to ethical practices and professional standards underpins every staffing solution we deliver, ensuring that both clients and candidates benefit from a transparent and trustworthy partnership.
              </p>
              
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">100%</p>
                  <p className="text-sm text-gray-600">Ethical Compliance</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">7+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">98%</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-sm text-gray-600">Ethical Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {workEthics.map((ethic, index) => (
            <motion.div 
              key={ethic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={ethic.image} 
                  alt={`${ethic.title}`} 
                  layout="fill" 
                  objectFit="cover"
                  className="w-full h-full hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide">
                  {ethic.established}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{ethic.title}</h3>
                  <p className="text-blue-100 text-sm">{ethic.keyPoint}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-5 leading-relaxed">{ethic.description}</p>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <ethic.icon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{ethic.principleOne}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ethic.icon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <p className="font-medium">{ethic.principleTwo}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm"
                  >
                    Learn How We Apply This
                  </Link>
                </div>
                <p className="mt-3 text-xs text-center text-gray-400">
                  These ethics guide our approach to every client relationship
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 border border-blue-500 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-white">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Experience our ethics in action</h3>
              <p className="text-blue-100 mt-2">Schedule a consultation to see how our values translate to outstanding staffing solutions</p>
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300 shadow-md"
            >
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 