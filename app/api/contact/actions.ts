'use server';

import { z } from 'zod';

// Contact form schema
const contactFormSchema = z.object({
  first_name: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  last_name: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone_number: z.string().optional(),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  company_size: z.enum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormActionResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(formData: unknown): Promise<ContactFormActionResult> {
  // Validate the form data
  const result = contactFormSchema.safeParse(formData);
  
  if (!result.success) {
    // Format errors into a simpler structure
    const formattedErrors: Record<string, string[]> = {};
    const zodErrors = result.error.format();
    
    // Extract field errors from Zod's error format
    for (const [field, error] of Object.entries(zodErrors)) {
      if (field !== '_errors' && typeof error === 'object' && '_errors' in error) {
        if (error._errors.length > 0) {
          formattedErrors[field] = error._errors;
        }
      }
    }
    
    return {
      success: false,
      message: 'Validation failed',
      errors: formattedErrors,
    };
  }
  
  const data = result.data;
  
  try {
    // Log the form data in development
    console.log('Contact form submission received:');
    console.log('Name:', `${data.first_name} ${data.last_name}`);
    console.log('Email:', data.email);
    console.log('Phone:', data.phone_number || 'Not provided');
    console.log('Company:', data.company);
    console.log('Company Size:', data.company_size);
    console.log('Message:', data.message);
    
    // Here you would typically:
    // 1. Store the data in a database
    // 2. Send an email notification
    // 3. Possibly trigger other workflows
    
    // For now, we'll just simulate a successful submission
    
    return {
      success: true,
      message: 'Form submission received successfully',
    };
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      success: false,
      message: 'An error occurred while processing your submission',
    };
  }
} 