import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

/**
 * FAQ Schema Component
 * 
 * This component adds structured data for FAQs to help pages get
 * rich snippets in search results.
 * 
 * Usage:
 * <FAQSchema items={[
 *   { question: "What is data annotation?", answer: "Data annotation is..." },
 *   { question: "Why is data quality important?", answer: "Data quality..." }
 * ]} />
 */
export default function FAQSchema({ items }: FAQSchemaProps) {
  if (!items || items.length === 0) {
    return null;
  }
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
} 