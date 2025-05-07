import { motion } from 'framer-motion';

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Eli Feldman",
      title: "Chief Executive Officer",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      bgColor: "from-blue-600 to-blue-800",
      borderColor: "border-blue-300"
    },
    {
      name: "Gitty Feldman",
      title: "Director of Billing/Accounts Receivable",
      icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      bgColor: "from-purple-500 to-purple-700",
      borderColor: "border-purple-300"
    },
    {
      name: "David Sopher",
      title: "Vice President of Operations",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      bgColor: "from-green-500 to-green-700",
      borderColor: "border-green-300"
    },
    {
      name: "Muhammad Abubakar",
      title: "Director of Operations, Pakistan Branch",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      bgColor: "from-indigo-500 to-indigo-700",
      borderColor: "border-indigo-300"
    },
    {
      name: "Modestus Gold",
      title: "Director of Operations, Ghana Branch",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      bgColor: "from-yellow-500 to-yellow-700", 
      borderColor: "border-yellow-300"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Leadership Team
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet the experts behind our global staffing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-transform duration-300 border border-gray-100"
            >
              <div className={`relative h-32 overflow-hidden bg-gradient-to-r ${leader.bgColor}`}>
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 16H16V18H14V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M8 16H10V18H8V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M2 16H4V18H2V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M14 28H16V30H14V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M8 28H10V30H8V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M2 28H4V30H2V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M14 40H16V42H14V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M8 40H10V42H8V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M2 40H4V42H2V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M14 52H16V54H14V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M8 52H10V54H8V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M2 52H4V54H2V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M14 64H16V66H14V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M8 64H10V66H8V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M2 64H4V66H2V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M14 76H16V78H14V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M8 76H10V78H8V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M2 76H4V78H2V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M26 16H28V18H26V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M20 16H22V18H20V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M26 28H28V30H26V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M20 28H22V30H20V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M26 40H28V42H26V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M20 40H22V42H20V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M26 52H28V54H26V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M20 52H22V54H20V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M26 64H28V66H26V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M20 64H22V66H20V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M26 76H28V78H26V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M20 76H22V78H20V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M38 16H40V18H38V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M32 16H34V18H32V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M38 28H40V30H38V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M32 28H34V30H32V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M38 40H40V42H38V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M32 40H34V42H32V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M38 52H40V54H38V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M32 52H34V54H32V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M38 64H40V66H38V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M32 64H34V66H32V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M38 76H40V78H38V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M32 76H34V78H32V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M50 16H52V18H50V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M44 16H46V18H44V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M50 28H52V30H50V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M44 28H46V30H44V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M50 40H52V42H50V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M44 40H46V42H44V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M50 52H52V54H50V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M44 52H46V54H44V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M50 64H52V66H50V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M44 64H46V66H44V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M50 76H52V78H50V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M44 76H46V78H44V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M62 16H64V18H62V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M56 16H58V18H56V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M62 28H64V30H62V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M56 28H58V30H56V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M62 40H64V42H62V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M56 40H58V42H56V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M62 52H64V54H62V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M56 52H58V54H56V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M62 64H64V66H62V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M56 64H58V66H56V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M62 76H64V78H62V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M56 76H58V78H56V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M74 16H76V18H74V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M68 16H70V18H68V16Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M74 28H76V30H74V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M68 28H70V30H68V28Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M74 40H76V42H74V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M68 40H70V42H68V40Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M74 52H76V54H74V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M68 52H70V54H68V52Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M74 64H76V66H74V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M68 64H70V66H68V64Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M74 76H76V78H74V76Z" fill="currentColor" fillOpacity="0.4" />
                    <path d="M68 76H70V78H68V76Z" fill="currentColor" fillOpacity="0.4" />
                  </svg>
                </div>
                <div className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute -bottom-px left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute left-0 right-0 bottom-4 flex justify-center">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-2 ${leader.borderColor}`}>
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={leader.icon}></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{leader.title}</p>
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <div className="flex space-x-4 justify-center">
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 translate-x-1/2 translate-y-1/2 transform rounded-full"></div>
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