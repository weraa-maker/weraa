'use client'

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/menu";
import ActionButtons from "./_components/buttons";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-center space-x-10 bg-[#E5E4E2] dark:bg-gray-900 dark:text-white md:px-10
    sticky top-0 z-50 ${hasScrolled ? "shadow-sm" : ""}
  `;

  return (
    <nav 
      className={navbarClasses} 
      itemScope 
      itemType="https://schema.org/SiteNavigationElement"
      aria-label="Main Navigation"
    >
      <div className="flex w-2/3 md:w-1/2">
        <Logo />
        <NavigationMenuBar />
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <ActionButtons />
      </div>
    </nav>
  );
};

export default Navbar;
