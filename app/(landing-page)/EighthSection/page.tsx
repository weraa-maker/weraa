import Image from "next/image";
import Link from "next/link"; // Import Link from 'next/link'

const EighthSection = () => {
  return (
    <section className="flex flex-col py-20 items-center justify-center bg-gray-900">
      <div className="text-center flex flex-col items-center pb-20">
        <Image
          src="/images/logo/weraa-logo.jpeg"
          alt="Weraa Logo"
          width={240}
          height={240}
          className="mx-auto"
        />

        <h1 className="text-6xl text-white md:px-20 pb-12 w-full md:w-2/3 font-bold leading-tight">
          Partner with WERAA, Scaled Solutions for Unparalleled Quality and Efficiency.
        </h1>

        <Link href="/contact" className="text-xl bg-white p-4 rounded-lg w-40 flex items-center justify-center text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-300">
          Contact
        </Link>

      </div>

      <div className="hidden md:flex pt-40 space-x-40 border-t border-gray-700">
        <div className="flex items-center">
          <Image
            src="/images/logo/weraa-logo.jpeg"
            alt="Weraa Logo"
            width={50}
            height={50}
          />
        </div>

        <div className="flex-col space-y-6 flex">
          <h2 className="text-xl text-gray-200 pb-10">Company</h2>
          <ul className="text-gray-200 space-y-2">
            <li>Our Story</li>
            <li>Vision</li>
            <li>Our Advantage</li>
            <li>Meet The Team</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="flex-col space-y-6 flex">
          <h2 className="text-xl text-gray-200 pb-10">Services</h2>
          <ul className="text-gray-200 space-y-2">
            <li>Data Labeling</li>
            <li>Content Moderation</li>
            <li>Gen AI Training</li>
            <li>Human In The Loop</li>
          </ul>
        </div>

        <div className="flex-col space-y-6 flex">
          <h2 className="text-xl text-gray-200 pb-10">Workflow Solutions</h2>
          <ul className="text-gray-200 space-y-2">
            <li>Quick Onboarding</li>
            <li>Sourcing</li>
            <li>Increase Productivity</li>
            <li>Work Management</li>
            <li>Project Planning</li>
            <li>Growth</li>
          </ul>
        </div>

        <div className="flex-col space-y-6 flex">
          <h2 className="text-xl text-gray-200 pb-10">Annotation Tools</h2>
          <ul className="text-gray-200 space-y-2">
            <li>Roboflow</li>
            <li>CVAT</li>
            <li>Argilla</li>
            <li>Label Studio</li>
            <li>AWS SageMaker</li>
          </ul>
        </div>

        <div className="flex-col space-y-6 flex">
          <h2 className="text-xl text-gray-200 pb-10">Why Choose Weraa</h2>
          <ul className="text-gray-200 space-y-2">
            <li>Global Reach</li>
            <li>Quality Assurance</li>
            <li>Administration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EighthSection;
