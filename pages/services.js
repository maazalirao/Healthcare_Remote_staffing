import Head from 'next/head';
import ServiceCard from '../components/services/ServiceCard';
import { 
  ComputerDesktopIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ChartPieIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Professional Services',
      description: 'Access skilled professionals in business analysis, marketing, finance, project management, and specialized industry roles.',
      icon: ChartBarIcon,
    },
    {
      id: 2,
      title: 'Technical Talent',
      description: 'Build your technical team with experienced developers, engineers, IT specialists, and cybersecurity professionals.',
      icon: ComputerDesktopIcon,
    },
    {
      id: 3,
      title: 'Administrative Support',
      description: 'Streamline operations with virtual assistants, customer support, data entry specialists, and administrative coordinators.',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      id: 4,
      title: 'Business Consulting',
      description: 'Get expert guidance on process optimization, growth strategies, and operational efficiency from industry specialists.',
      icon: BriefcaseIcon,
    },
    {
      id: 5,
      title: 'Healthcare & Medical',
      description: 'Staff your organization with qualified healthcare professionals, medical administrators, and billing specialists.',
      icon: UsersIcon,
    },
    {
      id: 6,
      title: 'Education & Training',
      description: 'Find skilled educators, instructional designers, and training specialists for your educational initiatives.',
      icon: AcademicCapIcon,
    },
    {
      id: 7,
      title: 'Financial Services',
      description: 'Access financial analysts, accountants, bookkeepers, and advisors to strengthen your financial operations.',
      icon: CurrencyDollarIcon,
    },
    {
      id: 8,
      title: 'Marketing & Creative',
      description: 'Connect with marketing strategists, content creators, designers, and digital marketing specialists.',
      icon: PresentationChartLineIcon,
    },
    {
      id: 9,
      title: 'Real Estate & Property',
      description: 'Staff your property management operations with administrators, agents, and property managers.',
      icon: BuildingOfficeIcon,
    },
    {
      id: 10,
      title: 'Retail & E-commerce',
      description: 'Find specialists in inventory management, e-commerce operations, and customer experience.',
      icon: ShoppingBagIcon,
    },
    {
      id: 11,
      title: 'Digital & Mobile',
      description: 'Hire app developers, UX/UI designers, and mobile specialists for your digital products.',
      icon: DevicePhoneMobileIcon,
    },
    {
      id: 12,
      title: 'Global Business Services',
      description: 'Access multilingual support staff, international business consultants, and global operations specialists.',
      icon: GlobeAltIcon,
    },
    {
      id: 13,
      title: 'Customer Service & Support',
      description: 'Build dedicated customer service teams with call center agents, chat support, and customer success specialists.',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      id: 14,
      title: 'Engineering & Architecture',
      description: 'Connect with remote engineering professionals, CAD specialists, architects, and technical drafters.',
      icon: WrenchScrewdriverIcon,
    },
    {
      id: 15,
      title: 'HR & Recruitment',
      description: 'Strengthen your HR department with talent acquisition specialists, benefits coordinators, and HR administrators.',
      icon: UserGroupIcon,
    },
    {
      id: 16,
      title: 'Data & Analytics',
      description: 'Find data analysts, business intelligence specialists, and analytics experts to power your data-driven decisions.',
      icon: ChartPieIcon,
    },
    {
      id: 17,
      title: 'Virtual Events & Coordination',
      description: 'Staff your virtual events with coordinators, producers, technical support, and engagement specialists.',
      icon: CalendarIcon,
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Clearview Staffing Group</title>
        <meta name="description" content="Explore Clearview Staffing Group's comprehensive remote staffing services across multiple industries and specializations." />
      </Head>
      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 text-center">
            Comprehensive remote staffing solutions tailored to your organization's needs across every industry and specialization.
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
                We understand that every organization has unique staffing needs. 
                Don't see exactly what you're looking for? We source specialized roles for any industry.
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
              How we ensure you get the right professionals for your remote positions.
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
                  Our recruiters find, screen, and vet qualified professionals who match your specific needs and industry requirements.
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