import { Resend } from 'resend';

// Instantiate Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
// Debug line to check if the API key is being loaded
console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY, "KEY STARTS WITH:", process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 5) : "N/A");
// Define the sender email from environment variables 
const fromEmail = process.env.EMAIL_FROM; // e.g., 'noreply@yourverifieddomain.com'
// Define the recipient email from environment variables
const toEmail = process.env.EMAIL_TO; // e.g., 'maazaltaf1027@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // --- Basic Server-Side Validation --- 
  const { 
    orgName,
    contactName,
    email,
    phone,
    roleNeeded,
    numPositions,
    details
   } = req.body;

  if (!orgName || !contactName || !email || !phone || !roleNeeded || !numPositions) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Simple email format validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid submitter email format' });
  }
  
  if (!process.env.RESEND_API_KEY) {
      console.error('Missing required environment variable for email sending: RESEND_API_KEY');
      return res.status(500).json({ message: 'Server configuration error.' });
  }

  // --- Sending Email with Resend --- 
  try {
    const subject = `[Clearview Staffing] New Staffing Request from ${orgName}`;
    const emailHtml = `<p>New intake request received:</p>
             <ul>
               <li><strong>Organization:</strong> ${orgName}</li>
               <li><strong>Contact Name:</strong> ${contactName}</li>
               <li><strong>Submitter Email:</strong> ${email}</li>
               <li><strong>Phone:</strong> ${phone}</li>
               <li><strong>Role Needed:</strong> ${roleNeeded}</li>
               <li><strong>Number of Positions:</strong> ${numPositions}</li>
               <li><strong>Details:</strong> ${details || 'N/A'}</li>
             </ul>`;

    const { data, error } = await resend.emails.send({
      from: 'Clearview Healthcare Staffing <contact@maazali.site>', // Changed from onboarding@resend.dev to domain
      to: 'maazaltaf1027@gmail.com',
      subject: subject,
      html: emailHtml,
      reply_to: email // Set reply-to to the user's email
    });

    if (error) {
      console.error('Resend detailed sending error (Intake):', JSON.stringify(error, null, 2));
      // Provide a more user-friendly message 
      let errorMessage = 'Failed to send email notification.';
      if (error.message && error.message.includes('domain is not verified')) {
          errorMessage = 'Email sending domain is not verified. Please contact support.';
      } else if (error.message && error.message.includes('Invalid API Key')) {
           errorMessage = 'Email API configuration error. Please contact support.';
      } 
      return res.status(500).json({ message: errorMessage, details: error.message });
    }

    console.log('Intake request email sent via Resend for:', orgName, 'ID:', data?.id);
    return res.status(200).json({ message: 'Request submitted successfully! We will be in touch soon.' }); // Keep success message concise

  } catch (error) {
    // Catch any other unexpected errors
    console.error('Error processing intake request (Resend):', error);
    return res.status(500).json({ message: 'An unexpected error occurred processing your request.' });
  }
} 