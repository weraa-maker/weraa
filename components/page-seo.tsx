import React from 'react';
import Head from 'next/head';
import JsonLd from '@/app/(landing-page)/components/JsonLd';

interface PageSeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterHandle?: string;
  keywords?: string[];
  noIndex?: boolean;
  schemaType?: 'website' | 'organization' | 'localBusiness' | 'breadcrumb';
  schemaData?: Record<string, any>;
  children?: React.ReactNode;
}

/**
 * A comprehensive SEO component for individual pages
 * This renders all the necessary metadata, Open Graph tags, Twitter cards, and structured data
 */
export default function PageSeo({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/og-default.jpg',
  ogImageAlt = 'Weraa - Data Annotation Services',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterHandle = '@weraa',
  keywords = [],
  noIndex = false,
  schemaType = 'website',
  schemaData = {},
  children,
}: PageSeoProps) {
  // Format keywords as comma-separated string if provided as array
  const keywordsString = keywords.length > 0 ? keywords.join(', ') : undefined;
  
  // Base URL for canonical and OG/Twitter images
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weraa.vercel.app';
  
  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`)
    : undefined;
  
  // Ensure OG image is absolute
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  return (
    <>
      {/* Add structured data */}
      <JsonLd type={schemaType} data={schemaData} />
      
      {/* Add additional SEO elements */}
      {children}
      
      {/* Best practice example for product pages */}
      {ogType === 'product' && (
        <JsonLd 
          type="website" 
          data={{
            '@type': 'Product',
            name: title,
            description: description,
            image: fullOgImage,
            ...schemaData
          }} 
        />
      )}
      
      {/* For article pages */}
      {ogType === 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: title,
              description: description,
              image: fullOgImage,
              ...schemaData
            })
          }}
        />
      )}
    </>
  );
} 