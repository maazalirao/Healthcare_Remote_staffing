import Head from 'next/head';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Clearview Staffing Group</title>
        <meta name="description" content="Learn about Clearview Staffing Group's mission, vision, and core values in healthcare remote staffing solutions." />
      </Head>
      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
            About Clearview Staffing Group
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 text-center">
            We're revolutionizing healthcare staffing with specialized remote solutions
            tailored to the unique needs of healthcare organizations.
          </p>
        </div>
      </div>
      
      <MissionVision />
      <CoreValues />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded by healthcare professionals who recognized the growing need 
                for specialized remote staffing solutions in the healthcare industry, 
                Clearview Staffing Group was established to bridge the gap between 
                healthcare organizations and qualified remote professionals.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                With years of experience in healthcare recruitment and staffing, our team 
                understands the unique challenges faced by healthcare organizations when it 
                comes to finding and retaining qualified staff, especially for remote positions.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We specialize in remote healthcare staffing across various disciplines, 
                including administrative support, medical billing and coding, telehealth 
                positions, healthcare IT roles, and case management.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our rigorous vetting process ensures that all professionals we place are 
                not only technically qualified but also well-prepared for the unique 
                challenges of remote work in the healthcare industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 