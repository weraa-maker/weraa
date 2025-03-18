import { Metadata } from 'next';
import FirstSection from "./FirstSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "@/app/product/SecondSection/page";
import ThirdSection from "./ThirdSection/page";
import FourthSection from "./FourthSection/page";
import FifthSection from "./FifthSection/page";
import SixthSection from "./SixthSection/page";
import SeventhSection from "./SeventhSection/page";
import EighthSection from "./EighthSection/page";
import Footer from "./footer/page";
import { Breadcrumb } from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Data Annotation Services & Products | Weraa',
  description: 'Explore Weraa\'s comprehensive data annotation products and services for image labeling, text annotation, content moderation, and more.',
  keywords: ['data annotation services', 'image labeling', 'text annotation', 'content moderation', 'AI data products'],
  openGraph: {
    title: 'Data Annotation Services & Products | Weraa',
    description: 'Comprehensive data annotation products and services for AI development',
    images: [
      {
        url: '/images/og-product.jpg',
        width: 1200,
        height: 630,
        alt: 'Weraa Data Annotation Products',
      },
    ],
  },
};

const ProductPage = () => {
    return ( 
    <div>
        <Navbar />
        <div className="container mx-auto px-4">
          <Breadcrumb />
        </div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <Footer />
    </div> );
}
 
export default ProductPage;