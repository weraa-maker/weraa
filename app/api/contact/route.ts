import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { first_name, last_name, email, phone_number, country, job_title, industry, service_required, info } = await req.json();

    try {
      // Create a Nodemailer transport object (configure with your email provider)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'weraa.tech@gmail.com',
          pass: 'buku vkrr hwnh ozri',
        },
      });

      const mailOptions = {
        from: email,
        to: 'sales@weraa.org',
        subject: 'Contact Form Submission',
        html: `
          <h2>Contact Form Submission</h2>
          <p><strong>First Name:</strong> ${first_name}</p>
          <p><strong>Last Name:</strong> ${last_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone_number}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Job Title:</strong> ${job_title}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          <p><strong>Service Required:</strong> ${service_required}</p>
          ${info ? `<p><strong>Info:</strong> ${info}</p>` : ''}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: 'Email has been sent' });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error sending email' });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}
