// Footer component with copyright and links
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Clearview Staffing Group</h3>
            <p className="mt-2 text-sm text-gray-500">
              Specialized healthcare staffing solutions for remote positions.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-base text-gray-600 hover:text-blue-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/intake" className="text-base text-gray-600 hover:text-blue-600">
                  Client Intake
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-600">
                <span className="font-medium">Email:</span> info@clearviewstaffing.com
              </li>
              <li className="text-base text-gray-600">
                <span className="font-medium">Phone:</span> (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-500">
            &copy; {new Date().getFullYear()} Clearview Staffing Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 