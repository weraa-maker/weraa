import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SeventhSection = () => {
  return (
    <div className="flex flex-col md:py-20 md:p-40 p-10 bg-[#E5E4E2]  ">
      <div className=" space-y-6 flex flex-col md:px-20 pb-10 ">
        <div className=" text-xl ">Get started easily</div>
        <div className="text-4xl ">Prioritize revenue-driving work</div>
        <div className="text-xl ">
          Connect what needs to get done, who is responsible, and how to get it
          done.
        </div>
      </div>
      <div className="md:flex md:px-20 md:space-x-10 space-y-10 md:space-y-0 ">
      <div className="rounded-sm   bg-white p-8">
          <Image
            src="/images/training.jpeg"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />
          

          <div className="text-3xl pt-8">Quick Training</div>

<div className="pt-10 flex justify-between">

<div className="text-xl">
 Readily Available
  </div>

  <ArrowRight className="h-6 w-6 ml-4 " />
      </div>


        </div>

        <div className="rounded-sm   bg-white p-8">
          <Image
            src="/images/production.jpeg"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />
       

         
       <div className="text-3xl pt-8">Fast Production</div>

<div className="pt-10 flex justify-between">

<div className="text-xl">
  Resourceful
  </div>

  <ArrowRight className="h-6 w-6 ml-4 " />
      </div>



       
        </div>

        <div className="rounded-sm   bg-white p-8">
          <Image
            src="/images/growth.jpeg"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />
   
        

     
         
          <div className="text-3xl pt-8"> Guaranteed Growth </div>

          <div className="pt-10 flex justify-between">

          <div className="text-xl">
            Reliable
            </div>

            <ArrowRight className="h-6 w-6 ml-4 " />
                </div>

   
        </div>
      

      </div>
    </div>
  );
};

export default SeventhSection;
