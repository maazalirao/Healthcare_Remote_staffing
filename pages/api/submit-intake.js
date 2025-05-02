import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { 
    orgName,
    contactName,
    email,
    phone,
    roleNeeded,
    numPositions,
    details
   } = req.body;

  // Basic Validation
  if (!orgName || !contactName || !email || !phone || !roleNeeded || !numPositions) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // 1. Skip Database Saving
    /* 
    // Removed database saving logic:
    const intakeRequest = await prisma.intakeRequest.create({
      data: {
        orgName,
        contactName,
        email,
        phone,
        roleNeeded,
        numPositions: parseInt(numPositions, 10), 
        details: details || null, 
      },
    });
    */

    // 2. Send Email using Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT, 10),
      secure: parseInt(process.env.EMAIL_SERVER_PORT, 10) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      // Adding timeout options for potentially slow email servers
      connectionTimeout: 10000, // 10 seconds
      socketTimeout: 10000, // 10 seconds
    });

    const mailOptions = {
      from: `"Clearview Intake Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO, 
      subject: `New Staffing Request from ${orgName}`,
      text: `New intake request received:\n\nOrganization: ${orgName}\nContact Name: ${contactName}\nEmail: ${email}\nPhone: ${phone}\nRole Needed: ${roleNeeded}\nNumber of Positions: ${numPositions}\nDetails: ${details || 'N/A'}`,
      html: `<p>New intake request received:</p>
             <ul>
               <li><strong>Organization:</strong> ${orgName}</li>
               <li><strong>Contact Name:</strong> ${contactName}</li>
               <li><strong>Email:</strong> ${email}</li>
               <li><strong>Phone:</strong> ${phone}</li>
               <li><strong>Role Needed:</strong> ${roleNeeded}</li>
               <li><strong>Number of Positions:</strong> ${numPositions}</li>
               <li><strong>Details:</strong> ${details || 'N/A'}</li>
             </ul>`,
    };

    await transporter.sendMail(mailOptions);

    console.log('Intake request email sent for:', orgName);
    // Modified success message as no ID is generated
    return res.status(200).json({ message: 'Request submitted successfully! We will be in touch soon.' });

  } catch (error) {
    console.error('Error processing intake request (Email Only):', error);
    // Check for specific Nodemailer errors if needed
    if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
        return res.status(500).json({ message: 'Failed to connect to email server. Please try again later.' });
    } else if (error.responseCode === 535) { // Common code for Authentication Error
        return res.status(500).json({ message: 'Email server authentication failed. Check credentials.' });
    } else {
        return res.status(500).json({ message: 'Failed to send email notification. Please try again later.' });
    }
  }
  // Removed prisma.$disconnect() as Prisma is not used
  /*
  finally {
    await prisma.$disconnect();
  }
  */
} 