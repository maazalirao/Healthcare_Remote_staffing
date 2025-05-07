import { Resend } from 'resend';

// Hardcoded configuration - avoiding environment variables as requested
const resend = new Resend('re_4asYFm5z_AGcf2vN9dF2mwgpAjsRmQrtx'); // IMPORTANT: Replace with your actual Resend API key
// Define recipient email directly - using the same value as in submit-contact.js
const toEmails = ['maazaltaf1027@gmail.com'];
// Define the "from" email address - ensure this domain is verified in Resend
const fromEmail = 'Clearview Staffing Group <no-reply@maazali.site>';

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
    industry,
    serviceCategory,
    roleNeeded,
    numPositions,
    workSchedule
  } = req.body;

  if (!orgName || !contactName || !email || !phone || !industry || !serviceCategory || !roleNeeded) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Simple email format validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // --- Sending Email with Resend --- 
  try {
    const subject = `New Staffing Request: ${roleNeeded} for ${orgName}`;
    
    // Create a more professional and well-structured email template with enhanced design
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Staffing Request</title>
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
          
          .priority-badge {
            display: inline-block;
            background-color: #ffedd5;
            color: #9a3412;
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
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          
          .field {
            margin-bottom: 12px;
          }
          
          .label {
            font-weight: 600;
            font-size: 14px;
            color: #6b7280;
            display: block;
            margin-bottom: 4px;
          }
          
          .value {
            font-size: 15px;
            color: #111827;
            font-weight: 500;
          }
          
          .highlight-value {
            background-color: #f0f9ff;
            border-left: 3px solid #0ea5e9;
            padding: 8px 12px;
            border-radius: 0 4px 4px 0;
            font-weight: 600;
            color: #0c4a6e;
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
          
          .summary-box {
            background-color: #eef2ff;
            border-radius: 6px;
            padding: 16px;
            margin-bottom: 16px;
          }
          
          .summary-title {
            font-weight: 600;
            font-size: 15px;
            color: #4338ca;
            margin-bottom: 8px;
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
            
            .info-grid {
              grid-template-columns: 1fr;
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
            <h1>New Staffing Request</h1>
            <div class="date">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
          </div>
          
          <div class="content">
            <div class="priority-badge">New Request • Priority</div>
            
            <div class="summary-box">
              <div class="summary-title">Request Summary</div>
              <p style="margin: 0;">A request for <strong>${numPositions || '1'} ${roleNeeded}</strong> position(s) has been submitted by <strong>${contactName}</strong> from <strong>${orgName}</strong>.</p>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div class="section-title">Company Information</div>
              </div>
              
              <div class="info-grid">
                <div class="field">
                  <div class="label">Organization</div>
                  <div class="value highlight-value">${orgName}</div>
                </div>
                
                <div class="field">
                  <div class="label">Industry</div>
                  <div class="value">${industry}</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div class="section-title">Contact Information</div>
              </div>
              
              <div class="info-grid">
                <div class="field">
                  <div class="label">Contact Name</div>
                  <div class="value">${contactName}</div>
                </div>
                
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field" style="grid-column: span 2;">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div class="section-title">Position Details</div>
              </div>
              
              <div class="info-grid">
                <div class="field">
                  <div class="label">Service Category</div>
                  <div class="value">${serviceCategory}</div>
                </div>
                
                <div class="field">
                  <div class="label">Role Needed</div>
                  <div class="value highlight-value">${roleNeeded}</div>
                </div>
                
                <div class="field">
                  <div class="label">Number of Positions</div>
                  <div class="value">${numPositions || '1'}</div>
                </div>
                
                <div class="field">
                  <div class="label">Work Schedule</div>
                  <div class="value">${
                    workSchedule === 'full-time' ? 'Full-time' : 
                    workSchedule === 'part-time' ? 'Part-time' : 
                    workSchedule === 'contract' ? 'Contract' : 
                    workSchedule === 'project-based' ? 'Project-based' : 
                    workSchedule || 'Full-time'
                  }</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div class="section-title">Next Steps</div>
              </div>
              
              <p style="margin-top: 0;">This new request requires your attention. Please follow up with the client within <strong>one business day</strong>.</p>
              
              <a href="mailto:${email}" class="button">Contact Client</a>
              
              <div class="note">
                <strong>Note:</strong> When contacting the client, reference their request for ${numPositions || '1'} ${roleNeeded} position(s) to provide a personalized experience.
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
      subject: subject,
      html: emailHtml,
      reply_to: email // Set reply-to to the sender's email
    });

    if (error) {
      console.error('Resend detailed sending error (Intake):', JSON.stringify(error, null, 2));
      // Provide a more user-friendly message 
      let errorMessage = 'Failed to send staffing request.';
      if (error.message && error.message.includes('domain is not verified')) {
          errorMessage = 'Email sending domain is not verified. Please contact support.';
      } else if (error.message && error.message.includes('Invalid API Key')) {
           errorMessage = 'Email API configuration error. Please contact support.';
      } 
      return res.status(500).json({ message: errorMessage, details: error.message });
    }

    console.log('Intake form message sent via Resend from:', email, 'ID:', data?.id);
    return res.status(200).json({ message: 'Your staffing request has been submitted successfully! We will contact you shortly to discuss your needs.' });

  } catch (error) {
    // Catch any other unexpected errors
    console.error('Error processing intake form:', error);
    return res.status(500).json({ message: 'An unexpected error occurred processing your request.' });
  }
} 