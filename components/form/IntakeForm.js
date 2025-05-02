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
  const [formStatus, setFormStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    try {
      const response = await fetch('/api/submit-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      setFormStatus('success');
      setFormMessage(result.message);
      // Optionally reset form
      setFormData({
        orgName: '',
        contactName: '',
        email: '',
        phone: '',
        roleNeeded: '',
        numPositions: '1',
        details: '',
      });

    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message || 'Failed to submit request. Please check your connection and try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Form Status Messages */}
          {formMessage && (
            <div 
              className={`p-4 rounded-md text-sm ${ 
                formStatus === 'success' ? 'bg-green-100 text-green-700' : 
                formStatus === 'error' ? 'bg-red-100 text-red-700' : 
                'bg-blue-100 text-blue-700' // for loading or other messages
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
                formStatus === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 