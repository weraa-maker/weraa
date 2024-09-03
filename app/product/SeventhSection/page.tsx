import Image from "next/image";

const SeventhSection = () => {
  return (
    <div id="section4" className="py-20 px-10 flex flex-col items-center justify-center bg-gray-200">
      <div className="text-4xl md:w-2/5 text-center font-bold text-gray-800">
        Our Plan and How We Work with Clients
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Getting Started */}
        <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/icons/icons8-consultation-64.png"
            width={64}
            height={64}
            alt="Getting Started"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold text-gray-700">Getting Started</div>
          <div className="text-lg text-gray-600 space-y-2 text-center">
            <p>• Initial consultation to understand your needs and objectives.</p>
            <p>• Onboarding process tailored to your specific use cases.</p>
            <p>• Seamless integration with your choice of platform, including a demo.</p>
          </div>
        </div>

        {/* Sourcing */}
        <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/icons/icons8-outsourcing-64.png"
            width={64}
            height={64}
            alt="Sourcing"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold text-gray-700">Sourcing</div>
          <div className="text-lg text-gray-600 space-y-2 text-center">
            <p>• We quickly source top talent locally, ensuring immediate readiness.</p>
            <p>• Candidates are meticulously matched to your specific requirements.</p>
            <p>• Rigorous screening ensures the most qualified professionals.</p>
          </div>
        </div>

        {/* Training Process */}
        <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/icons/icons8-training-50.png"
            width={64}
            height={64}
            alt="Training Process"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold text-gray-700">Training Process</div>
          <div className="text-lg text-gray-600 space-y-2 text-center">
            <p>• Tailored training programs ensure team readiness.</p>
            <p>• Ongoing training delivers consistent, high-quality work.</p>
            <p>• Flexibility to scale quickly and efficiently.</p>
          </div>
        </div>

        {/* Production */}
        <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/icons/icons8-production-50.png"
            width={64}
            height={64}
            alt="Production"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold text-gray-700">Production</div>
          <div className="text-lg text-gray-600 space-y-2 text-center">
            <p>• Meticulous project planning ensures goals are met with precision.</p>
            <p>• Streamlined workflow and communication ensure efficient progress.</p>
            <p>• Rigorous quality control and post-delivery support.</p>
          </div>
        </div>

        {/* Continuous Improvement */}
        <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/icons/icons8-improvement-40.png"
            width={64}
            height={64}
            alt="Continuous Improvement"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold text-gray-700">Continuous Improvement</div>
          <div className="text-lg text-gray-600 space-y-2 text-center">
            <p>• Ongoing client collaboration ensures agile adaptability.</p>
            <p>• Proactive feedback and advanced analytics maintain consistent quality.</p>
            <p>• Data-driven optimization and process innovation enhance efficiency.</p>
          </div>
        </div>

        {/* Growth-Driven Approach */}
        <div className="flex flex-col items-center space-y-4 p-8 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/icons/icons8-growth-24.png"
            width={64}
            height={64}
            alt="Growth-Driven Approach"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold text-gray-700">Growth-Driven Approach</div>
          <div className="text-lg text-gray-600 space-y-2 text-center">
            <p>• Flexible workforce and technology support rapid business growth.</p>
            <p>• Custom growth strategies and data-driven decisions optimize operations.</p>
            <p>• Focus on sustainable growth ensures long-term success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
