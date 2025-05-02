import { Resend } from 'resend';

// Instantiate Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
// Define the sender email from environment variables 
const fromEmail = process.env.EMAIL_FROM;
// Define the recipient email from environment variables
const toEmail = process.env.EMAIL_TO;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // --- Basic Server-Side Validation --- 
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields (Name, Email, Message)' });
  }

  // Simple email format validation for the sender
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  if (!process.env.RESEND_API_KEY) {
      console.error('Missing required environment variable for email sending: RESEND_API_KEY');
      return res.status(500).json({ message: 'Server configuration error.' });
  }
  
  // --- Sending Email with Resend --- 
  try {
    const subject = `[Clearview Staffing] New Contact Message from ${name}`;
    const emailHtml = `<p>New contact form message received:</p>
             <ul>
               <li><strong>Name:</strong> ${name}</li>
               <li><strong>Email:</strong> ${email}</li>
             </ul>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`; // Replace newlines for HTML

    const { data, error } = await resend.emails.send({
      from: 'Clearview Healthcare Staffing <contact@maazali.site>', // Changed from onboarding@resend.dev to domain
      to: 'maazaltaf1027@gmail.com', // Single string instead of array for simplicity
      subject: subject,
      html: emailHtml,
      reply_to: email // Set reply-to to the user's email
    });

    if (error) {
      console.error('Resend detailed sending error (Contact):', JSON.stringify(error, null, 2));
       // Provide a more user-friendly message 
      let errorMessage = 'Failed to send message.';
      if (error.message && error.message.includes('domain is not verified')) {
          errorMessage = 'Email sending domain is not verified. Please contact support.';
      } else if (error.message && error.message.includes('Invalid API Key')) {
           errorMessage = 'Email API configuration error. Please contact support.';
      } 
      return res.status(500).json({ message: errorMessage, details: error.message });
    }

    console.log('Contact form message sent via Resend from:', email, 'ID:', data?.id);
    return res.status(200).json({ message: 'Message sent successfully! We will get back to you soon.' });

  } catch (error) {
    // Catch any other unexpected errors
    console.error('Error processing contact message (Resend):', error);
    return res.status(500).json({ message: 'An unexpected error occurred processing your message.' });
  }
} 