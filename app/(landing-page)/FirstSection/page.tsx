"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section className="py-10 md:py-20 bg-[#E5E4E2] space-y-10">
      <div className="container mx-auto text-center md:w-1/2">
        <div className="text-4xl md:text-6xl font-bold flex justify-center pb-10 leading-tight">
          Revolutionize Your Business with Our Premier Outsourcing Services
        </div>

        <p className="text-lg md:text-xl mb-10">
          Streamline operations, enhance productivity, and achieve unparalleled
          results with our dedicated in-house outsourcing solutions.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-sm hover:bg-gray-800 transition duration-300">
              Get Started Today
            </button>
          </Link>
          <Link href="/product">
            <button className="bg-gray-500 text-white px-6 py-3 rounded-sm hover:bg-gray-700 transition duration-300">
              See How It Works
            </button>
          </Link>
        </div>
      </div>

      <div className="md:pt-10 md:flex justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
        {[
          { src: "/images/training.jpeg", alt: "Training image", width: 400, height: 400 },
          { src: "/images/production.jpeg", alt: "Production image", width: 500, height: 500 },
          { src: "/images/growth.jpeg", alt: "Growth image", width: 500, height: 500 }
        ].map((image, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="px-10 md:px-0"
          >
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FirstSection;
