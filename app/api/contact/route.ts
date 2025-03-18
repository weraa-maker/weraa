import { NextResponse } from 'next/server';

// Define the type for contact form data
interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  company_size: string;
  info: string;
}

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      // Parse the request body
      const formData: ContactFormData = await req.json();
      
      // Log the form data instead of sending an email
      console.log('Contact form submission received:');
      console.log('Name:', `${formData.first_name} ${formData.last_name}`);
      console.log('Email:', formData.email);
      console.log('Phone:', formData.phone_number);
      console.log('Country:', formData.country);
      console.log('Company Size:', formData.company_size);
      console.log('Additional Info:', formData.info);
      
      // In a real application, you would send this data via email
      // Since we can't use nodemailer, we're just logging it
      
      // Return a success response
      return NextResponse.json({ 
        success: true,
        message: 'Form submission received successfully' 
      });
      
    } catch (error) {
      console.error('Error processing form submission:', error);
      return NextResponse.json(
        { 
          success: false,
          message: 'Error processing form submission' 
        },
        { status: 500 }
      );
    }
  } else {
    // Method not allowed
    return NextResponse.json(
      { 
        success: false,
        message: 'Method not allowed' 
      },
      { status: 405 }
    );
  }
}







