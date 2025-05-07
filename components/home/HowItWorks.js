// HowItWorks component showing the three-step process
import { ClipboardDocumentListIcon, UserGroupIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      name: 'Submit Your Requirements',
      description: 'Tell us about your staffing needs using our simple intake form. Specify skills, experience level, and number of positions.',
      icon: ClipboardDocumentListIcon,
    },
    {
      id: 2,
      name: 'Review Pre-Screened Candidates',
      description: 'We present you with qualified, pre-vetted professionals who match your specific requirements.',
      icon: UserGroupIcon,
    },
    {
      id: 3,
      name: 'Onboard Your New Team Members',
      description: 'We handle the logistics and compliance details, making it easy to bring your new remote staff onboard quickly.',
      icon: CheckBadgeIcon,
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            How It Works
          </h2>
          <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 px-2">
            Our straightforward process makes finding qualified remote staff simple and efficient.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl mb-8 sm:mb-10 md:mb-12 lg:mb-0">
            <Image
              src="/images/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg"
              alt="Professionals working remotely"
              fill
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
              <div className="p-4 sm:p-5 md:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold">Global Talent Network</h3>
                <p className="text-sm sm:text-base">Access to skilled professionals worldwide</p>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {steps.map((step) => (
                <div key={step.id} className="relative flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-blue-600 text-white text-lg sm:text-xl font-bold">
                    {step.id}
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="flex items-center">
                      <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-1.5 sm:mr-2" aria-hidden="true" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{step.name}</h3>
                    </div>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 md:mt-10">
              <Link href="/intake" className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 