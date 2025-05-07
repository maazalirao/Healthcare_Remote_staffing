import Image from 'next/image';
import Link from 'next/link';

export default function WorkEnvironment() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Ghana Office Center
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
            Our flagship facility in Ghana serves as a hub for global operations, delivering exceptional talent solutions with state-of-the-art infrastructure
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 mt-8 sm:mt-10 md:mt-12 lg:mt-0 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/images/ghanna_office.jpg" 
                alt="Our Ghana office environment" 
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent py-3 sm:py-4 md:py-6 px-3 sm:px-4">
                <p className="text-white text-base sm:text-lg font-semibold">Ghana Professional Center</p>
                <p className="text-blue-100 text-sm sm:text-base">Modern facilities equipped with cutting-edge technology and collaborative spaces</p>
              </div>
            </div>
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-blue-600 rounded-lg shadow-lg p-2 sm:p-3 md:p-4 text-white">
              <p className="text-lg sm:text-xl md:text-2xl font-bold">4</p>
              <p className="text-xs sm:text-sm">Global Offices</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Our Professional Work Environment
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              At Clearview Staffing Group, we&apos;ve created modern, collaborative workspaces that enable our team to deliver exceptional staffing solutions across various industries.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700">Ghana Center of Excellence</h3>
                <p className="text-sm sm:text-base text-gray-600">Our flagship Ghana center represents our commitment to developing talent in emerging markets with top-tier facilities.</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700">Expert Training Facilities</h3>
                <p className="text-sm sm:text-base text-gray-600">Our training facilities ensure all staffing specialists understand the unique requirements of specialized industry roles.</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700">Global Connectivity</h3>
                <p className="text-sm sm:text-base text-gray-600">Our offices feature advanced communication technology to connect with professionals worldwide.</p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700">Verification & Compliance Center</h3>
                <p className="text-sm sm:text-base text-gray-600">Dedicated teams verify credentials and qualifications to ensure compliance with industry standards across all sectors.</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <Link href="/about" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 text-sm sm:text-base">
                Learn more about our work environment
                <svg className="ml-1.5 sm:ml-2 w-4 sm:w-5 h-4 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 