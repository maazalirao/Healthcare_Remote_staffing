import Head from 'next/head';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import OfficeLocations from '../components/about/OfficeLocations';
import AboutOffice from '../components/about/AboutOffice';
import GhanaOffice from '../components/GhanaOffice';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LeadershipTeam from '../components/about/NewLeadership/LeadershipTeam';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Clearview Staffing Group</title>
        <meta name="description" content="Learn about Clearview Staffing Group's mission, vision, office locations, and core values in remote staffing solutions across various industries." />
      </Head>
      
      <div className="bg-gradient-to-br from-blue-700 to-blue-500 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/jason-goodman-Oalh2MojUuk-unsplash.jpg"
            alt="Clearview Staffing Group Team"
            layout="fill"
            objectFit="cover"
            priority
            className="scale-105 hover:scale-100 transition-transform duration-10000"
          />
        </div>
        <div className="absolute inset-0 bg-blue-800 opacity-30 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              About Clearview Staffing Group
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed">
              We&apos;re revolutionizing remote staffing with specialized solutions
              tailored to the unique needs of organizations worldwide.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#mission" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-blue-800 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                Our Mission
              </a>
              <a 
                href="#values" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-blue-800 bg-white hover:bg-blue-50 transition-colors duration-300"
              >
                Our Values
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      <div id="mission">
        <MissionVision />
      </div>
      
      <AboutOffice />
      
      <LeadershipTeam />
      
      <div id="values">
        <CoreValues />
      </div>
      
      <GhanaOffice />
      
      <OfficeLocations />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Journey & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              The story behind Clearview Staffing Group and what makes us industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                Founded by industry professionals who recognized the growing need 
                for specialized remote staffing solutions across multiple sectors, 
                Clearview Staffing Group was established to bridge the gap between 
                organizations and qualified remote professionals.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With years of experience in recruitment and staffing, our team 
                understands the unique challenges faced by organizations when it 
                comes to finding and retaining qualified staff, especially for remote positions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                Our Expertise
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                We specialize in remote staffing across various disciplines, 
                including technical roles, professional services, business operations,
                and specialized industry-specific positions.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our rigorous vetting process ensures that all professionals we place are 
                not only technically qualified but also well-prepared for the unique 
                challenges of remote work in their respective industries.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white p-3 rounded shadow-md border border-blue-200">
                  <span className="font-bold text-blue-600">85%</span> <span className="text-gray-700">retention rate</span>
                </div>
                <div className="bg-white p-3 rounded shadow-md border border-blue-200">
                  <span className="font-bold text-blue-600">24hr</span> <span className="text-gray-700">response time</span>
                </div>
                <div className="bg-white p-3 rounded shadow-md border border-blue-200">
                  <span className="font-bold text-blue-600">15+</span> <span className="text-gray-700">industries served</span>
                </div>
                <div className="bg-white p-3 rounded shadow-md border border-blue-200">
                  <span className="font-bold text-blue-600">1000+</span> <span className="text-gray-700">placements</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 