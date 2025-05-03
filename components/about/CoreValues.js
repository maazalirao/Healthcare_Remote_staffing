// CoreValues component listing core company values
import { BriefcaseIcon, ShieldCheckIcon, ClockIcon, StarIcon, UserGroupIcon, GlobeAltIcon, ChartBarIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CoreValues() {
  const values = [
    {
      name: 'Industry Expertise',
      description: 'We deeply understand specialized business needs across various sectors, allowing us to match skills with precision.',
      icon: BriefcaseIcon,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      delay: 0.1,
    },
    {
      name: 'Data Security',
      description: 'We prioritize data protection and privacy at all times, with strict protocols and compliance standards.',
      icon: ShieldCheckIcon,
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      delay: 0.2,
    },
    {
      name: 'Efficiency',
      description: 'We optimize our processes to deliver exceptional staffing solutions quickly and accurately when you need them most.',
      icon: ClockIcon,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      delay: 0.3,
    },
    {
      name: 'Quality First',
      description: 'We thoroughly screen candidates so you don&apos;t waste time, ensuring only the best talent reaches your consideration.',
      icon: StarIcon,
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
      delay: 0.4,
    },
    {
      name: 'Global Reach',
      description: 'Our worldwide network allows us to source exceptional talent from around the globe for your specific needs.',
      icon: GlobeAltIcon, 
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      delay: 0.5,
    },
    {
      name: 'Client Partnership',
      description: 'We build lasting relationships by truly understanding your business and becoming a trusted extension of your team.',
      icon: UserGroupIcon,
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      delay: 0.6,
    },
    {
      name: 'Measurable Results',
      description: 'We believe in accountability and tracking key performance metrics to continuously improve our service delivery.',
      icon: ChartBarIcon,
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      delay: 0.7,
    },
    {
      name: 'Ethical Practices',
      description: 'We operate with integrity and transparency in all our dealings with clients, candidates, and team members.',
      icon: HeartIcon,
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      delay: 0.8,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            These principles guide everything we do at Clearview Staffing Group, ensuring we deliver exceptional staffing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: value.delay }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className={`${value.color} rounded-full h-14 w-14 flex items-center justify-center mb-5 mx-auto`}>
                  <value.icon className={`h-7 w-7 ${value.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{value.name}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Living Our Values Every Day
            </h3>
            <p className="text-gray-700 mb-6">
              Our values aren&apos;t just words on a page — they&apos;re the foundation of how we operate. Every team member at Clearview Staffing Group embodies these principles in their daily work, ensuring we deliver consistent, exceptional service to both clients and candidates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-3 sm:space-y-0">
              <Link 
                href="/testimonials" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                See Client Testimonials
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 