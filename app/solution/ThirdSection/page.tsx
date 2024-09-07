'use client'

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const options = [
  {
    index: 0,
    title: "Text Annotation",
    description: "We provide expert text classification, sentiment tagging, entity extraction, and translation services across multiple languages.",
    action: "Leverage our solutions for accurate and efficient text analysis tailored to your project's needs.",
    image: "/images/text-annotation.webp"
  },
  {
    index: 1,
    title: "Image Annotation Services",
    description: "We offer a wide range of image annotation methods, including bounding boxes, polygons, polylines, key points, segmentation, descriptions, transcription, categorization, and metadata tagging.",
    action: "Leverage our services to enhance and accurately organize your image data for comprehensive analysis.",
    image: "/images/Bounding Box.jpeg"
  },
  {
    index: 2,
    title: "Media Annotation",
    description: "We specialize in video object detection and tracking, action recognition, entity tagging, and video classification for comprehensive media analysis.",
    action: "Utilize our media annotation services to gain detailed insights and accurate classification of video content.",
    image: "/images/Media-Annotation.jpeg"
  },
  {
    index: 3,
    title: "Language and NLP Services",
    description: "We provide accurate audio transcription, intent tagging, and sentiment analysis across over 100 languages.",
    action: "Leverage our NLP services to gain deep insights into audio and text content for better decision-making.",
    image: "/images/NLP.jpeg"
  },
  {
    index: 4,
    title: "Autonomous Vehicle and AR/VR Annotation Services",
    description: "We provide multi-LiDAR and sensor fusion, panoptic segmentation, object detection, 3D cuboids, human keypoints, semantic segmentation, and audio transcription for autonomous vehicles and AR/VR applications.",
    action: "Leverage our expertise to enhance autonomous driving technology and AR/VR experiences with precise and comprehensive data annotation.",
    image: "/images/Autonomous Vehicles.jpeg"
  }
];

const ThirdSection = () => {
  return (
    <div id="service" className="py-16 bg-gray-100 space-y-12 flex flex-col items-center justify-center">
      <div id="data-annotation-services" className="text-5xl font-bold text-center text-gray-900">
        Data Annotation Services
      </div>

      <div className="flex flex-col space-y-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Accordion type="multiple" className="w-full space-y-4">
          {options.map((option) => (
            <AccordionItem key={option.index} value={option.title} className="border rounded-lg shadow-md">
              <AccordionTrigger className="bg-blue-500 text-white text-xl font-semibold p-4 rounded-t-lg hover:bg-blue-600 transition-colors">
                {option.title}
              </AccordionTrigger>
              <AccordionContent className="border-t border-blue-300 bg-white p-6 rounded-b-lg">
                <div className="md:flex items-center space-x-8">
                  <div className="md:w-1/2">
                    <p className="text-lg text-gray-700 mb-4">
                      {option.description}
                    </p>
                    <div className="flex items-center text-blue-500">
                      <span className="text-base">{option.action}</span>
                      <ArrowRight className="h-6 w-6 ml-3" />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={300}
                      height={300}
                      className="object-cover rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ThirdSection;
