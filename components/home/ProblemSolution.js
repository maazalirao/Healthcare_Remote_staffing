// ProblemSolution component displaying common problems and our solution
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ProblemSolution() {
  const problems = [
    {
      id: 1,
      title: 'Tired of Turnover',
      description: 'High turnover rates in healthcare staffing lead to increased costs and reduced quality of care.'
    },
    {
      id: 2,
      title: 'Struggle to Find Qualified Staff',
      description: 'Finding qualified healthcare professionals who can work remotely is time-consuming and challenging.'
    },
    {
      id: 3,
      title: 'Complex Compliance Requirements',
      description: 'Navigating complex healthcare compliance issues while hiring remote staff can be overwhelming.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Common Challenges in Healthcare Staffing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Healthcare organizations face unique challenges when it comes to remote staffing.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem.id} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                  </div>
                  <h3 className="ml-3 text-xl font-medium text-gray-900">{problem.title}</h3>
                </div>
                <p className="mt-4 text-base text-gray-500">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600">Our Solution</h3>
              <p className="mt-4 text-lg text-gray-600">
                Clearview Staffing Group offers a comprehensive remote healthcare staffing solution that addresses these challenges head-on. 
                We pre-screen candidates, verify credentials, ensure HIPAA compliance, and match the right professionals to your specific needs.
                Our streamlined process reduces your administrative burden while ensuring you get qualified remote healthcare staff quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 