import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { z } from 'zod';
import { submitContactForm } from '@/app/api/contact/actions';

// Contact form schema
export const contactFormSchema = z.object({
  first_name: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  last_name: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone_number: z.string().optional(),
  company: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  company_size: z.enum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Contact form submission mutation hook that uses server actions
export function useContactForm() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message || 'Thank you! Your message has been sent successfully.');
        queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
      } else {
        toast.error(data.message || 'There was a problem with your submission.');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Unable to submit the form. Please try again later.');
    },
  });
}

// Base API client function for RESTful API calls
async function apiClient<T>(
  endpoint: string,
  { data, method = 'GET' }: { data?: unknown; method?: string } = {}
): Promise<T> {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(`/api${endpoint}`, config);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Something went wrong');
  }
  
  return response.json();
}

// Blog post schema
export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  publishedAt: z.string().datetime(),
  author: z.object({
    name: z.string(),
    avatar: z.string().optional(),
  }),
  tags: z.array(z.string()).optional(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

// Fetch blog posts
export function useBlogPosts() {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => apiClient<BlogPost[]>('/blog'),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Fetch a single blog post
export function useBlogPost(id: string) {
  return useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => apiClient<BlogPost>(`/blog/${id}`),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
} 