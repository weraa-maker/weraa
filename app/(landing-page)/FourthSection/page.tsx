"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = [
  {
    src: "/images/tab-1.webp",
  },
  {
    src: "/images/tab-2.webp",
  },
  {
    src: "/images/tab-3.webp",
  },
];

const FourthSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-10 items-center justify-center px-20">
      <div className="flex py-20">
        <div className="space-y-6 flex flex-col">
          <div className="text-gray-800 text-xl px-10">
            DRIVE EFFICIENCY ACROSS TEAMS
          </div>
          <div className="text-4xl w-96 px-10">Manage complex work easily</div>
          <div className="text-xl text-gray-600 px-10">
            Connect what needs to get done, who is responsible, and how to get it done.
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div>
              <Image src="/images/tab-1.webp" alt="Image" width={700} height={700} />
            </div>
            <div className="space-y-10 border-b">
              <div className="text-3xl">Generative AI Services</div>
              <div className="w-96 text-xl text-gray-600">
                Transform ideas into operational AI solutions with our comprehensive Generative AI Services.
              </div>
              <div className="flex">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div>
              <Image src="/images/tab-2.webp" alt="Image" width={700} height={700} />
            </div>
            <div className="space-y-10 border-b">
              <div className="text-3xl">Data Labeling Services</div>
              <div className="w-96 text-xl text-gray-600">
                Unlock the Power of Your Data with Precision Annotation. Leverage our expertise in data labeling to enhance your machine learning models.
              </div>
              <div className="flex">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div>
              <Image src="/images/tab-1.webp" alt="Image" width={700} height={700} />
            </div>
            <div className="space-y-10 border-b">
              <div className="text-3xl">Timeline</div>
              <div className="w-96 text-xl text-gray-600">
                Take the first step towards a safer, more engaging Team. Contact us to learn how our content moderation services can benefit your business.
              </div>
              <div className="flex">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FourthSection;
