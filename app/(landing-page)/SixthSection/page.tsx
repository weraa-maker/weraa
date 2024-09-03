'use client'

import React from "react";

import Slider from 'react-infinite-logo-slider'

import Image from "next/image";


const SixthSection = () => {
 
  
    return (
        <div className="py-20">


        <Slider
        width="200px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
    

       
    >
        <Slider.Slide>
        <Image src="/images/logo/argilla.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/SageMaker.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/discord.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/drawing.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/kiliTechnology.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/roboflow.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/SageMaker.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/salesforce-2.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/slack.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/slack.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/discord.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/argilla.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
          
        </Slider.Slide>
    </Slider>
    </div>
    );
  };
  
  export default SixthSection;