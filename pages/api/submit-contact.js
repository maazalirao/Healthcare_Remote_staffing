import { Resend } from 'resend';

// Hardcoded configuration - avoiding environment variables as requested
const resend = new Resend('re_4asYFm5z_AGcf2vN9dF2mwgpAjsRmQrtx'); // IMPORTANT: Replace with your actual Resend API key
// Define recipient email directly
const toEmails = ['abubakrjaved7@gmail.com'];
// Define the "from" email address - ensure this domain is verified in Resend
const fromEmail = 'Clearview Staffing Group <no-reply@maazali.site>'; // IMPORTANT: Update if your verified domain is different

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // --- Basic Server-Side Validation ---
  const { name, email, message, subject, company } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields (Name, Email, Message)' });
  }

  // Simple email format validation for the sender
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // --- Sending Email with Resend ---
  try {
    const emailSubject = subject ? `New Contact Message from ${name}: ${subject}` : `New Contact Message from ${name}`;
    const formattedMessage = message.replace(/\n/g, '<br>'); // Replace newlines for HTML

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9fafb;
            margin: 0;
            padding: 0;
          }
          
          .email-container {
            max-width: 650px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }
          
          .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          
          .logo {
            margin-bottom: 15px;
            font-size: 28px;
            font-weight: 700;
          }
          
          .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: -0.5px;
          }
          
          .date {
            margin-top: 8px;
            font-size: 15px;
            opacity: 0.9;
          }
          
          .content {
            padding: 30px;
          }
          
          .notification-badge {
            display: inline-block;
            background-color: #ecfdf5;
            color: #047857;
            font-weight: 600;
            font-size: 14px;
            padding: 6px 12px;
            border-radius: 100px;
            margin-bottom: 20px;
          }
          
          .section {
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          
          .section-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }
          
          .section-icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            color: #1e40af;
          }
          
          .section-title {
            font-size: 18px;
            font-weight: 700;
            color: #1e40af;
          }
          
          .sender-info {
            background-color: #f0f9ff;
            border-radius: 6px;
            padding: 16px;
            margin-bottom: 20px;
            border-left: 4px solid #0ea5e9;
          }
          
          .sender-name {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 5px 0;
            color: #0c4a6e;
          }
          
          .sender-email {
            font-size: 15px;
            margin: 0;
            color: #0369a1;
          }
          
          .sender-email a {
            color: #0369a1;
            text-decoration: none;
          }
          
          .message-container {
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 20px;
          }
          
          .message-title {
            font-size: 16px;
            font-weight: 600;
            color: #4b5563;
            margin-top: 0;
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid #f3f4f6;
          }
          
          .message-content {
            white-space: pre-line;
            color: #1f2937;
            font-size: 15px;
            line-height: 1.7;
          }
          
          .button {
            display: inline-block;
            background-color: #1e40af;
            color: white;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 8px;
            text-align: center;
            transition: background-color 0.2s;
          }
          
          .button:hover {
            background-color: #1e3a8a;
          }
          
          .note {
            background-color: #f3f4f6;
            border-radius: 6px;
            padding: 16px;
            font-size: 14px;
            color: #4b5563;
            margin-top: 15px;
          }
          
          .footer {
            background-color: #f9fafb;
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          
          @media only screen and (max-width: 600px) {
            .header {
              padding: 20px;
            }
            
            .content {
              padding: 20px;
            }
            
            .button {
              display: block;
              text-align: center;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="logo">CLEARVIEW STAFFING GROUP</div>
            <h1>New Contact Message</h1>
            <div class="date">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
          </div>
          
          <div class="content">
            <div class="notification-badge">New Message • ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div class="section-title">Sender Information</div>
              </div>
              
              <div class="sender-info">
                <p class="sender-name">${name}</p>
                <p class="sender-email"><a href="mailto:${email}">${email}</a></p>
                ${company ? `<p class="text-gray-700 mt-1">Company: ${company}</p>` : ''}
              </div>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <div class="section-title">Message</div>
              </div>
              
              <div class="message-container">
                <div class="message-title">${subject ? `Subject: ${subject}` : 'Original Message'}</div>
                <div class="message-content">${formattedMessage}</div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div class="section-title">Next Steps</div>
              </div>
              
              <p style="margin-top: 0;">Please reply to this message within <strong>48 hours</strong> to provide the information or assistance the user has requested.</p>
              
              <a href="mailto:${email}" class="button">Reply to Sender</a>
              
              <div class="note">
                <strong>Note:</strong> This message was submitted through the contact form on your website. The sender might be seeking information about your staffing services.
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 8px;">This is an automated notification sent by the Clearview Staffing Group system.</p>
            <p style="margin: 0;">© ${new Date().getFullYear()} Clearview Staffing Group. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmails,
      subject: emailSubject,
      html: emailHtml,
      reply_to: email // Set reply-to to the sender's email
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