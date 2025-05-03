import Image from 'next/image';

export default function AboutOffice() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Our Work Environment
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Clearview Staffing Group, we're proud of our modern, collaborative workspaces designed to foster innovation and exceptional service delivery across all industries.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700">State-of-the-art Facilities</h3>
                <p className="text-gray-600">Our offices are equipped with the latest technology to ensure seamless communication with clients and remote staff worldwide.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700">Collaborative Environment</h3>
                <p className="text-gray-600">Our open-plan offices encourage teamwork and knowledge sharing among our industry-specialized staffing teams.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700">Global Connectivity</h3>
                <p className="text-gray-600">Our dedicated teams work across time zones to provide 24/7 support to our clients and professionals in various industries.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/images/austin-distel-wawEfYdpkag-unsplash.jpg" 
                alt="Our office environment" 
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent py-6 px-4">
                <p className="text-white text-lg font-semibold">Our London Office</p>
                <p className="text-blue-100">Where our European staffing operations are coordinated</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-blue-600 rounded-lg shadow-lg p-4 text-white">
              <p className="text-2xl font-bold">4</p>
              <p className="text-sm">Global Offices</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-lg shadow-lg p-4 text-white">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 