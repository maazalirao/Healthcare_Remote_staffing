// FinalCta component with a call-to-action button
import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Ready to simplify your healthcare staffing?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Start the process today and find the perfect remote healthcare professionals for your organization.
          </p>
          <div className="mt-8">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 