// TrustBuilders component with bullet points highlighting trust factors
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function TrustBuilders() {
  const trustPoints = [
    "All Candidates HIPAA-Aware and Compliant",
    "Thorough Background Checks for Every Professional",
    "Credential Verification Guaranteed",
    "Industry-Specific Experience Required",
    "Remote-Work Training and Preparedness",
    "Ongoing Performance Monitoring"
  ];

  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Trust Guarantees
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            We maintain the highest standards to ensure your remote healthcare staffing needs are met with quality and reliability.
          </p>
        </div>

        <div className="mt-12 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <ul className="space-y-4 grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 md:space-y-0">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 