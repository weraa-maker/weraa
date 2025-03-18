import Image from "next/image";

const EighthSection = () => {
  return (
    <div>
      <section className="flex flex-col py-20 items-center justify-center bg-[#28282B]">
        <div className="text-center flex flex-col items-center justify-center pb-20">
          <Image
            src="/images/logo/logo-13.svg"
            alt=""
            width={100}
            height={100}
            className="w-60 h-60 mx-auto"
          />

          <div
            className="text-6xl flex justify-center md:text-6xl text-white md:px-20 pb-20 w-2/3"
          >
            Partner with WERAA, Scaled Solutions for unparalleled quality and efficiency. 
          </div>
          <div className="text-xl bg-white p-6 rounded-lg w-40 items-center justify-center flex">
            Contact Sales
          </div>
        </div>

        <div className="hidden md:flex pt-40 space-x-40 border-t">
          <div>
            <Image
              src="/images/logo/logo-17.svg"
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EighthSection;
