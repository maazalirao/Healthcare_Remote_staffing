import Head from 'next/head';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapComponent from '../components/contact/MapComponent';
import { motion } from 'framer-motion';
import { ChatBubbleBottomCenterTextIcon, UserIcon, StarIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Clearview Staffing Group</title>
        <meta name="description" content="Contact Clearview Staffing Group for specialized remote outsourcing staffing solutions. Reach out to our team for personalized staffing assistance." />
      </Head>
      
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-30" />
          <div className="absolute -inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-900 to-transparent opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black opacity-20" />
        </div>
        <div className="relative pt-12 pb-20 sm:pt-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
                We&apos;re here to answer your questions and provide the staffing solutions your business needs.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#contact-form"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://calendly.com/david-clearviewstaffinggrp/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative dots */}
        <div className="hidden sm:block absolute bottom-0 right-0">
          <div className="grid grid-cols-6 gap-2 p-8">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-white opacity-10" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Section with Form, Info and Map */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
              <MapComponent className="mt-8" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
          
          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our responsive support team has helped businesses find their perfect staffing match
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-2 mr-3">
                      <UserIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Enhanced FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
              <div className="px-6 py-8 md:p-10">
                <div className="flex items-center mb-6">
                  <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                
                <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Still have questions? We&apos;re here to help!</p>
                  <a
                    href="mailto:info@clearviewstaffinggrp.com"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Email Our Support Team
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to find your perfect staffing solution?</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
              Schedule a consultation with our team and discover the difference our dedicated approach makes.
            </p>
            <div className="mt-8">
              <a
                href="https://calendly.com/david-clearviewstaffinggrp/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-md"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "HR Director, Healthcare Solutions Inc",
    quote: "The support team was incredibly responsive. They understood our unique staffing needs and found us qualified candidates within days.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "CTO, TechStream",
    quote: "When we needed specialized tech talent quickly, the Clearview team delivered. Their communication throughout the process was outstanding.",
    rating: 5
  },
  {
    name: "Amanda Rodriguez",
    position: "Operations Manager, Global Logistics",
    quote: "From our first contact to ongoing support, the team has been professional and attentive to our staffing requirements.",
    rating: 4
  }
];

// FAQ data
const faqs = [
  {
    question: "How quickly can you fill remote positions?",
    answer: "Our average placement time is 2-3 weeks, depending on the specificity of the role and requirements. For urgent needs, we can often expedite the process."
  },
  {
    question: "Do you offer temporary staffing solutions?",
    answer: "Yes, we provide both temporary and permanent staffing solutions based on your organization&apos;s needs."
  },
  {
    question: "How do you ensure data security for remote staff?",
    answer: "All our candidates undergo thorough security training and verification. We also verify their remote work environment meets security standards for handling sensitive information."
  },
  {
    question: "What happens if a placement doesn&apos;t work out?",
    answer: "We offer a satisfaction guarantee with all placements. If a candidate doesn&apos;t meet your expectations within the first 30 days, we&apos;ll find a replacement at no additional cost."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in healthcare, technology, finance, and customer service industries, but our network includes professionals from a wide range of sectors."
  },
  {
    question: "Can you help with international staffing needs?",
    answer: "Absolutely. We have a global network and expertise in navigating international hiring regulations, time zones, and cultural considerations."
  }
]; 