import Head from 'next/head';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import OfficeLocations from '../components/about/OfficeLocations';
import AboutOffice from '../components/about/AboutOffice';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Clearview Staffing Group</title>
        <meta name="description" content="Learn about Clearview Staffing Group's mission, vision, office locations, and core values in remote staffing solutions across various industries." />
      </Head>
      
      <div className="bg-blue-600 py-10 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/images/jason-goodman-Oalh2MojUuk-unsplash.jpg"
            alt="Clearview Staffing Group Team"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-center">
            About Clearview Staffing Group
          </h1>
          <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100 text-center px-2">
            We're revolutionizing remote staffing with specialized solutions
            tailored to the unique needs of organizations worldwide.
          </p>
        </div>
      </div>
      
      <MissionVision />
      <AboutOffice />
      <CoreValues />
      <OfficeLocations />
      
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
                Our Story
              </h2>
              <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg text-gray-500">
                Founded by industry professionals who recognized the growing need 
                for specialized remote staffing solutions across multiple sectors, 
                Clearview Staffing Group was established to bridge the gap between 
                organizations and qualified remote professionals.
              </p>
              <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg text-gray-500">
                With years of experience in recruitment and staffing, our team 
                understands the unique challenges faced by organizations when it 
                comes to finding and retaining qualified staff, especially for remote positions.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-0">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
                Our Expertise
              </h2>
              <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg text-gray-500">
                We specialize in remote staffing across various disciplines, 
                including technical roles, professional services, business operations,
                and specialized industry-specific positions.
              </p>
              <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg text-gray-500">
                Our rigorous vetting process ensures that all professionals we place are 
                not only technically qualified but also well-prepared for the unique 
                challenges of remote work in their respective industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 