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
  CalendarIcon,
  ShieldCheckIcon,
  ClockIcon,
  TrophyIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Professional Services',
      description: 'Access skilled professionals in business analysis, marketing, finance, project management, and specialized industry roles.',
      icon: ChartBarIcon,
      specializations: ['Business Analysts', 'Marketing Specialists', 'Financial Advisors', 'Project Managers', 'Industry Consultants'],
      caseStudy: 'Helped a Fortune 500 company reduce operational costs by 23% through strategic staffing solutions.'
    },
    {
      id: 2,
      title: 'Technical Talent',
      description: 'Build your technical team with experienced developers, engineers, IT specialists, and cybersecurity professionals.',
      icon: ComputerDesktopIcon,
      specializations: ['Software Developers', 'DevOps Engineers', 'IT System Administrators', 'Cybersecurity Experts', 'QA Specialists'],
      caseStudy: 'Assembled a remote development team for a healthcare startup, launching their product 2 months ahead of schedule.'
    },
    {
      id: 3,
      title: 'Administrative Support',
      description: 'Streamline operations with virtual assistants, customer support, data entry specialists, and administrative coordinators.',
      icon: ClipboardDocumentCheckIcon,
      specializations: ['Virtual Executive Assistants', 'Customer Support Representatives', 'Data Entry Specialists', 'Administrative Coordinators', 'Office Managers'],
      caseStudy: 'Provided virtual administrative support that increased executive productivity by 35% for a growing financial services firm.'
    },
    {
      id: 4,
      title: 'Business Consulting',
      description: 'Get expert guidance on process optimization, growth strategies, and operational efficiency from industry specialists.',
      icon: BriefcaseIcon,
      specializations: ['Process Optimization Consultants', 'Growth Strategists', 'Operational Efficiency Experts', 'Change Management Specialists', 'Business Analysts'],
      caseStudy: 'Delivered strategic consulting that helped a retail client increase revenue by 28% within 6 months.'
    },
    {
      id: 5,
      title: 'Healthcare & Medical',
      description: 'Staff your organization with qualified healthcare professionals, medical administrators, and billing specialists.',
      icon: UsersIcon,
      specializations: ['Medical Billing Specialists', 'Healthcare Administrators', 'Medical Records Technicians', 'Patient Care Coordinators', 'Telehealth Support'],
      caseStudy: 'Staffed a telemedicine platform with specialized support personnel, improving patient satisfaction scores by 42%.'
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

  const testimonials = [
    {
      id: 1,
      quote: "Clearview provided us with exceptional talent that perfectly matched our needs. Their thorough vetting process saved us countless hours and their ongoing support ensured a successful integration.",
      author: "Sarah Johnson",
      title: "Chief Operations Officer",
      company: "MedTech Solutions",
      image: "/images/testimonials/testimonial-1.jpg" // You'll need to add these images to your public folder
    },
    {
      id: 2,
      quote: "Working with Clearview transformed our remote hiring process. Their attention to detail in matching candidates with our company culture has been invaluable for our global expansion.",
      author: "Michael Chen",
      title: "Director of Human Resources",
      company: "Global Finance Partners",
      image: "/images/testimonials/testimonial-2.jpg"
    },
    {
      id: 3,
      quote: "As a healthcare provider, finding qualified remote staff was challenging until we partnered with Clearview. Their specialized knowledge of our industry requirements made all the difference.",
      author: "Dr. Lisa Martinez",
      title: "Medical Director",
      company: "Northwest Health Systems",
      image: "/images/testimonials/testimonial-3.jpg"
    }
  ];

  const certifications = [
    { name: "ISO 9001 Certified", icon: ShieldCheckIcon },
    { name: "HIPAA Compliant", icon: ShieldCheckIcon },
    { name: "SOC 2 Certified", icon: ShieldCheckIcon },
    { name: "ADA Compliance", icon: CheckBadgeIcon }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", icon: TrophyIcon },
    { value: "1000+", label: "Successful Placements", icon: UserGroupIcon },
    { value: "24/7", label: "Support Available", icon: ClockIcon },
    { value: "100+", label: "Industry Specialists", icon: BriefcaseIcon }
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
          
          {/* Trust Badges Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <cert.icon className="h-5 w-5 text-white mr-2" />
                <span className="text-white text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="h-8 w-8 text-blue-600 mb-2" />
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Expert Staffing Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              From specialized professionals to complete teams, we provide reliable staffing solutions for any industry.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                specializations={service.specializations}
                caseStudy={service.caseStudy}
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
      
      {/* Client Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Don't just take our word for it. See what organizations like yours have achieved with our services.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <svg className="h-8 w-8 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391C14.017 10.047 16.314 7.75 19.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21h-2.372zm-8 0v-7.391C6.017 10.047 8.314 7.75 11.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21H6.017z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    {/* If you have actual images, uncomment this: */}
                    {/* <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} /> */}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
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
            <div className="grid gap-8 md:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white text-xl font-bold mx-auto">
                  1
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Needs Assessment</h3>
                <p className="mt-2 text-base text-gray-500">
                  We work with you to understand your specific staffing requirements, organizational culture, and technical needs.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700">What you get:</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Detailed requirements document</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Market insights report</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white text-xl font-bold mx-auto">
                  2
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Candidate Selection</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our recruiters find, screen, and vet qualified professionals who match your specific needs and industry requirements.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700">What you get:</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">6-point verification process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Skills assessment reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Cultural fit evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white text-xl font-bold mx-auto">
                  3
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Seamless Placement</h3>
                <p className="mt-2 text-base text-gray-500">
                  We handle the onboarding logistics and provide ongoing support to ensure a successful placement.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700">What you get:</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Comprehensive onboarding plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Integration assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Technology setup support</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white text-xl font-bold mx-auto">
                  4
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Ongoing Support</h3>
                <p className="mt-2 text-base text-gray-500">
                  We provide continuous monitoring, performance reviews, and adjustments to ensure long-term success.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700">What you get:</h4>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Monthly performance reviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Dedicated support manager</span>
                    </li>
                    <li className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Continuous improvement plans</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Industry Expertise
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We understand the unique challenges and regulatory requirements in these industries:
            </p>
          </div>
          
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {['Healthcare', 'Finance', 'Technology', 'Education', 'Retail', 'Manufacturing', 'Legal', 'Non-Profit', 'Government', 'Insurance', 'Media', 'Real Estate'].map((industry, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors">
                <p className="font-medium text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Need specialized staff for your industry?</h3>
                <p className="mt-2 text-base text-gray-600">Our team has expertise in regulatory compliance, industry best practices, and specialized skill requirements.</p>
              </div>
              <div className="mt-5 sm:mt-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Common questions about our staffing services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you find qualified staff for my organization?",
                  answer: "Depending on the role complexity and specific requirements, we typically provide qualified candidates within 1-3 weeks. For specialized positions, our extensive network allows us to locate hard-to-find talent efficiently."
                },
                {
                  question: "What makes your vetting process different from other staffing agencies?",
                  answer: "Our proprietary 6-point verification process evaluates technical skills, soft skills, work history, references, cultural fit, and communication abilities. This comprehensive approach ensures we only present candidates who will integrate seamlessly with your team."
                },
                {
                  question: "How do you ensure remote staff productivity and accountability?",
                  answer: "We implement proven remote work best practices, including clear deliverables, communication protocols, and performance metrics. Our ongoing support includes regular check-ins and performance reviews to maintain high productivity levels."
                },
                {
                  question: "Do you handle compliance and payroll for international staff?",
                  answer: "Yes, we manage all compliance, taxation, and payroll requirements for international staff, ensuring your organization remains compliant with local regulations while benefiting from global talent."
                },
                {
                  question: "What if a placement doesn't work out as expected?",
                  answer: "We stand behind our placements with a satisfaction guarantee. If a placement doesn't meet expectations within the first 30 days, we'll find a replacement at no additional cost to ensure your complete satisfaction."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="px-6 py-5">
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <div className="mt-2 text-base text-gray-600">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to build your remote team?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Schedule a consultation with our staffing experts to discuss your specific needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 