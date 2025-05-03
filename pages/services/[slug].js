import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
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
  CheckBadgeIcon,
  StarIcon,
  DocumentTextIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

// Import service data
import services, { iconMapping } from '../../data/services';

// Generate static paths for all services
export async function getStaticPaths() {
  const paths = services.map(service => ({
    params: { slug: service.slug }
  }));
  
  return { paths, fallback: false };
}

// Get static props for the specific service
export async function getStaticProps({ params }) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      service,
      allServices: services, // Used for related services
    },
  };
}

export default function ServiceDetail({ service, allServices }) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Service Not Found</h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 text-center">The service you're looking for doesn't exist or has been moved.</p>
        <Link href="/services" className="mt-4 sm:mt-6 inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-transparent rounded-md shadow-sm text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          Back to Services
        </Link>
      </div>
    );
  }
  
  // Map the iconName string to the actual icon component
  const Icon = iconMapping[service.iconName];
  
  return (
    <>
      <Head>
        <title>{typeof service.title === 'string' ? `${service.title} | Clearview Staffing Group` : 'Service Details | Clearview Staffing Group'}</title>
        <meta name="description" content={`Learn about our ${service.title} staffing solutions. ${service.description}`} />
      </Head>
      
      {/* Hero Section */}
      <div className="bg-blue-600 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full mb-3 sm:mb-4 md:mb-0">
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h1 className="md:ml-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center md:text-left">
              {service.title}
            </h1>
          </div>
          <p className="mt-2 sm:mt-3 md:mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white text-center px-2">
            {service.description}
          </p>
          
          {/* Credentials Bar */}
          <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            <div className="bg-blue-700 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg flex items-center">
              <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1 sm:mr-2" />
              <span className="text-white text-xs sm:text-sm">Verified Experts</span>
            </div>
            <div className="bg-blue-700 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg flex items-center">
              <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1 sm:mr-2" />
              <span className="text-white text-xs sm:text-sm">Fast Placement</span>
            </div>
            <div className="bg-blue-700 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg flex items-center">
              <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1 sm:mr-2" />
              <span className="text-white text-xs sm:text-sm">Satisfaction Guarantee</span>
            </div>
            <div className="bg-blue-700 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg flex items-center">
              <DocumentTextIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1 sm:mr-2" />
              <span className="text-white text-xs sm:text-sm">Compliance Assured</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-2 sm:py-3 overflow-x-auto whitespace-nowrap">
            <ol className="flex items-center space-x-1 sm:space-x-2">
              <li>
                <Link href="/" className="text-xs sm:text-sm text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-gray-400 mx-1">/</span>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm text-gray-500 hover:text-gray-700">Services</Link>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-gray-400 mx-1">/</span>
              </li>
              <li>
                <span className="text-xs sm:text-sm text-gray-900 font-medium">{service.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Overview</h2>
              <div className="mt-3 sm:mt-4 md:mt-6">
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">{service.fullDescription}</p>
              </div>
              
              {/* Specializations */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Key Specializations</h3>
                <ul className="mt-3 sm:mt-4 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                  {service.specializations.map((specialization, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckBadgeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{specialization}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Benefits</h3>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Process */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Our Process</h3>
                <div className="mt-3 sm:mt-4 grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full bg-blue-600 text-white text-sm sm:text-base md:text-lg font-bold">
                          {idx + 1}
                        </div>
                        <h4 className="ml-2 sm:ml-3 text-sm sm:text-base md:text-lg font-medium text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Case Study */}
              <div className="mt-6 sm:mt-8 md:mt-10 bg-blue-50 rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 border border-blue-100">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Success Story</h3>
                <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-700 italic">"{service.caseStudy}"</p>
                <div className="mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-blue-200">
                  <h4 className="font-semibold text-gray-900">Key Results</h4>
                  <div className="mt-2 sm:mt-3 md:mt-4 grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:grid-cols-3">
                    {service.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">{result.metric}</p>
                        <p className="mt-1 text-xs sm:text-sm text-gray-600">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonials */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Client Testimonials</h3>
                <div className="mt-3 sm:mt-4 bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4 md:p-6">
                  {service.testimonials.map((testimonial, idx) => (
                    <div key={idx}>
                      <div className="flex items-start mb-2 sm:mb-3 md:mb-4">
                        <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391C14.017 10.047 16.314 7.75 19.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21h-2.372zm-8 0v-7.391C6.017 10.047 8.314 7.75 11.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21H6.017z" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-2 sm:mb-3 md:mb-4">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                        <div className="ml-2 sm:ml-3">
                          <p className="text-xs sm:text-sm font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-xs text-gray-500">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQ */}
              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5">
                      <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900">{faq.question}</h4>
                      <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Need immediate assistance?</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Our staffing experts are ready to help you find the perfect fit for your needs.</p>
                <Link href="/contact" className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800">
                  Contact us now
                  <svg className="ml-1 sm:ml-1.5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Key Features */}
              <div className="mt-4 sm:mt-5 md:mt-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Key Features</h3>
                <ul className="bg-white rounded-lg border border-gray-200">
                  {service.keyFeatures.map((feature, idx) => (
                    <li key={idx} className={`px-3 sm:px-4 py-2 sm:py-3 ${idx !== 0 ? 'border-t border-gray-200' : ''}`}>
                      <div className="flex items-center">
                        <CheckBadgeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Related Services */}
              <div className="mt-4 sm:mt-5 md:mt-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Related Services</h3>
                <div className="bg-white rounded-lg border border-gray-200">
                  {allServices.filter(s => s.id !== service.id).slice(0, 3).map((relatedService, idx) => {
                    const RelatedIcon = iconMapping[relatedService.iconName];
                    return (
                      <Link key={relatedService.id} href={`/services/${relatedService.slug}`}>
                        <div className={`px-3 sm:px-4 py-2 sm:py-3 flex items-center hover:bg-blue-50 cursor-pointer transition-colors duration-200 ${idx !== 0 ? 'border-t border-gray-200' : ''}`}>
                          <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <RelatedIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                          </div>
                          <div className="ml-2 sm:ml-3">
                            <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-0.5">{relatedService.title}</h4>
                            <p className="text-xs text-gray-500 line-clamp-1">{relatedService.description}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              {/* Resources */}
              <div className="mt-4 sm:mt-5 md:mt-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Resources</h3>
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="px-3 sm:px-4 py-2 sm:py-3">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Free Consultation</h4>
                    <p className="text-xs text-gray-600 mb-2">Schedule a no-obligation consultation with our experts.</p>
                    <Link href="/contact" className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800">
                      Book now
                      <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-gray-200">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Request Talent</h4>
                    <p className="text-xs text-gray-600 mb-2">Submit your staffing needs and we'll match you with the right professionals.</p>
                    <Link href="/intake" className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800">
                      Submit request
                      <svg className="ml-1 w-3 h-3 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 