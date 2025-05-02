// TrustBuilders component with bullet points highlighting trust factors
import { ShieldCheckIcon, GlobeAltIcon, BriefcaseIcon } from '@heroicons/react/24/solid';

export default function TrustBuilders() {
  const trustPoints = [
    {
      text: "All Candidates HIPAA-Aware and Compliant",
      icon: ShieldCheckIcon
    },
    {
      text: "Remote Staff Based in U.S. and International Talent Pools",
      icon: GlobeAltIcon
    },
    {
      text: "Specialized Only in Healthcare Admin and Support Roles",
      icon: BriefcaseIcon
    },
    {
      text: "Thorough Background Checks for Every Professional",
      icon: ShieldCheckIcon
    },
    {
      text: "Credential Verification Guaranteed",
      icon: ShieldCheckIcon
    },
    {
      text: "Ongoing Performance Monitoring",
      icon: ShieldCheckIcon // Consider a different icon if appropriate
    }
  ];

  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Scale Smarter with Remote Staff You Can Trust
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100">
            We ensure quality, compliance, and reliability through rigorous vetting and specialized focus.
          </p>
        </div>

        <div className="mt-12 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-10 sm:p-10">
            <ul className="space-y-5 grid md:grid-cols-2 gap-x-8 gap-y-6">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <point.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                  </div>
                  <p className="ml-4 text-lg leading-relaxed text-gray-700">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 