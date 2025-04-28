import Head from 'next/head';
import IntakeForm from '../components/form/IntakeForm';

export default function Intake() {
  return (
    <>
      <Head>
        <title>Client Intake Form | Clearview Staffing Group</title>
        <meta name="description" content="Submit your healthcare staffing needs through our intake form to start the process of finding qualified remote healthcare professionals." />
      </Head>
      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
            Client Intake Form
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 text-center">
            Tell us about your staffing needs to get started with our specialized healthcare staffing services.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <IntakeForm />
          
          <div className="mt-12">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-lg font-medium text-gray-900">What happens next?</h2>
                <ol className="mt-4 space-y-4 text-gray-500">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 font-medium">1</span>
                    <p>Our team reviews your intake form within 1 business day.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 font-medium">2</span>
                    <p>We contact you to discuss specific details and requirements.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 font-medium">3</span>
                    <p>Our specialists begin identifying qualified candidates for your needs.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 font-medium">4</span>
                    <p>We present pre-screened candidates for your consideration.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 