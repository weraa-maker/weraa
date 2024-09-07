import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Import Link from 'next/link'

const FirstSection = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row md:space-x-20 items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
      <div className="flex flex-col space-y-10 md:w-1/3 px-10">
        <div className="text-5xl md:text-6xl font-bold leading-tight">
          The Best Team For Content Moderation, Gen AI, and Data Labeling Solutions
        </div>
        <div className="text-lg md:text-2xl font-light">
          We provide a wide range of services tailored to meet the diverse needs of your enterprise, empowering you to achieve superior data quality and operational efficiency.
        </div>

        <div className="flex space-x-4">
          <Link href="/contact" className="text-lg md:text-xl bg-white text-black p-6 rounded-lg w-40 flex items-center justify-center transform transition-transform hover:scale-105 hover:bg-gray-200 shadow-lg">
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="md:w-2/3 flex justify-center">
        <Image src="/images/manage.jpeg" alt="Image" width={700} height={700} className="rounded-lg shadow-2xl transform transition-transform hover:scale-105" />
      </div>
    </div>
  );
};

export default FirstSection;
