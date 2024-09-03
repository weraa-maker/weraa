"use client";

import Calendly from "@/components/Calendly";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function FirstSection() {
  return (
    <div
      className="
        flex flex-col w-full
        bg-gradient-to-br from-[#f0f4ff] via-[#f9fbff] to-[#ffffff]
        px-6 py-14 md:px-12 md:py-24 mx-auto
        xl:w-4/5 2xl:w-[68%]
      "
    >
      <div className="flex flex-col md:space-x-12 space-y-10 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] leading-tight">
            Why Choose Us
          </h1>
          <p className="text-lg text-gray-600 py-4 leading-relaxed">
            Our commitment to excellence ensures that we are always:
          </p>

          {[
            {
              title: "Reliable",
              description:
                "We ensure consistency and quality in every project, delivering results you can trust.",
            },
            {
              title: "Resourceful",
              description:
                "Our team leverages a wide range of tools and expertise to solve complex challenges efficiently.",
            },
            {
              title: "Readily Available",
              description:
                "We prioritize your needs with quick response times and continuous support.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.3 }}
              className="flex items-start gap-x-4 py-4"
            >
              <PiCheckCircle className="text-[#3d80d7] text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-[#34495e]">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14 md:mt-24 bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
        <Calendly />
      </div>
    </div>
  );
}
