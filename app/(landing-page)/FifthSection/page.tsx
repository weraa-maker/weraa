import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const FifthSection = () => {
  return (
    <div className="md:flex md:space-x-20 py-20 space-y-10 items-center justify-center bg-gray-900">
      
      <div id="structure" className="space-y-6 flex flex-col text-gray-200 md:w-1/3 px-10">
        <div className="text-xl font-semibold">STREAMLINE YOUR WORK AND PROCESSES</div>
        <div className="text-4xl font-bold">Prioritize revenue-driving work</div>
        <div className="text-xl">
          Connect what needs to get done, who is responsible, and how to get
          it done.
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-blue-400">Account Management</AccordionTrigger>
            <AccordionContent className="border-b border-blue-500">
              Our process ensures a smooth transition from sales to account management, focusing on building strong relationships and consistently delivering value to meet client needs.
              <div className="flex items-center text-blue-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-yellow-300">Project Management</AccordionTrigger>
            <AccordionContent className="border-b border-yellow-300">
              We coordinate all aspects of your project, from resource allocation to timeline management, ensuring smooth execution. Using advanced tools, we monitor progress in real-time to promptly address issues and keep the project on track.
              <div className="flex items-center text-yellow-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-green-400">Quality Analysis</AccordionTrigger>
            <AccordionContent className="border-b border-green-400">
              Our work undergoes rigorous quality checks to ensure it meets the highest standards of accuracy and excellence. Feedback from these checks is used for continuous improvement, enhancing the quality of every project.
              <div className="flex items-center text-green-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-red-400">Agent Execution</AccordionTrigger>
            <AccordionContent className="border-b border-red-400">
              Our skilled agents execute tasks with precision, ensuring the work aligns perfectly with your expectations. Their efforts result in consistent, high-quality outcomes for your business.
              <div className="flex items-center text-red-400 pt-4">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Image 
        src="/images/manage.jpeg" 
        alt="Process Image" 
        width={700} 
        height={700} 
        className="p-10 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default FifthSection;
