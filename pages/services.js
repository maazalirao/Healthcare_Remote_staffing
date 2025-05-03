import Head from 'next/head';
import ServiceCard from '../components/services/ServiceCard';
import TeamExpertise from '../components/services/TeamExpertise';
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
import services from '../data/services';

export default function Services() {
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
      
      <div className="bg-blue-600 py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image 
            src="/images/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg"
            alt="Professionals collaborating"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">
            Our Services
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white text-center px-2">
            Comprehensive remote staffing solutions tailored to your organization's unique needs across every industry and specialization.
          </p>
          
          {/* Trust Badges Section */}
          <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-blue-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                <cert.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white mr-1.5 sm:mr-2" />
                <span className="text-white text-xs sm:text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <section className="bg-white py-6 sm:py-7 md:py-8 lg:py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600 mb-1 sm:mb-2" />
                <p className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <TeamExpertise />
      
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
              Expert Staffing Solutions
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 px-2">
              From specialized professionals to complete teams, we provide reliable staffing solutions for any industry.
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                specializations={service.specializations}
                caseStudy={service.caseStudy}
              />
            ))}
          </div>
          
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-8 text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Need a custom staffing solution?</h2>
              <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-600">
                We understand that every organization has unique staffing needs. 
                Don't see exactly what you're looking for? We source specialized roles for any industry.
              </p>
              <div className="mt-3 sm:mt-4 md:mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 border border-transparent text-xs sm:text-sm md:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 px-2">
              Don't just take our word for it. See what organizations like yours have achieved with our staffing services.
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-2 sm:mb-3 md:mb-4">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391C14.017 10.047 16.314 7.75 19.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21h-2.372zm-8 0v-7.391C6.017 10.047 8.314 7.75 11.875 7.75h.008v3.585c-1.932 0-3.494 1.562-3.494 3.494V21H6.017z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 sm:mb-3 md:mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    {/* If you have actual images, uncomment this: */}
                    {/* <Image src={testimonial.image} alt={testimonial.author} width={40} height={40} /> */}
                  </div>
                  <div className="ml-2 sm:ml-3">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Expertise Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
              Industry Expertise
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 px-2">
              We understand the unique challenges and regulatory requirements in these industries:
            </p>
          </div>
          
          <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {['Healthcare', 'Finance', 'Technology', 'Education', 'Retail', 'Manufacturing', 'Legal', 'Non-Profit', 'Government', 'Insurance', 'Media', 'Real Estate'].map((industry, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-3 md:p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors">
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-blue-50 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">Need specialized staff for your industry?</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-600">Our team has expertise in regulatory compliance, industry best practices, and specialized skill requirements.</p>
              </div>
              <div className="mt-3 sm:mt-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent rounded-md shadow-sm text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-500 px-2">
              Have questions about our staffing services? We've got answers.
            </p>
          </div>
          
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 md:p-8">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">How does your remote staffing process work?</h3>
                <p className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base text-gray-600">
                  We begin by understanding your specific needs, then search our global talent network for suitable candidates. 
                  We pre-screen and present only the most qualified individuals for your review. Once you select a candidate, 
                  we handle all onboarding logistics to ensure a smooth transition.
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">What types of professionals do you provide?</h3>
                <p className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base text-gray-600">
                  We provide professionals across all industries and roles - from customer service and administrative support 
                  to specialized technical roles, healthcare professionals, and executive-level positions. Our network 
                  includes talent from around the world with various skill sets and experience levels.
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">What are the cost benefits of your staffing solutions?</h3>
                <p className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base text-gray-600">
                  Organizations typically save 40-70% on staffing costs compared to local hiring. Beyond direct salary savings, 
                  you'll eliminate expenses related to office space, equipment, benefits administration, and recruitment costs. 
                  We provide a detailed cost comparison during your consultation.
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">How quickly can you fill positions?</h3>
                <p className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base text-gray-600">
                  For most positions, we can provide qualified candidates within 1-2 weeks. For highly specialized roles, 
                  it may take slightly longer to ensure we find the perfect match. We also offer expedited staffing for 
                  urgent needs when possible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
            >
              Contact Us For More Information
              <svg className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 