import Image from 'next/image';

export default function TeamExpertise() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Expert Staffing Teams
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our specialized recruitment teams understand the unique requirements of various industry positions
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-blue-700">Industry Expertise</h3>
                <p className="text-gray-600 mt-2">Our staffing specialists include former industry professionals who understand specific requirements and credentialing processes for specialized roles.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-blue-700">Technical Screening</h3>
                <p className="text-gray-600 mt-2">We employ rigorous technical assessments for IT, finance, engineering, and specialized technology positions to ensure proficiency.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-blue-700">Compliance & Regulations</h3>
                <p className="text-gray-600 mt-2">Our teams are thoroughly trained in industry compliance regulations, including specialized certifications, data privacy, and jurisdiction-specific requirements.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-blue-700">Specialized Recruitment</h3>
                <p className="text-gray-600 mt-2">Each recruitment team specializes in specific industry niches, from technical roles and administrative positions to specialized professional services.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 mt-12 lg:mt-0 mb-12 lg:mb-0 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/jason-goodman-Oalh2MojUuk-unsplash.jpg" 
                alt="Staffing team meeting" 
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent/0 flex flex-col justify-end p-6">
                <div className="bg-white/90 rounded-lg p-4">
                  <h3 className="text-lg font-bold text-blue-800">Weekly Team Training</h3>
                  <p className="text-blue-900">Our staffing specialists participate in weekly training sessions to stay current with industry developments</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-blue-600 rounded-lg shadow-lg p-4 text-white">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm">Industry Specialties</p>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-lg shadow-lg p-4 text-white">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Compliant Processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 