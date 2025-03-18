'use client';

import { useEffect } from 'react';

// Component to add JSON-LD structured data to the page
export default function JsonLd() {
  useEffect(() => {
    // Organization structured data
    const organizationStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Weraa',
      url: 'https://www.weraa.com',
      logo: 'https://www.weraa.com/images/bird-logo.png',
      sameAs: [
        'https://www.facebook.com/weraa',
        'https://www.twitter.com/weraa',
        'https://www.linkedin.com/company/weraa',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-123-456-7890',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
      },
      description: 'Weraa provides expert data annotation and labeling services for AI, ML, and content moderation.',
    };

    // Service structured data
    const serviceStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Data Annotation Services',
      provider: {
        '@type': 'Organization',
        name: 'Weraa',
      },
      description: 'Professional data annotation services for AI and machine learning, including image labeling, text annotation, and content moderation.',
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Data Annotation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Image Annotation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Text Annotation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Content Moderation',
            },
          },
        ],
      },
    };

    // Add the script tags with the structured data
    const organizationScript = document.createElement('script');
    organizationScript.type = 'application/ld+json';
    organizationScript.text = JSON.stringify(organizationStructuredData);
    document.head.appendChild(organizationScript);

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify(serviceStructuredData);
    document.head.appendChild(serviceScript);

    // Cleanup
    return () => {
      document.head.removeChild(organizationScript);
      document.head.removeChild(serviceScript);
    };
  }, []);

  return null;
} 