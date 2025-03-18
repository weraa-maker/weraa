'use client'

import React from "react";
import Image from "next/image";

// Simple logo display component that doesn't require react-infinite-logo-slider
const SixthSection = () => {
  return (
    <div className="py-20">
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-hidden">
        <Image src="/images/logo/logo-15.svg" alt="Logo 15" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-13.svg" alt="Logo 13" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-16.svg" alt="Logo 16" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-17.svg" alt="Logo 17" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-18.svg" alt="Logo 18" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-19.svg" alt="Logo 19" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-14.svg" alt="Logo 14" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-13.svg" alt="Logo 13" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-15.svg" alt="Logo 15" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-12.svg" alt="Logo 12" width={100} height={100} className="w-20 h-20" />
        <Image src="/images/logo/logo-14.svg" alt="Logo 14" width={100} height={100} className="w-20 h-20" />
      </div>
    </div>
  );
};
  
export default SixthSection;