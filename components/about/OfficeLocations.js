import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CalendarIcon, ClockIcon, BuildingOffice2Icon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function OfficeLocations() {
  const offices = [
    {
      id: 1,
      location: "New York, USA",
      address: "1325 Avenue of the Americas, 28th Floor, New York, NY 10019",
      phone: "+1 (212) 897-5962",
      email: "ny@clearviewstaffing.com",
      website: "/locations/usa",
      image: "/images/jason-goodman-Oalh2MojUuk-unsplash.jpg",
      description: "Our North American headquarters manages U.S. operations and serves clients throughout North and South America.",
      businessHours: "Monday-Friday: 8:30 AM - 6:00 PM ET",
      established: "Established 2012",
      districtInfo: "Located in Midtown Manhattan's business district"
    },
    {
      id: 2,
      location: "London, UK",
      address: "30 St Mary Axe (The Gherkin), 24th Floor, London EC3A 8BF",
      phone: "+44 20 7123 4567",
      email: "london@clearviewstaffing.com",
      website: "/locations/uk",
      image: "/images/austin-distel-wawEfYdpkag-unsplash.jpg",
      description: "Our European headquarters specializing in staffing across the United Kingdom and European Union countries.",
      businessHours: "Monday-Friday: 9:00 AM - 5:30 PM GMT",
      established: "Established 2014",
      districtInfo: "Located in London's financial district"
    },
    {
      id: 3,
      location: "Singapore",
      address: "One Raffles Place, Tower 2, Level 19, Singapore 048616",
      phone: "+65 6808 7300",
      email: "singapore@clearviewstaffing.com",
      website: "/locations/asia",
      image: "/images/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg",
      description: "Our Asia-Pacific hub provides specialized staffing solutions throughout Southeast Asia and Oceania.",
      businessHours: "Monday-Friday: 9:00 AM - 6:00 PM SGT",
      established: "Established 2017",
      districtInfo: "Located in Singapore's central business district"
    },
    {
      id: 4,
      location: "Dubai, UAE",
      address: "Emirates Towers, Level 41, Sheikh Zayed Road, Dubai, UAE",
      phone: "+971 4 330 0000",
      email: "dubai@clearviewstaffing.com",
      website: "/locations/middle-east",
      image: "/images/campaign-creators-gMsnXqILjp4-unsplash.jpg",
      description: "Our Middle East office specializing in staffing solutions for the GCC region and broader MENA markets.",
      businessHours: "Sunday-Thursday: 8:00 AM - 5:00 PM GST",
      established: "Established 2019",
      districtInfo: "Located in Dubai's prestigious business district"
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
            Our Global Offices
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            With locations across 4 continents, we provide staffing solutions worldwide
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full">
            <ClockIcon className="h-4 w-4 mr-2" />
            Office visits by appointment only | Virtual meetings available
          </div>
        </motion.div>
        
        <div className="relative mb-16 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md p-6 sm:p-8 border border-gray-100">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-100 rounded-full opacity-30 blur-2xl"></div>
          
          <div className="relative">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
              {['Americas', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
                <motion.div 
                  key={region}
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
                    <p className="font-bold text-gray-900">{region}</p>
                    <p className="text-sm text-gray-500">Regional Office</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 text-white mb-4">
                <GlobeAltIcon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Presence, Local Expertise</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our strategically located offices allow us to serve clients in over 30 countries with specialized staffing solutions tailored to local markets while maintaining global standards.
              </p>
              
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">30+</p>
                  <p className="text-sm text-gray-600">Countries Served</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">4</p>
                  <p className="text-sm text-gray-600">Regional Hubs</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">12+</p>
                  <p className="text-sm text-gray-600">Industries</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <p className="text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-sm text-gray-600">Global Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office, index) => (
            <motion.div 
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={office.image} 
                  alt={`${office.location} Office`} 
                  layout="fill" 
                  objectFit="cover"
                  className="w-full h-full hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide">
                  {office.established}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{office.location}</h3>
                  <p className="text-blue-100 text-sm">{office.districtInfo}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-5 leading-relaxed">{office.description}</p>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{office.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <p>{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <p>{office.email}</p>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <p>{office.businessHours}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href={office.website}
                    className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-sm"
                  >
                    Contact This Office
                  </Link>
                </div>
                <p className="mt-3 text-xs text-center text-gray-400">
                  Due to security protocols, all office visits require prior appointment
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
              <h3 className="text-2xl font-bold text-white">Need to meet with our team?</h3>
              <p className="text-blue-100 mt-2">Schedule a video call or in-person appointment at one of our global offices</p>
            </div>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300 shadow-md"
            >
              Schedule a Meeting
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 