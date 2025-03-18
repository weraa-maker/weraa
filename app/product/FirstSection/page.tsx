import Image from "next/image";

import { ArrowRight } from "lucide-react";

const FirstSection = () => {
  return (
    <div>
      <div className="  md:flex md:space-x-20 py-20 space-y-10 items-center  justify-center  ">
        <div className=" space-y-10 flex flex-col  md:w-1/3 px-10 ">
          <div className="text-6xl ">
            The #1 Team For Content moderation, Gen AI  and Data Labling Solutions
          </div>
          <div className="text-2xl ">
          We provide a wide range of services tailored to meet the diverse needs of your enterprise, empowering you to achieve superior data quality and operational efficiency.
          </div>

          <div className="flex space-x-4 ">
            <div className="bg-black p-4 text-white text-xl rounded-md">
              Get Started
            </div>

            <div className="border p-4 text-xl rounded-md">View Demo</div>
          </div>
        </div>

        <Image 
          src="/images/tab-6.webp" 
          alt="Comprehensive data annotation and labeling services for AI and ML projects" 
          width={700} 
          height={700} 
          className="px-10" 
        />
      </div>
    </div>
  );
};

export default FirstSection;
