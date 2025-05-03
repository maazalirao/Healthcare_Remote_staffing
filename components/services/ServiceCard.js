// ServiceCard component for displaying individual service information
import Link from 'next/link';
import { iconMapping } from '../../data/services';

export default function ServiceCard({ title, description, icon, iconName, specializations, caseStudy, id }) {
  // Create a URL-friendly slug from the service title
  const slug = title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '';
  
  // Get the icon component from either the direct icon prop (for backward compatibility)
  // or from the iconName using the mapping
  const Icon = icon || (iconName ? iconMapping[iconName] : null);
  
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg border border-gray-100">
      <div className="px-5 py-6 sm:px-6 sm:py-8">
        <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-100 text-blue-600 mx-auto transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {Icon && <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />}
        </div>
        <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-gray-900 text-center">{title}</h3>
        <div className="w-12 sm:w-16 h-1 bg-blue-500 mx-auto my-2 sm:my-3 rounded-full"></div>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 text-center">{description}</p>
        
        {/* Specializations */}
        {specializations && specializations.length > 0 && (
          <div className="mt-5 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Specializations:</h4>
            <ul className="space-y-1">
              {specializations.map((specialization, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-gray-600">{specialization}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Case Study */}
        {caseStudy && (
          <div className="mt-5 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Success Story:</h4>
            <p className="text-xs text-gray-600 italic">"{caseStudy}"</p>
          </div>
        )}
        
        {/* Learn More - Now links to the service detail page */}
        <div className="mt-6">
          <Link 
            href={`/services/${slug}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 flex items-center justify-center w-full"
          >
            View Details
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 