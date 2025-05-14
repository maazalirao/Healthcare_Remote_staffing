import Head from 'next/head';
import Hero from '../components/home/Hero';
import Statistics from '../components/home/Statistics';
import ServiceCards from '../components/home/ServiceCards';
import ProblemSolution from '../components/home/ProblemSolution';
import ProcessSteps from '../components/home/ProcessSteps';
import TrustBuilders from '../components/home/TrustBuilders';
import HowItWorks from '../components/home/HowItWorks';
import WorkEnvironment from '../components/home/WorkEnvironment';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clearview Staffing Group | Remote Outsourcing Staffing Solutions</title>
        <meta name="description" content="Access top-tier professionals at 80% less cost than local hires. Connect with skilled staff across various industries worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=3" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Head>
      
      <Hero />
      <Statistics />
      <ServiceCards />
      <WorkEnvironment />
      <HowItWorks />
      <ProblemSolution />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Work Ethics
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The principles and values that guide how we operate and deliver excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
              <Image 
                src="/images/campaign-creators-gMsnXqILjp4-unsplash.jpg" 
                alt="Client Partnership"
                fill
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">Client Partnership</h3>
                <p className="text-blue-100">True partnership mentality</p>
                <div className="mt-3 flex items-center">
                  <UserGroupIcon className="h-5 w-5 text-blue-300 mr-2" />
                  <p className="text-blue-100 text-sm">Collaborative approach to staffing solutions</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
              <Image 
                src="/images/jason-goodman-Oalh2MojUuk-unsplash.jpg" 
                alt="Excellence & Quality"
                fill
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">Excellence & Quality</h3>
                <p className="text-blue-100">Commitment to the highest standards</p>
                <div className="mt-3 flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-blue-300 mr-2" />
                  <p className="text-blue-100 text-sm">Thorough vetting and quality assurance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/about" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
              Learn more about our work ethics
              <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <TrustBuilders />
    </>
  );
}
