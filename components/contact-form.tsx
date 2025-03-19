'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, useContactForm, type ContactFormValues } from '@/lib/api-service';

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate, isPending } = useContactForm();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      company: '',
      company_size: '1-10',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* First Name */}
        <div className="space-y-2">
          <label htmlFor="first_name" className="block text-sm font-medium">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('first_name')}
            id="first_name"
            className={`w-full rounded-md border ${
              errors.first_name ? 'border-red-500' : 'border-gray-300'
            } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
          />
          {errors.first_name && (
            <p className="text-xs text-red-500">{errors.first_name.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label htmlFor="last_name" className="block text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('last_name')}
            id="last_name"
            className={`w-full rounded-md border ${
              errors.last_name ? 'border-red-500' : 'border-gray-300'
            } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
          />
          {errors.last_name && (
            <p className="text-xs text-red-500">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          className={`w-full rounded-md border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            {...register('company')}
            id="company"
            className={`w-full rounded-md border ${
              errors.company ? 'border-red-500' : 'border-gray-300'
            } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
          />
          {errors.company && (
            <p className="text-xs text-red-500">{errors.company.message}</p>
          )}
        </div>

        {/* Company Size */}
        <div className="space-y-2">
          <label htmlFor="company_size" className="block text-sm font-medium">
            Company Size <span className="text-red-500">*</span>
          </label>
          <select
            {...register('company_size')}
            id="company_size"
            className={`w-full rounded-md border ${
              errors.company_size ? 'border-red-500' : 'border-gray-300'
            } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
          >
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501-1000">501-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
          {errors.company_size && (
            <p className="text-xs text-red-500">{errors.company_size.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`w-full rounded-md border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600`}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
      
      {isSuccess && (
        <p className="text-sm text-green-600">
          Thank you for contacting us! We&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
} 