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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Service Not Found</h1>
        <p className="mt-4 text-gray-600">The service you're looking for doesn't exist or has been moved.</p>
        <Link href="/services" className="mt-6 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
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
        <title>{service.title} | Clearview Staffing Group</title>
        <meta name="description" content={`Learn about our ${service.title} staffing solutions. ${service.description}`} />
      </Head>
      
      {/* Hero Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="ml-4 text-4xl font-extrabold tracking-tight text-white">
              {service.title}
            </h1>
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 text-center">
            {service.description}
          </p>
          
          {/* Credentials Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <ShieldCheckIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-white text-sm">Verified Experts</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <ClockIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-white text-sm">Fast Placement</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <StarIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-white text-sm">Satisfaction Guarantee</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <DocumentTextIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-white text-sm">Compliance Assured</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-3">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-sm text-gray-400 mx-1">/</span>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-500 hover:text-gray-700">Services</Link>
              </li>
              <li>
                <span className="text-sm text-gray-400 mx-1">/</span>
              </li>
              <li>
                <span className="text-sm text-gray-900 font-medium">{service.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
              <div className="mt-6 prose prose-blue prose-lg">
                <p>{service.fullDescription}</p>
              </div>
              
              {/* Specializations */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900">Key Specializations</h3>
                <ul className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2">
                  {service.specializations.map((specialization, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckBadgeIcon className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-base text-gray-700">{specialization}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
                <ul className="mt-4 space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-base text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Process */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900">Our Process</h3>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-lg font-bold">
                          {idx + 1}
                        </div>
                        <h4 className="ml-3 text-lg font-medium text-gray-900">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Case Study */}
              <div className="mt-10 bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900">Success Story</h3>
                <p className="mt-4 text-lg text-gray-700 italic">"{service.caseStudy}"</p>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <h4 className="font-semibold text-gray-900">Key Results</h4>
                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {service.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-3xl font-bold text-blue-600">{result.metric}</p>
                        <p className="mt-1 text-sm text-gray-600">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Testimonials */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900">Client Testimonials</h3>
                <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  {service.testimonials.map((testimonial, idx) => (
                    <div key={idx}>
                      <div className="flex items-start mb-4">
                        <svg className="h-8 w-8 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391C14.017 10.047 16.314 7.75 19.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21h-2.372zm-8 0v-7.391C6.017 10.047 8.314 7.75 11.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21H6.017z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-lg mb-4">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQ */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
                <div className="mt-4 divide-y divide-gray-200">
                  {service.faq.map((item, idx) => (
                    <div key={idx} className="py-6">
                      <h4 className="text-lg font-medium text-gray-900">{item.question}</h4>
                      <p className="mt-2 text-base text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sticky top-6">
                <h3 className="text-lg font-bold text-gray-900">Ready to get started?</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Contact our {service.title.toLowerCase()} specialists to discuss your staffing needs.
                </p>
                
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-sm text-gray-600">Call us at 1-800-555-0123</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Our specialists are available Monday-Friday, 9am-5pm EST</p>
                </div>
              </div>
              
              {/* Related Services */}
              <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">Related Services</h3>
                <ul className="mt-4 space-y-4">
                  {allServices
                    .filter(s => s.id !== service.id)
                    .slice(0, 3)
                    .map((relatedService, idx) => {
                      const RelatedIcon = iconMapping[relatedService.iconName];
                      return (
                        <li key={idx}>
                          <Link href={`/services/${relatedService.slug}`} className="flex items-start">
                            <div className="flex-shrink-0">
                              <RelatedIcon className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{relatedService.title}</p>
                              <p className="mt-1 text-xs text-gray-500 line-clamp-2">{relatedService.description}</p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">Why Choose Us</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Rigorous Vetting Process</p>
                      <p className="text-xs text-gray-500">Every candidate undergoes our 6-point verification</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClockIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Rapid Placement</p>
                      <p className="text-xs text-gray-500">Most positions filled within 1-3 weeks</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <StarIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Satisfaction Guarantee</p>
                      <p className="text-xs text-gray-500">98% client satisfaction rate</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DocumentTextIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Compliance Assured</p>
                      <p className="text-xs text-gray-500">All placements meet industry regulations</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Bottom */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to enhance your team with {service.title.toLowerCase()}?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Our specialists are ready to help you find the perfect talent for your organization.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 