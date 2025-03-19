import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import EighthSection from "./EighthSection/page";
import FifthSection from "./FifthSection/page";
import FirstSection from "./components/FirstSection";
import FourthSection from "./FourthSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "./SecondSection/page";
import SeventhSection from "./SeventhSection/page";
import SixthSection from "./SixthSection/page";
import ThirdSection from "./ThirdSection/page";
import Footer from "./footer/page";

// Dynamic imports for components that might cause hydration issues
const JsonLd = dynamic(() => import('./components/JsonLd'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/faq-section'), { ssr: true });
const NewsletterForm = dynamic(() => import('@/components/newsletter-form'), { ssr: true });

export const metadata: Metadata = {
  title: 'Data Annotation & Labeling Solutions for AI and Machine Learning',
  description: 'Weraa provides expert data annotation services, helping enterprises scale their AI projects with high-quality labeled data for machine learning and content moderation.',
  keywords: ['data annotation', 'data labeling', 'AI data', 'machine learning data', 'annotation services', 'content moderation', 'data solutions'],
  alternates: {
    canonical: 'https://weraa.vercel.app',
  },
  openGraph: {
    title: 'Weraa - Data Annotation & Labeling Solutions',
    description: 'Expert data annotation services for AI and machine learning projects',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Weraa Data Annotation Services',
      },
    ],
  },
};

// Define our service structured data
const serviceData = {
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

export default function LandingPage() {
    return ( 
    <div>
      {/* Add various structured data types */}
      <JsonLd type="website" />
      <JsonLd type="organization" />
      <JsonLd type="breadcrumb" 
        data={{
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://weraa.vercel.app',
                name: 'Home',
              },
            },
          ],
        }} 
      />
      
      {/* Service structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...serviceData
          })
        }}
      />
      
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection />
      <SixthSection/>
      <SeventhSection/>
      <FAQSection />
      <NewsletterForm />
      <EighthSection/>
      <Footer/>
    </div> 
    );
}