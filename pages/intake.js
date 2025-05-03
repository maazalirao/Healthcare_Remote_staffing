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
      
      <div className="bg-blue-600 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-center">
            Request Talent
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 text-center">
            Tell us what you're looking for and we'll match you with the perfect professionals for your needs.
          </p>
        </div>
      </div>
      
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Fill out the form below to get started</h2>
            <p className="mt-2 text-gray-600">It only takes a minute!</p>
          </div>
          
          <IntakeForm />
          
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Why choose Clearview Staffing?</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Expert Matching</h3>
                <p className="text-gray-600 text-center text-sm">We carefully match your needs with top professionals across all industries.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Fast Response</h3>
                <p className="text-gray-600 text-center text-sm">We respond within 1 business day and can provide candidates quickly.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600 text-center text-sm">All our candidates are pre-screened to ensure they meet your requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 