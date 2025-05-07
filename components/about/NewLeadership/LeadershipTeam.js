import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Eli Feldman",
      title: "Chief Executive Officer",
      bgColor: "from-blue-600 to-blue-800",
      borderColor: "border-blue-300",
      imageSrc: "/images/profile-placeholder.jpg"
    },
    {
      name: "Gitty Feldman",
      title: "Director of Billing/Accounts Receivable",
      bgColor: "from-purple-500 to-purple-700",
      borderColor: "border-purple-300",
      imageSrc: "/images/profile-placeholder.jpg"
    },
    {
      name: "David Sopher",
      title: "Vice President of Operations",
      bgColor: "from-green-500 to-green-700",
      borderColor: "border-green-300",
      imageSrc: "/images/profile-placeholder.jpg"
    },
    {
      name: "Muhammad Abubakar",
      title: "Director of Operations, Pakistan Branch",
      bgColor: "from-indigo-500 to-indigo-700",
      borderColor: "border-indigo-300",
      imageSrc: "/images/profile-placeholder.jpg"
    },
    {
      name: "Modestus Gold",
      title: "Director of Operations, Ghana Branch",
      bgColor: "from-yellow-500 to-yellow-700", 
      borderColor: "border-yellow-300",
      imageSrc: "/images/profile-placeholder.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Leadership Team
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet the experts behind our global staffing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-100 to-gray-50 z-0"></div>
              
              {/* Card top section with gradient background */}
              <div className={`relative h-28 overflow-hidden bg-gradient-to-r ${leader.bgColor} z-10`}>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 16H16V18H14V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M8 16H10V18H8V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M2 16H4V18H2V16Z" fill="currentColor" fillOpacity="0.4" />
                    {/* Keeping only a few svg paths for brevity */}
                    <path d="M74 16H76V18H74V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M68 16H70V18H68V16Z" fill="currentColor" fillOpacity="0.4" />
                  </svg>
                </div>
                
                {/* Gradient overlays for depth */}
                <div className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                <div className="absolute -bottom-px left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Card content */}
              <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{leader.name}</h3>
                <p className={`text-sm font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r ${leader.bgColor}`}>{leader.title}</p>
                
                {/* Divider with animated effect */}
                <div className="w-16 h-0.5 mx-auto mb-4 bg-gray-200 group-hover:w-24 group-hover:bg-blue-500 transition-all duration-300"></div>
                
                {/* Social media links with improved hover effects */}
                <div className="flex space-x-4 justify-center">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 transition-transform">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 transition-transform">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 transition-transform">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
                    </svg>
                  </a>
                </div>
                
                {/* Animated decorative element */}
                <div className="absolute top-1/2 left-0 w-4 h-20 bg-gradient-to-t from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity transform -translate-x-2 group-hover:translate-x-0"></div>
                <div className="absolute top-1/2 right-0 w-4 h-20 bg-gradient-to-t from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity transform translate-x-2 group-hover:translate-x-0"></div>
              </div>
              
              {/* Mobile hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience in the staffing industry, ensuring the highest quality service for our clients worldwide.
          </p>
        </div>
      </div>
    </section>
  );
} 