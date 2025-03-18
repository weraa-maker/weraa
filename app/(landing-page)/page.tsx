import { Metadata } from 'next';
import EighthSection from "./EighthSection/page";
import FifthSection from "./FifthSection/page";
import FirstSection from "./FirstSection/page";
import FourthSection from "./FourthSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "./SecondSection/page";
import SeventhSection from "./SeventhSection/page";
import SixthSection from "./SixthSection/page";
import ThirdSection from "./ThirdSection/page";
import Footer from "./footer/page";
import JsonLd from './components/JsonLd';
import FAQSection from '@/components/faq-section';
import NewsletterForm from '@/components/newsletter-form';

export const metadata: Metadata = {
  title: 'Data Annotation & Labeling Solutions for AI and Machine Learning',
  description: 'Weraa provides expert data annotation services, helping enterprises scale their AI projects with high-quality labeled data for machine learning and content moderation.',
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

const LandingPage = () => {
    return ( 
    <div>
      <JsonLd />
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
    </div> );
}
 
export default LandingPage;