import Head from 'next/head';
import ServiceCard from '../components/services/ServiceCard';
import { UserGroupIcon, ClipboardDocumentCheckIcon, AcademicCapIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Remote Administrative Support',
      description: 'Qualified professionals who handle administrative tasks, medical records management, and scheduling for healthcare organizations.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      id: 2,
      title: 'Medical Billing & Coding',
      description: 'Certified remote billing and coding specialists who ensure accurate claims processing and revenue cycle management.',
      icon: AcademicCapIcon,
    },
    {
      id: 3,
      title: 'Telehealth Support',
      description: 'Staff that facilitate telehealth appointments, patient outreach, and virtual care coordination.',
      icon: PhoneIcon,
    },
    {
      id: 4,
      title: 'Healthcare IT Roles',
      description: 'Skilled IT professionals specifically trained in healthcare systems, EHR management, and HIPAA-compliant technology solutions.',
      icon: UserGroupIcon,
    },
    {
      id: 5,
      title: 'Remote Case Management',
      description: 'Experienced case managers who coordinate patient care, follow-up, and care plan implementation from remote locations.',
      icon: ClockIcon,
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Clearview Staffing Group</title>
        <meta name="description" content="Explore Clearview Staffing Group's specialized remote healthcare staffing services." />
      </Head>
      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 text-center">
            Specialized remote healthcare staffing solutions tailored to your organization's needs.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900">Need a custom staffing solution?</h2>
              <p className="mt-4 text-lg text-gray-600">
                We understand that every healthcare organization has unique staffing needs. 
                Contact us to discuss your specific requirements and how we can help.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Staffing Process
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              How we ensure you get the right healthcare professionals for your remote positions.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white text-xl font-bold mx-auto">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Needs Assessment</h3>
                <p className="mt-2 text-base text-gray-500">
                  We work with you to understand your specific staffing requirements, organizational culture, and technical needs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white text-xl font-bold mx-auto">
                  2
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Candidate Selection</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our recruiters find, screen, and vet qualified healthcare professionals who match your specific needs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white text-xl font-bold mx-auto">
                  3
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Seamless Placement</h3>
                <p className="mt-2 text-base text-gray-500">
                  We handle the onboarding logistics and provide ongoing support to ensure a successful placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 