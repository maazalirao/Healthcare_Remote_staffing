// ContactInfo component displaying contact information
import { EnvelopeIcon, PhoneIcon, BuildingOfficeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactInfo() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <EnvelopeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-gray-900">Email</p>
              <a href="mailto:info@clearviewstaffinggrp.com" className="text-blue-600 hover:text-blue-800 hover:underline">info@clearviewstaffinggrp.com</a>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <PhoneIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-gray-900">Phone</p>
              {/* Placeholder phone number - update when available */}
              <a href="tel:+1-555-123-4567" className="text-blue-600 hover:text-blue-800 hover:underline">(555) 123-4567</a>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <BuildingOfficeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-gray-900">Office</p>
              <p className="text-gray-600">
                The W Mall & Business Center<br />
                355 Flushing Ave, Suite 706b<br />
                Brooklyn, NY 11205
              </p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <ClockIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-lg font-medium text-gray-900">Hours</p>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
} 