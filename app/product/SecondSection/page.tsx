import Image from "next/image";


const SecondSection = () => {
  return (
    <div className="py-10 space-y-10 items-center justify-center flex flex-col">
      <div className="text-5xl "> Weraa Scaled Solutions</div>
      <div className="text-2xl text-center">
      Our solutions are designed to alleviate these burdens, allowing you to focus on critical core operations while we handle the complexities of data annotation.
      </div>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-20 text-xl">
        <div className="w-80 text-amber-300 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
                src="/images/icons/lightbulb.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl"> Smart Team </div>
          </div>
          <div className="pt-4 w-80">We can Manage vast amounts of unstructured data</div>
        </div>
        <div className="w-80  border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
              src="/images/icons/clock.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl"> Time saving </div>
          </div>
          <div className="pt-4 w-80">we understand the immense challenges and time-consuming nature of data annotation</div>
        </div>
        <div className="w-80 text-blue-400 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
             src="/images/icons/refresh.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl"> Reliable </div>
          </div>
          <div className="pt-4 w-80">
          Maintaining workflow efficiency can be daunting tasks.
          </div>
        </div>
        <div className="w-80 text-green-400 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
              src="/images/icons/checkmark.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl"> 99% +</div>
          </div>
          <div className="pt-4 w-80"> ensuring data quality </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
