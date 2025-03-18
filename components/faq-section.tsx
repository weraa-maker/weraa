"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FAQSchema from './faq-schema';

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
  {
    question: "Can you handle specialized domain-specific annotation tasks?",
    answer: "Yes, we specialize in domain-specific annotation tasks across various industries. Our team includes subject matter experts in healthcare, automotive, agriculture, retail, and more who understand the unique terminology and requirements of each field."
  },
  {
    question: "Do you provide API integration for annotation services?",
    answer: "Yes, we offer API integration options that allow seamless connection between your systems and our annotation platform. This enables automated data transfer, real-time progress tracking, and direct integration with your ML pipelines."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our data annotation services
          </p>
        </div>
        
        {/* Add the FAQ schema for structured data */}
        <FAQSchema items={faqData} />
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-700 dark:border-gray-600 transition-all duration-200 hover:shadow-md"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-lg text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary dark:text-primary-400" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-300" aria-hidden="true" />
                  )}
                </span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "pb-5 max-h-96" : "max-h-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <p className="text-gray-600 dark:text-gray-300">
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