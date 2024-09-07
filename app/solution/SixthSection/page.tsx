import Image from "next/image";

const SixthSection = () => {
  return (
    <div className="py-20 md:space-y-20 items-center justify-center flex flex-col">
      <div className="text-4xl text-center">best tools we work with </div>
      <div className="md:flex md:space-x-20  items-center  justify-center">
        <div className="border-b   md:border-r md:border-b-0 md:w-80">
          <Image
            src="/images/logo/roboflow.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
        <div className="border-b   md:border-r md:border-b-0 md:w-80">
          <Image
            src="/images/logo/salesforce-2.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
        <div className="border-b   md:border-r md:border-b-0 md:w-80">
          <Image
            src="/images/logo/argilla.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
        <div className="border-b   md:border-r md:border-b-0 md:w-80">
          <Image
            src="/images/logo/With BG.svg"
            width={250}
            height={250}
            alt="logo"
            className="h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
