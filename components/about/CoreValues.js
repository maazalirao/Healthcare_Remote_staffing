// CoreValues component listing core company values
import { HeartIcon, ShieldCheckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

export default function CoreValues() {
  const values = [
    {
      name: 'Healthcare First',
      description: 'We know the industry’s urgency.',
      icon: HeartIcon,
    },
    {
      name: 'Security',
      description: 'HIPAA awareness is non-negotiable.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Speed',
      description: 'Your staffing gaps are our priority.',
      icon: ClockIcon,
    },
    {
      name: 'Quality',
      description: 'We screen heavily so you don’t waste time.',
      icon: StarIcon,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            These principles guide everything we do at Clearview Staffing Group.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">{value.name}</h3>
                <p className="mt-2 text-base text-gray-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 