import Image from "next/image";



const SeventhSection = () => {
  return (
    <div>
      <div className="py-20 space-y-20 px-10 items-center justify-center flex flex-col bg-[#E5E4E2]">
        <div className="text-4xl md:w-2/5 text-center"> Our Plan and How We Work with Clients </div>
 

      <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-96 space-y-4 flex ">
        <Image 
        src="/images/icons/gears.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
          <div className="text-2xl font-semibold"> Getting Started </div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Initial Consultation understanding of your needs and objectives.</div>
        <div className="text-xl"> • Onboarding </div>
        <div className="text-xl"> • Seamless integration with your choice of platform with a demo tailored to your specific use cases.</div>
        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/puzzle.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
         <div className="text-2xl font-semibold"> Sourcing </div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • We quickly source top talent localy, ensuring immediate readiness for your project needs.</div>
        <div className="text-xl"> • We meticulously match candidates to your specific requirements, enhancing project success.</div>
        <div className="text-xl"> • Our rigorous screening process ensures we deliver only the most qualified and trustworthy professionals.</div>
        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/refresh-2.png"
        width={500}
        height={500}
        alt="logo"
        className="h-20 w-20"
        />
      <div className="text-2xl font-semibold">Training Process</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Our tailored training programs ensure team members are prepared to contribute immediately, minimizing the time to achieve results.</div>
        <div className="text-xl"> • Through comprehensive and ongoing training, we deliver consistent, high-quality work that upholds your business standards.</div>
        <div className="text-xl"> • Our robust sourcing and training processes provide the flexibility to scale quickly and efficiently, adapting to your project needs.</div>
        </div>


         </div>
         </div>

    
         <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/lock.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
       <div className="text-2xl font-semibold">Production</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • We meticulously plan each project, aligning timelines, milestones, and resources to ensure your goals are met with precision.</div>
        <div className="text-xl"> • Our streamlined workflow and continuous communication ensure efficient progress and on-time completion of every task.</div>
        <div className="text-xl"> • Quality Control & Final Delivery: Rigorous testing, continuous improvement, and post-delivery support guarantee a final product that meets or exceeds your expectations.</div>
        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/contacts.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
        <div className="text-2xl font-semibold"> Continuous Improvement </div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • We maintain ongoing client collaboration and agile adaptability, ensuring that we can quickly respond to changing needs and provide immediate support.</div>
        <div className="text-xl"> • Through proactive feedback loops, rigorous internal reviews, and advanced analytics, we ensure consistent quality and dependable outcomes.</div>
        <div className="text-xl"> • Our data-driven optimization, continuous learning, and process innovation allow us to enhance efficiency and deliver superior results.</div>

        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/menu.png"
        width={500}
        height={500}
        alt="logo"
        className="h-20 w-20"
        />
        <div className="text-2xl font-semibold">Growth-Driven Approach</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Our flexible workforce and advanced technology ensure we&apos;re prepared to support your business growth quickly and efficiently.</div>
        <div className="text-xl"> • We develop custom growth strategies and leverage data-driven decisions to help you capitalize on market opportunities and optimize operations.</div>
        <div className="text-xl"> • Our collaborative partnership and focus on sustainable growth ensure long-term success and consistent alignment with your business goals.</div>
        </div>


         </div>
         </div>

    


      </div>
    </div>
  );
};

export default SeventhSection;
