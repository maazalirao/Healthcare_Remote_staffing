// IntakeForm component for client intake
import { useState } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function IntakeForm() {
  // Simplified industry options
  const industries = [
    { id: 'technology', name: 'Technology & IT' },
    { id: 'healthcare', name: 'Healthcare & Medical' },
    { id: 'finance', name: 'Finance & Banking' },
    { id: 'education', name: 'Education & E-Learning' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'professional', name: 'Professional Services' },
    { id: 'creative', name: 'Creative & Marketing' },
    { id: 'legal', name: 'Legal & Compliance' },
    { id: 'engineering', name: 'Engineering & Architecture' },
    { id: 'data', name: 'Data & Analytics' },
    { id: 'hr', name: 'HR & Recruitment' },
    { id: 'other', name: 'Other' },
  ];

  // Simplified service categories
  const serviceCategories = [
    {
      category: 'Administrative & Support',
      roles: [
        'Virtual Assistant',
        'Executive Assistant',
        'Data Entry Specialist',
        'Customer Service Representative',
        'Office Management',
        'Other Administrative Role',
      ]
    },
    {
      category: 'Technical & IT',
      roles: [
        'Software Developer',
        'Web Developer',
        'IT Support',
        'DevOps Engineer',
        'Cybersecurity Specialist',
        'Data Scientist',
        'Other Technical Role',
      ]
    },
    {
      category: 'Business & Operations',
      roles: [
        'Project Manager',
        'Business Analyst',
        'Operations Specialist',
        'Remote Team Coordinator',
        'Process Improvement Specialist',
        'Other Business Role',
      ]
    },
    {
      category: 'Creative & Marketing',
      roles: [
        'Graphic Designer',
        'Content Writer',
        'Digital Marketing Specialist',
        'Social Media Manager',
        'Video Editor',
        'Other Creative Role',
      ]
    },
    {
      category: 'Healthcare & Medical',
      roles: [
        'Medical Coder',
        'Healthcare Administrator',
        'Telehealth Coordinator',
        'Medical Records Specialist',
        'Other Healthcare Role',
      ]
    },
    {
      category: 'Legal & Compliance',
      roles: [
        'Legal Assistant',
        'Paralegal',
        'Compliance Officer',
        'Contract Reviewer',
        'Other Legal Role',
      ]
    },
    {
      category: 'Engineering & Architecture',
      roles: [
        'Engineer',
        'Architect',
        'CAD Specialist',
        'Technical Drafter',
        'Other Engineering Role',
      ]
    },
    {
      category: 'Data & Analytics',
      roles: [
        'Data Analyst',
        'Business Intelligence Specialist',
        'Data Engineer',
        'Reporting Specialist',
        'Other Data Role',
      ]
    },
    {
      category: 'HR & Recruitment',
      roles: [
        'Recruiter',
        'HR Specialist',
        'Talent Acquisition',
        'Other HR Role',
      ]
    },
    {
      category: 'Other',
      roles: ['Custom Role']
    }
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company & Contact
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    
    // Position Details
    industry: '',
    serviceCategory: '',
    roleNeeded: '',
    numPositions: '1',
    workSchedule: 'full-time',
  });

  // Form status states
  const [formStatus, setFormStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // For role selection based on category
  const [availableRoles, setAvailableRoles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update the form data
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // If service category changes, update available roles
    if (name === 'serviceCategory') {
      const category = serviceCategories.find(cat => cat.category === value);
      setAvailableRoles(category ? category.roles : []);
      // Reset role selection when category changes
      setFormData({
        ...formData,
        [name]: value,
        roleNeeded: '',
      });
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Form validation for each step
  const validateStep = (step) => {
    switch(step) {
      case 1:
        return formData.orgName && formData.contactName && formData.email && formData.phone;
      case 2:
        return formData.industry && formData.serviceCategory && formData.roleNeeded;
      default:
        return true;
    }
  };

  // Completely separate submission function from step navigation
  const submitForm = async (e) => {
    if (e) e.preventDefault();
    
    setIsSubmitting(true);
    setFormStatus('loading');
    setFormMessage('Submitting your request...');

    const apiUrl = "/api/submit-intake";

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Request failed with status: ${response.status}`);
      }
      
      setFormStatus('success');
      const successText = `${result.message} You can also schedule a consultation directly here: `;
      const calendlyLink = "https://calendly.com/david-clearviewstaffinggrp/30min";
      setFormMessage(
        <>
          {successText}
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            Book a Consultation
          </a>
        </>
      );

      // Reset form and go to thank you step
      setCurrentStep(4);

    } catch (error) {
      setFormStatus('error');
      setFormMessage(error.message || 'Failed to submit request. Please check your connection or try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render the progress bar - enhanced for mobile
  const renderProgressBar = () => {
    return (
      <div className="mb-8">
        {/* Desktop version of progress bar */}
        <div className="hidden md:flex items-center justify-between max-w-md mx-auto">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div 
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step 
                    ? 'border-blue-600 bg-blue-600 text-white' 
                    : 'border-gray-300 text-gray-500'
                } transition-all duration-300 shadow-sm`}
              >
                {currentStep > step ? (
                  <CheckCircleIcon className="w-7 h-7" />
                ) : (
                  <span className="text-lg">{step}</span>
                )}
              </div>
              <span 
                className={`mt-2 text-sm font-medium ${
                  currentStep >= step ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {step === 1 ? 'Contact' : 
                 step === 2 ? 'Position' : 'Review'}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile version of progress bar */}
        <div className="md:hidden flex items-center justify-center">
          <div className="flex space-x-4">
            {[1, 2, 3].map((step) => (
              <div 
                key={step}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm ${
                  currentStep > step 
                    ? 'bg-blue-600 text-white shadow-md'
                    : currentStep === step
                    ? 'bg-blue-100 border-2 border-blue-600 text-blue-700 font-medium shadow-md'
                    : 'bg-gray-100 text-gray-600 border border-gray-300'
                }`}
              >
                {currentStep > step ? <CheckCircleIcon className="w-5 h-5" /> : step}
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress line */}
        <div className="relative mt-5 max-w-md mx-auto">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="h-1 w-full bg-gray-200 rounded-full"></div>
          </div>
          <div className="relative flex justify-start">
            <div 
              className="h-1 bg-blue-600 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  // Common input classes - with fixed text color
  const inputClasses = "block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 transition duration-150 ease-in-out hover:border-gray-400";
  const selectClasses = "block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 transition duration-150 ease-in-out hover:border-gray-400";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  
  // Display different form steps based on currentStep
  const renderFormStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="orgName" className={labelClasses}>
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="orgName"
                    id="orgName"
                    value={formData.orgName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactName" className={labelClasses}>
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    id="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="email" className={labelClasses}>
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className={labelClasses}>
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Position Details</h2>
            <div className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="industry" className={labelClasses}>
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={selectClasses}
                  required
                >
                  <option value="">Select an industry</option>
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.name}>
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="serviceCategory" className={labelClasses}>
                  Service Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceCategory"
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  className={selectClasses}
                  required
                >
                  <option value="">Select a category</option>
                  {serviceCategories.map((category) => (
                    <option key={category.category} value={category.category}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="roleNeeded" className={labelClasses}>
                  Role Needed <span className="text-red-500">*</span>
                </label>
                <select
                  id="roleNeeded"
                  name="roleNeeded"
                  value={formData.roleNeeded}
                  onChange={handleChange}
                  className={selectClasses}
                  required
                  disabled={!formData.serviceCategory}
                >
                  <option value="">Select a role</option>
                  {availableRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                {!formData.serviceCategory && (
                  <p className="mt-1 text-sm text-gray-500">
                    Please select a service category first
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="numPositions" className={labelClasses}>
                    Number of Positions <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="numPositions"
                    id="numPositions"
                    value={formData.numPositions}
                    onChange={handleChange}
                    min="1"
                    className={inputClasses}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="workSchedule" className={labelClasses}>
                    Work Schedule <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="workSchedule"
                    name="workSchedule"
                    value={formData.workSchedule}
                    onChange={handleChange}
                    className={selectClasses}
                    required
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="project-based">Project-based</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Request</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Contact Information</h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Company</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.orgName}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.contactName}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.phone}</dd>
                  </div>
                </dl>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Position Details</h3>
                <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Industry</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Service Category</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.serviceCategory}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Role</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.roleNeeded}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Number of Positions</dt>
                    <dd className="text-sm font-medium text-gray-900">{formData.numPositions}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Work Schedule</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {formData.workSchedule === 'full-time' ? 'Full-time' : 
                       formData.workSchedule === 'part-time' ? 'Part-time' : 
                       formData.workSchedule === 'contract' ? 'Contract' : 'Project-based'}
                    </dd>
                  </div>
                </dl>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    <span className="font-medium">Ready to submit?</span> Our team will review your request and contact you within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-10 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
              <CheckCircleIcon className="h-14 w-14 text-green-600" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              We&apos;ve received your staffing request and will contact you within 1 business day.
            </p>
            {formMessage && (
              <div className="p-4 rounded-md bg-green-50 text-green-700 mb-8 max-w-md mx-auto border border-green-100">
                {formMessage}
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors duration-150"
              >
                Return to Homepage
              </Link>
              <Link 
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-blue-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-sm transition-colors duration-150"
              >
                View Our Services
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Render navigation buttons - improved for mobile
  const renderNavButtons = () => {
    if (currentStep === 4) return null; // No buttons on thank you step
    
    return (
      <div className="flex justify-between mt-8">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            Back
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!validateStep(currentStep)}
            className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              validateStep(currentStep) ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Next
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={submitForm}
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        )}
      </div>
    );
  };

  // Step indicator for mobile
  const renderStepIndicator = () => {
    if (currentStep === 4) return null;
    
    return (
      <div className="text-sm text-gray-500 text-center mb-4 md:hidden">
        Step {currentStep} of 3
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <div className="px-6 py-6 sm:px-8 sm:py-8">
        {renderStepIndicator()}
        {currentStep < 4 && renderProgressBar()}
        
        {/* Removed onSubmit from form to prevent auto submission */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {renderFormStep()}
          
          {/* Form Status Messages */}
          {formStatus === 'error' && formMessage && (
            <div
              className="p-4 rounded-md bg-red-50 text-red-700 flex items-start border border-red-100"
              role="alert"
            >
              <ExclamationCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{formMessage}</span>
            </div>
          )}
          
          {renderNavButtons()}
        </div>
        
        {/* Form Security Notice */}
        {currentStep === 3 && (
          <div className="mt-8 pt-4 border-t border-gray-200 max-w-3xl mx-auto">
            <p className="text-xs text-gray-500 text-center">
              Your information is secure and will only be used to process your staffing request.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 