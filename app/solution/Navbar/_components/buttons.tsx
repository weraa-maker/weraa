import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Globe } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full  text-lg text-black mt-10">
                  
                  <Link href="/contact" className="">
                    Get Started
                  </Link>
                  <Link href="/pricing" className=" ">
                    Pricing
                  </Link>
                  <Link href="/" className="">
                    Features
                  </Link>
                  <Link href="/contact" className="">
                    Contact
                  </Link>
                  
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div
        className="hidden md:flex md:space-x-4 items-center
    
    

"
      >
        <div className="border-r border-black">
          <div className="mr-4">
            <Globe className="h-6 w-6 text-gray-700" />
          </div>
        </div>

        <Link href="/contact" className="">
          Contact Sales
        </Link>

        <div></div>
      </div>
    </div>
  );
};

export default ActionButtons;
