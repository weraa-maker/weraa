import Image from "next/image";

const SecondSection = () => {
  return (
    <div
      id="section2"
      className="py-20 flex flex-col items-center justify-center bg-gray-50 text-gray-800"
    >
      <div className="text-5xl font-bold">Weraa Scaled Solutions</div>
      <div className="text-xl md:text-2xl text-center mt-6 max-w-3xl">
        Our solutions are designed to alleviate these burdens, allowing you to focus on critical core operations while we handle the complexities of data annotation.
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xl">
        <div className="w-80 p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/icons/lightbulb.png"
              width={250}
              height={250}
              alt="Smart Team"
              className="h-20 w-20"
            />
            <div className="text-3xl font-semibold text-amber-400">Smart Team</div>
          </div>
          <div className="pt-4">
            We manage vast amounts of unstructured data with expertise and precision.
          </div>
        </div>
        
        <div className="w-80 p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/icons/clock.png"
              width={250}
              height={250}
              alt="Time Saving"
              className="h-20 w-20"
            />
            <div className="text-3xl font-semibold text-blue-400">Time Saving</div>
          </div>
          <div className="pt-4">
            We understand the immense challenges and time-consuming nature of data annotation.
          </div>
        </div>
        
        <div className="w-80 p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/icons/refresh.png"
              width={250}
              height={250}
              alt="Reliable"
              className="h-20 w-20"
            />
            <div className="text-3xl font-semibold text-green-400">Reliable</div>
          </div>
          <div className="pt-4">
            Maintaining workflow efficiency is challenging, but our solutions are reliable.
          </div>
        </div>
        
        <div className="w-80 p-8 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/icons/checkmark.png"
              width={250}
              height={250}
              alt="99%+ Accuracy"
              className="h-20 w-20"
            />
            <div className="text-3xl font-semibold text-green-500">99%+</div>
          </div>
          <div className="pt-4">
            Ensuring data quality with an accuracy rate of over 99%.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
