import Head from 'next/head';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Clearview Staffing Group</title>
        <meta name="description" content="Contact Clearview Staffing Group for specialized healthcare remote staffing solutions." />
      </Head>
      
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100 text-center">
            We're here to answer your questions about our healthcare staffing solutions.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
          
          <div className="mt-16">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">How quickly can you fill remote healthcare positions?</h3>
                    <p className="mt-2 text-gray-600">
                      Our average placement time is 2-3 weeks, depending on the specificity of the role and requirements. 
                      For urgent needs, we can often expedite the process.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Do you offer temporary staffing solutions?</h3>
                    <p className="mt-2 text-gray-600">
                      Yes, we provide both temporary and permanent staffing solutions based on your organization's needs.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">How do you ensure HIPAA compliance for remote staff?</h3>
                    <p className="mt-2 text-gray-600">
                      All our candidates undergo thorough HIPAA training and certification. We also verify their remote work environment 
                      meets security standards for handling protected health information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">What happens if a placement doesn't work out?</h3>
                    <p className="mt-2 text-gray-600">
                      We offer a satisfaction guarantee with all placements. If a candidate doesn't meet your expectations within the first 30 days, 
                      we'll find a replacement at no additional cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 