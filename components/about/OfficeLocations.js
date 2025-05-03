import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function OfficeLocations() {
  const offices = [
    {
      id: 1,
      location: "New York, USA",
      address: "1325 Avenue of the Americas, 28th Floor, New York, NY 10019",
      phone: "+1 (212) 897-5962",
      email: "ny@clearviewstaffing.com",
      website: "https://clearviewstaffing.com/locations/usa",
      image: "/images/jason-goodman-Oalh2MojUuk-unsplash.jpg",
      description: "Our North American headquarters manages U.S. operations and serves clients throughout North and South America.",
      businessHours: "Monday-Friday: 8:30 AM - 6:00 PM ET",
      established: "Established 2012",
      districtInfo: "Located in Midtown Manhattan's business district"
    },
    {
      id: 2,
      location: "London, UK",
      address: "30 St Mary Axe (The Gherkin), 24th Floor, London EC3A 8BF",
      phone: "+44 20 7123 4567",
      email: "london@clearviewstaffing.com",
      website: "https://clearviewstaffing.com/locations/uk",
      image: "/images/austin-distel-wawEfYdpkag-unsplash.jpg",
      description: "Our European headquarters specializing in staffing across the United Kingdom and European Union countries.",
      businessHours: "Monday-Friday: 9:00 AM - 5:30 PM GMT",
      established: "Established 2014",
      districtInfo: "Located in London's financial district"
    },
    {
      id: 3,
      location: "Singapore",
      address: "One Raffles Place, Tower 2, Level 19, Singapore 048616",
      phone: "+65 6808 7300",
      email: "singapore@clearviewstaffing.com",
      website: "https://clearviewstaffing.com/locations/asia",
      image: "/images/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg",
      description: "Our Asia-Pacific hub provides specialized staffing solutions throughout Southeast Asia and Oceania.",
      businessHours: "Monday-Friday: 9:00 AM - 6:00 PM SGT",
      established: "Established 2017",
      districtInfo: "Located in Singapore's central business district"
    },
    {
      id: 4,
      location: "Dubai, UAE",
      address: "Emirates Towers, Level 41, Sheikh Zayed Road, Dubai, UAE",
      phone: "+971 4 330 0000",
      email: "dubai@clearviewstaffing.com",
      website: "https://clearviewstaffing.com/locations/middle-east",
      image: "/images/campaign-creators-gMsnXqILjp4-unsplash.jpg",
      description: "Our Middle East office specializing in staffing solutions for the GCC region and broader MENA markets.",
      businessHours: "Sunday-Thursday: 8:00 AM - 5:00 PM GST",
      established: "Established 2019",
      districtInfo: "Located in Dubai's prestigious business district"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Global Offices
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            With locations across 4 continents, we provide staffing solutions worldwide
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Office visits by appointment only | Virtual meetings available
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office) => (
            <div key={office.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <Image 
                  src={office.image} 
                  alt={`${office.location} Office`} 
                  layout="fill" 
                  objectFit="cover"
                  className="w-full h-full"
                  priority
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                  {office.established}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.location}</h3>
                <p className="text-gray-600 mb-4">{office.description}</p>
                <div className="space-y-3 text-sm text-gray-500">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{office.address}</p>
                      <p className="text-xs text-blue-500 mt-1">{office.districtInfo}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <p>{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <p>{office.email}</p>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                    <p>{office.businessHours}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href={office.website} className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Contact This Office
                  </Link>
                </div>
                <div className="mt-3 text-xs text-center text-gray-400">
                  Due to security protocols, all office visits require prior appointment
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-900">Need to meet with our team?</h3>
              <p className="text-gray-600 mt-1">Schedule a video call or in-person appointment at one of our global offices</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 