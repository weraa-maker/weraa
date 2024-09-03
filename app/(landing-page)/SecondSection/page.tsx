'use client';

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Define types for the tab object
interface Tab {
  name: string;
  title: string;
  feature1: string;
  feature2: string;
  feature3: string;
  image: string;
}

// Define props for TabButton
interface TabButtonProps {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
}

// Define TabButton component with props type
const TabButton: React.FC<TabButtonProps> = ({ tab, isActive, onClick }) => (
  <button
    aria-label={`Select ${tab.name} tab`}
    className={`flex justify-center items-center space-x-10 w-60 cursor-pointer ${
      isActive ? "border-b-4 pt-2 border-gray-500 text-gray-800" : "text-muted-foreground"
    }`}
    onClick={onClick}
  >
    <span className="text-3xl text-center">{tab.name}</span>
  </button>
);

// Define props for TabContent
interface TabContentProps {
  tab: Tab;
}

// Define TabContent component with props type
const TabContent: React.FC<TabContentProps> = ({ tab }) => (
  <div className="flex justify-center space-x-10 pt-10">
    <div className="flex-col bg-gray-200 p-10 rounded-md" style={{ height: '525px', width: '700px' }}>
      <h2 className="text-4xl py-10 border-b underline">{tab.title}</h2>
      <div className="space-y-10">
        {[tab.feature1, tab.feature2, tab.feature3].map((feature, index) => (
          <div key={index} className="flex space-x-4 items-center">
            <CheckCircle2 className="h-6 w-6 text-gray-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-gradient-to-r from-gray-400 to-gray-100 rounded-md flex items-center justify-center" style={{ height: '525px', width: '700px' }}>
      <Image src={tab.image} width={430} height={400} alt={`Image representing ${tab.title}`} className="rounded-md" />
    </div>
  </div>
);

const SecondSection: React.FC = () => {
  // Define the tabs array inside the component
  const tabs: Tab[] = [
    {
      name: "Onboarding",
      title: "What to Expect?",
      feature1: "Smooth Onboarding",
      feature2: "Clear Communication",
      feature3: "Quality Assurance",
      image: "/images/onboarding.jpeg",
    },
    {
      name: "Sourcing & Training",
      title: "Targeted Recruitment & Rigorous Screening",
      feature1: "Customized Training Programs",
      feature2: "Hands-On Experience",
      feature3: "Reduced Ramp-Up Time",
      image: "/images/training.jpeg",
    },
    {
      name: "Production",
      title: "Streamlined Production for Superior Results",
      feature1: "Detailed Project Planning",
      feature2: "Seamless Execution & Quality Control",
      feature3: "Final Delivery & Beyond",
      image: "/images/production.jpeg",
    },
    {
      name: "Growth",
      title: "Let Us Grow Together",
      feature1: "Strategic Planning for Expansion",
      feature2: "Scalable Solutions",
      feature3: "Partnership for Long-Term Success",
      image: "/images/growth.jpeg",
    },
    {
      name: "Continuous Improvement",
      title: "Elevating Excellence",
      feature1: "Proactive Feedback Loops",
      feature2: "Data-Driven Optimization",
      feature3: "Agile Process Refinement",
      image: "/images/continuousimprovement.jpeg",
    },
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <section ref={ref} className="flex flex-col justify-center items-center md:py-20 p-10">
      <div className="flex justify-center items-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="md:flex md:space-x-20 border-b md:py-10"
        >
          <div className="space-y-10">
            <h1 className="text-3xl">Let&#39;s Make It Easier</h1>
            <div className="flex items-center space-x-8 hover:text-blue-500 text-xl">
              <span>See how we streamline work</span>
              <ArrowRight className="h-6 w-6 ml-4" />
            </div>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-2 md:flex md:space-x-10 items-center justify-center py-10"
          >
            <Image src="/images/logo/salesforce-2.svg" width={150} height={150} alt="Salesforce logo" />
            <Image src="/images/logo/slack.svg" width={150} height={150} alt="Slack logo" />
            <Image src="/images/logo/Asana_logo.svg.png" width={150} height={150} alt="Asana logo" />
            <Image src="/images/logo/SageMaker.svg" width={150} height={150} alt="SageMaker logo" />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl pt-10 py-20 hidden md:block"
      >
        See how teams work with Weraa
      </motion.div>
      <div className="hidden md:flex items-center justify-center">
        {tabs.map((tab) => (
          <TabButton
            key={tab.name}
            tab={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      {activeTab && (
        <TabContent tab={activeTab} />
      )}
    </section>
  );
};

export default SecondSection;
