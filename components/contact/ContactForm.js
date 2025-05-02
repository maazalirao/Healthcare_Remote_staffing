// ContactForm component for sending messages
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Explicit submitting state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('loading');
    setFormMessage('Sending...');

    const formAction = "https://formsubmit.co/maazaltaf1027@gmail.com"; // Your FormSubmit endpoint

    // Create FormData object for submission
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Check Content-Type before parsing
      const contentType = response.headers.get("content-type");
      let submissionSuccess = false;
      let resultMessage = 'Submission failed. Please try again.'; // Default error

      if (contentType && contentType.indexOf("application/json") !== -1) {
        const result = await response.json();
        if (response.ok && result.success === "true") {
          submissionSuccess = true;
          resultMessage = result.message; // Use FormSubmit's success message
        } else {
          resultMessage = result.message || 'Submission failed according to server.';
        }
      } else {
         if (response.ok) {
             console.log('Received non-JSON response, assuming success after activation.');
             submissionSuccess = true;
             // Use a generic success message
             resultMessage = "Message sent successfully! We will get back to you soon."; 
         } else {
             console.error('Received non-JSON error response:', await response.text());
             resultMessage = `Submission failed with status: ${response.status}. Please try again.`;
         }
      }

      if (submissionSuccess) {
        setFormStatus('success');
        const successText = `${resultMessage} Alternatively, you can schedule a 30-minute call directly here: `;
        const calendlyLink = "https://calendly.com/david-clearviewstaffinggrp/30min";
        setFormMessage(
          <>
            {successText}
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Book a Call
            </a>
          </>
        );
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error(resultMessage);
      }

    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message || 'Failed to send message. Please check your connection or try again later.');
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="How can we help you?"
              required
            />
          </div>

          {formMessage && formStatus !== 'loading' && (
            <div
              className={`p-4 rounded-md text-sm mt-4 ${
                formStatus === 'success' ? 'bg-green-100 text-green-700' :
                formStatus === 'error' ? 'bg-red-100 text-red-700' :
                ''
              }`}
              role={formStatus === 'error' ? 'alert' : 'status'}
            >
              {formMessage}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 