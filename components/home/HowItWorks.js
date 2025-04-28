// HowItWorks component showing the three-step process
import { ClipboardDocumentListIcon, UserGroupIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

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
      description: 'We present you with qualified, pre-vetted healthcare professionals who match your specific requirements.',
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our straightforward process makes finding qualified remote healthcare staff simple and efficient.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="mt-2 flex flex-col items-center">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-xl font-bold">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">{step.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 