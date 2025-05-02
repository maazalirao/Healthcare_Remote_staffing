import Head from 'next/head';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Clearview Staffing Group</title>
        <meta name="description" content="Learn about Clearview Staffing Group's mission, vision, and core values in remote outsourcing staffing solutions across various industries." />
      </Head>
      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
            About Clearview Staffing Group
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 text-center">
            We're revolutionizing outsourcing staffing with specialized remote solutions
            tailored to the unique needs of organizations across all industries.
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
                Founded by industry professionals who recognized the growing need 
                for specialized remote staffing solutions across multiple sectors, 
                Clearview Staffing Group was established to bridge the gap between 
                organizations and qualified remote professionals.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                With years of experience in recruitment and staffing, our team 
                understands the unique challenges faced by organizations when it 
                comes to finding and retaining qualified staff, especially for remote positions.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We specialize in remote staffing across various disciplines, 
                including professional services, technical talent, administrative support,
                business consulting, and specialized industry-specific roles.
              </p>
              <p className="mt-4 text-lg text-gray-500">
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