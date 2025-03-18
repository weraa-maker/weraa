"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define the FAQ item type
type FAQItem = {
  question: string;
  answer: string;
};

// Sample FAQ data
const faqData: FAQItem[] = [
  {
    question: "What data annotation services does Weraa offer?",
    answer: "Weraa offers a comprehensive range of data annotation services including image annotation (bounding boxes, polygons, segmentation), text annotation (classification, entity extraction), video annotation, and content moderation services customized for various AI and machine learning applications."
  },
  {
    question: "How does Weraa ensure high-quality data annotation?",
    answer: "We maintain high-quality standards through a multi-tier review process, specialized workforce training, and quality assurance protocols. Each annotation undergoes multiple reviews before delivery, ensuring accuracy and consistency across datasets."
  },
  {
    question: "What industries does Weraa serve with its data annotation services?",
    answer: "Weraa serves diverse industries including autonomous vehicles, healthcare, retail, agriculture, manufacturing, and content platforms. Our specialized teams understand the unique annotation requirements for each industry and deliver tailored solutions."
  },
  {
    question: "How secure is the data shared with Weraa?",
    answer: "Data security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, secure infrastructure, strict access controls, and compliance with global data protection regulations. All our annotators sign NDAs before accessing any client data."
  },
  {
    question: "What is the typical turnaround time for projects?",
    answer: "Turnaround times vary based on project complexity and volume. We offer flexible scaling options to meet urgent deadlines. For standard projects, we typically deliver annotations within days, and for larger volumes, we establish a continuous delivery schedule to ensure consistent output."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Frequently Asked Questions
        </h2>
        
        {/* FAQ Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
        
        <div 
          className="space-y-4 max-w-3xl mx-auto"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden bg-white dark:bg-gray-700 dark:border-gray-600"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-lg dark:text-white" itemProp="name">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-4 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "pb-4 max-h-96" : "max-h-0"
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-gray-600 dark:text-gray-300" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 