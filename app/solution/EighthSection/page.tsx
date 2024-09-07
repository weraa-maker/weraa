import Image from "next/image";
import Link from "next/link"; // Import Link from 'next/link'

const EighthSection = () => {
  return (
    <section className="flex flex-col py-20 items-center justify-center bg-gray-900">
      <div className="text-center flex flex-col items-center justify-center pb-20">
        <Image
          src="/images/logo/weraa-logo.jpeg"
          alt="Weraa Logo"
          width={240}
          height={240}
          className="mx-auto"
        />

        <div className="text-6xl text-white md:px-20 pb-12 w-full md:w-2/3 font-bold leading-tight">
          Partner with WERAA, Scaled Solutions for Unparalleled Quality and Efficiency.
        </div>
        
        <Link href="/contact" className="text-xl bg-white p-4 rounded-lg w-40 flex items-center justify-center text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-300">
          Contact Sales
        </Link>
      </div>

      <div className="hidden md:flex pt-20 space-x-40 border-t border-gray-600">
        <Image
          src="/images/logo/weraa-logo.jpeg"
          alt="Weraa Logo"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
};

export default EighthSection;
