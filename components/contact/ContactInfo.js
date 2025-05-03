// ContactInfo component displaying contact information
import { EnvelopeIcon, PhoneIcon, BuildingOfficeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "info@clearviewstaffinggrp.com",
      link: "mailto:info@clearviewstaffinggrp.com",
      description: "For general inquiries and support requests"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "(555) 123-4567",
      link: "tel:+15551234567",
      description: "Monday to Friday, 9am-5pm EST"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Office",
      value: "The W Mall & Business Center",
      description: "355 Flushing Ave, Suite 706b, Brooklyn, NY 11205"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      description: "Saturday - Sunday: Closed"
    }
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
      <div className="px-6 py-8">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <BuildingOfficeIcon className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
        </div>
        
        <p className="text-gray-600 mb-6">
          Reach out to our team for personalized staffing assistance or to schedule a consultation.
        </p>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex-shrink-0 bg-blue-50 rounded-full p-3 mt-1">
                <method.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-base font-medium text-gray-900">{method.title}</p>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">{method.value}</p>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500 mb-3 sm:mb-0">Connect with us on social media:</p>
            <div className="flex space-x-4">
              {/* Social media links */}
              <a 
                href="#linkedin" 
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="#twitter" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="#facebook" 
                className="text-gray-400 hover:text-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 