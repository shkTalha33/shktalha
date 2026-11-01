import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'shykhtalha33@gmail.com';
    const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const emailPort = Number(process.env.EMAIL_PORT) || 465;
    const emailSecure = process.env.EMAIL_SECURE !== 'false';

    // If credentials are configured and not placeholder, dispatch real email
    if (emailUser && emailPass && emailPass !== 'your_email_app_password_here') {
      const transporter = nodemailer.createTransport({
        host: emailHost,
        port: emailPort,
        secure: emailSecure,
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${emailUser}>`,
        replyTo: email,
        to: receiver,
        subject: `[Portfolio Contact] ${subject || 'New Message from Portfolio'}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px;">
            <h2 style="color: #0d6efd; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <div style="background: #f8f9fa; border-left: 4px solid #0d6efd; padding: 15px; margin-top: 15px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin-top: 25px; border: 0; border-top: 1px solid #eee;" />
            <small style="color: #666;">Sent from your Next.js Portfolio Contact Form.</small>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    } else {
      // Graceful fallback for local development before credentials are provided
      console.log('--- [Portfolio Contact Received] ---');
      console.log(`From: ${name} (${email})`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('Notice: Update EMAIL_PASS in .env.local to send real SMTP emails.');

      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been received successfully.',
      });
    }
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to deliver message. Please try again later.' },
      { status: 500 }
    );
  }
}

