import { MapPinIcon } from '@heroicons/react/24/solid';

export default function MapComponent({ className = '' }) {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      <div className="p-4 bg-blue-50 border-b border-blue-100 flex items-center justify-between">
        <div className="flex items-center">
          <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="font-medium text-gray-900">Our Location</h3>
        </div>
        <a 
          href="https://maps.google.com/?q=355+Flushing+Ave,+Brooklyn,+NY+11205" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          Get Directions
        </a>
      </div>
      
      <div className="relative w-full h-0 pb-[56.25%]">
        {/* Fallback static map image in case iframe doesn't load */}
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-4">
            <MapPinIcon className="h-10 w-10 text-blue-500 mx-auto mb-2" />
            <p className="text-gray-500">Map loading...</p>
          </div>
        </div>
        
        {/* Responsive iframe for Google Maps - Replace YOUR_GOOGLE_MAPS_EMBED_API_KEY with actual key if available */}
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-73.97009492346894!3d40.69793834442452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b9e1735b38f%3A0xb5fe454b88e9c2c0!2s355%20Flushing%20Ave%2C%20Brooklyn%2C%20NY%2011205!5e0!3m2!1sen!2sus!4v1684889642051!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The W Mall & Business Center location map"
        ></iframe>
      </div>
      
      <div className="p-4 bg-white border-t border-gray-100">
        <p className="text-sm text-gray-600">
          <span className="font-medium">The W Mall & Business Center</span><br />
          355 Flushing Ave, Suite 706b<br />
          Brooklyn, NY 11205
        </p>
      </div>
    </div>
  );
} 