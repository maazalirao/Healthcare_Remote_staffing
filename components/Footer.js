// Footer component with contact information, links, and copyright notice
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company info */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-auto h-10 sm:h-12">
                <Image 
                  src="/images/careviews logo.png" 
                  alt="CareViews Logo"
                  width={160}
                  height={48}
                  priority
                  className="object-contain w-auto h-full brightness-125 contrast-110"
                />
              </div>
            </Link>
            <p className="text-blue-100 max-w-xs text-xs sm:text-sm leading-relaxed">
              Specialized remote outsourcing staffing solutions connecting top organizations with qualified professionals across all industries.
            </p>
            <div className="flex space-x-4 pt-1 sm:pt-2">
              <a href="#" aria-label="LinkedIn" className="text-blue-100 hover:text-white transition-colors hover-lift">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-100 hover:text-white transition-colors hover-lift">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-blue-100 hover:text-white transition-colors hover-lift">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/intake" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Intake Form
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 mt-4 sm:mt-0">Our Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/services" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Technical Talent
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Administrative Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm text-blue-100 hover:text-white transition-colors inline-block py-1 hover-lift">
                  Custom Staffing Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 mt-4 lg:mt-0">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-100">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs sm:text-sm">The W Mall & Business Center<br />355 Flushing Ave, Suite 706b<br />Brooklyn, NY 11205</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@careviewsstaffinggrp.com" className="text-xs sm:text-sm hover:text-white hover:underline transition-colors">info@careviewsstaffinggrp.com</a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1-555-123-4567" className="text-xs sm:text-sm hover:text-white hover:underline transition-colors">(555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs sm:text-sm text-blue-200">
              &copy; {currentYear} CareViews Staffing Group. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-xs sm:text-sm text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-xs sm:text-sm text-blue-200 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 