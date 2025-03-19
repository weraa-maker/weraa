"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section
      className="md:py-20 py-10  space-y-10
    bg-[#E5E4E2] 
    
    
    "
    >
      <div className="container mx-auto text-center md:w-1/2">
        <div
          className="text-6xl flex justify-center md:text-6xl   md:px-20 pb-10
         

        
        
        "
        >
          Revolutionize Your Business with Our Premier Outsourcing Services
        </div>

        <p
          className="text-lg md:text-xl mb-10 
     
        
        
        "
        >
          Streamline operations, enhance productivity, and achieve unparalleled results with our dedicated in-house outsourcing solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#000] text-white px-6 py-3 rounded-sm ">
            Get Started Today
          </button>
          <Link href="/contact">
            <button className="bg-gray-500 text-white px-6 py-3 rounded-sm">
              See how it works
            </button>
          </Link>
        </div>
      </div>

      <div className=" md:pt-10 items-center space-y-10   md:flex  justify-center md:mx-auto md:space-x-10">
        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}


        
        className="px-10 md:px-0">
      <Image
        src="/images/tab-1.webp"
        alt="Data annotation specialists working on AI training data"
        width={500}
        height={500}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
      />

        </motion.div>

        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        
  
        className="px-10 md:px-0">
          <Image
            src="/images/tab-2.webp"
            alt="Image annotation process for machine learning datasets"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          />

        </motion.div>

        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}

        
        
        className="px-10 md:px-0  ">
          <Image
            src="/images/tab-3.webp"
            alt="Text and media annotation services for AI model training"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
