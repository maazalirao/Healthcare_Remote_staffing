import Head from 'next/head';
import IntakeForm from '../components/form/IntakeForm';

export default function Intake() {
  return (
    <>
      <Head>
        <title>Staffing Request | Clearview Staffing Group</title>
        <meta name="description" content="Submit your staffing request through our easy-to-use form to get matched with the perfect professionals for your organization." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="bg-blue-600 py-6 sm:py-8 md:py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">
            Request Talent
          </h1>
          <p className="mt-2 sm:mt-3 md:mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-blue-100 text-center px-2">
            Tell us what you&apos;re looking for and we&apos;ll match you with the perfect professionals for your needs.
          </p>
        </div>
      </div>
      
      <section className="py-6 sm:py-8 md:py-10 lg:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Fill out the form below to get started</h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">It only takes a minute!</p>
          </div>
          
          <IntakeForm />
          
          <div className="mt-8 sm:mt-12 md:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Why choose Clearview Staffing?</h2>
            </div>
            
            <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-3">
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 text-blue-600 mx-auto mb-3 sm:mb-4">
                  <span className="font-bold text-sm sm:text-base">1</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-center mb-1 sm:mb-2 text-gray-800">Expert Matching</h3>
                <p className="text-gray-600 text-center text-xs sm:text-sm">We carefully match your needs with top professionals across all industries.</p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 text-blue-600 mx-auto mb-3 sm:mb-4">
                  <span className="font-bold text-sm sm:text-base">2</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-center mb-1 sm:mb-2 text-gray-800">Fast Response</h3>
                <p className="text-gray-600 text-center text-xs sm:text-sm">We respond within 1 business day and can provide candidates quickly.</p>
              </div>
              
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 text-blue-600 mx-auto mb-3 sm:mb-4">
                  <span className="font-bold text-sm sm:text-base">3</span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-center mb-1 sm:mb-2 text-gray-800">Quality Guaranteed</h3>
                <p className="text-gray-600 text-center text-xs sm:text-sm">All our candidates are pre-screened to ensure they meet your requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 