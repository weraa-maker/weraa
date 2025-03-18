'use client';

import React from 'react';

interface JsonLdProps {
  type?: 'website' | 'organization' | 'localBusiness' | 'breadcrumb';
  data?: Record<string, any>;
}

export default function JsonLd({ type = 'website', data = {} }: JsonLdProps) {
  let jsonData = {};

  // Base organization data
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Weraa',
    url: 'https://weraa.vercel.app',
    logo: 'https://weraa.vercel.app/images/logo.png',
    sameAs: [
      'https://twitter.com/weraa',
      'https://www.linkedin.com/company/weraa',
      'https://www.facebook.com/weraa',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890', // Replace with actual phone
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    description: 'Weraa provides expert data annotation and labeling services for AI, ML, and content moderation.',
  };

  // Different structured data based on type
  switch (type) {
    case 'organization':
      jsonData = {
        ...organizationData,
        ...data,
      };
      break;

    case 'localBusiness':
      jsonData = {
        ...organizationData,
        '@type': 'LocalBusiness',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Main Street', // Replace with actual address
          addressLocality: 'City', 
          addressRegion: 'State',
          postalCode: '12345',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.7128, // Replace with actual coordinates
          longitude: -74.0060,
        },
        openingHours: 'Mo-Fr 09:00-18:00',
        ...data,
      };
      break;

    case 'breadcrumb':
      jsonData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.itemListElement || [],
      };
      break;

    case 'website':
    default:
      jsonData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Weraa',
        url: 'https://weraa.vercel.app',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://weraa.vercel.app/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        ...data,
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
    />
  );
} 