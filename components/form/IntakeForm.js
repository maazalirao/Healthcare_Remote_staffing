// IntakeForm component for client intake
import { useState } from 'react';

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    roleNeeded: '',
    numPositions: '1', // Default to 1
    details: '',
  });
  // Re-add formStatus and formMessage states
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

  // Updated handleSubmit for FormSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading
    setFormStatus('loading');
    setFormMessage('Submitting...');

    const formAction = "https://formsubmit.co/maazaltaf1027@gmail.com"; // Your FormSubmit endpoint

    // Create FormData object for submission
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    // Add FormSubmit specific hidden fields if needed, handled by form attributes below

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: data,
        headers: { // Important for FormSubmit AJAX
          'Accept': 'application/json'
        }
      });

      // Check Content-Type before parsing
      const contentType = response.headers.get("content-type");
      let submissionSuccess = false;
      let resultMessage = 'Submission failed. Please try again.'; // Default error

      if (contentType && contentType.indexOf("application/json") !== -1) {
         // We got JSON back
        const result = await response.json();
        if (response.ok && result.success === "true") {
          submissionSuccess = true;
          resultMessage = result.message; // Use FormSubmit's message if available
        } else {
          resultMessage = result.message || 'Submission failed according to server.';
        }
      } else {
         // We got HTML (or something else) back. Assume success after activation, 
         // but show a generic message as we can't parse details.
         // You might adjust this logic based on testing after activation.
         if (response.ok) {
             console.log('Received non-JSON response, assuming success after activation.');
             submissionSuccess = true;
             // Use a generic success message since we couldn't parse the specific one
             resultMessage = "Request submitted successfully! We will be in touch soon."; 
         } else {
             console.error('Received non-JSON error response:', await response.text());
             resultMessage = `Submission failed with status: ${response.status}. Please try again.`;
         }
      }

      if (submissionSuccess) {
        setFormStatus('success');
        const successText = `${resultMessage} You can also schedule a 30-minute call directly here: `;
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
          orgName: '',
          contactName: '',
          email: '',
          phone: '',
          roleNeeded: '',
          numPositions: '1',
          details: '',
        });
      } else {
         // Throw error based on FormSubmit response or generic message
         throw new Error(resultMessage);
      }

    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message || 'Failed to submit request. Please check your connection or try again later.');
      console.error('Form submission error:', error);
    } finally {
       setIsSubmitting(false); // Stop loading regardless of outcome
    }
  };


  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        {/* Update form tag for FormSubmit if NOT using AJAX, but we are using AJAX (fetch) */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Add hidden fields for FormSubmit (optional but good practice) */}
          {/* <input type="hidden" name="_subject" value={`New Staffing Request: ${formData.orgName}`} /> */}
          {/* <input type="hidden" name="_captcha" value="false" /> */}
          {/* <input type="hidden" name="_next" value="YOUR_THANK_YOU_PAGE_URL" />  Optional redirect */}

          {/* Form fields remain the same */}
          <div>
            <label htmlFor="orgName" className="block text-sm font-medium text-gray-700">
              Organization Name
            </label>
            <input
              type="text"
              name="orgName"
              id="orgName"
              value={formData.orgName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Healthcare Organization Name"
              required
            />
          </div>

          <div>
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="contactName"
              id="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="roleNeeded" className="block text-sm font-medium text-gray-700">
              Role Needed
            </label>
            <select
              id="roleNeeded"
              name="roleNeeded"
              value={formData.roleNeeded}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select a role</option>
              <option value="administrative">Remote Administrative Support</option>
              <option value="billing">Medical Billing & Coding</option>
              <option value="telehealth">Telehealth Support</option>
              <option value="it">Healthcare IT</option>
              <option value="case">Remote Case Management</option>
              <option value="other">Other (specify in details)</option>
            </select>
          </div>

          <div>
            <label htmlFor="numPositions" className="block text-sm font-medium text-gray-700">
              Number of Positions
            </label>
            <input
              type="number"
              name="numPositions"
              id="numPositions"
              value={formData.numPositions}
              onChange={handleChange}
              min="1"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Please provide any specific requirements, skills needed, or questions you have."
            />
          </div>

          {/* Form Status Messages Re-added */}
          {formMessage && formStatus !== 'loading' && ( // Show status only when not loading, or adjust logic as needed
            <div
              className={`p-4 rounded-md text-sm ${
                formStatus === 'success' ? 'bg-green-100 text-green-700' :
                formStatus === 'error' ? 'bg-red-100 text-red-700' :
                '' // No background for loading if message shown separately
              }`}
              role={formStatus === 'error' ? 'alert' : 'status'}
            >
              {formMessage}
            </div>
          )}


          <div className="flex justify-end">
             {/* Re-add loading state to button */}
            <button
              type="submit"
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 