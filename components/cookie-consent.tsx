"use client";

import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { userPreferencesAtom } from "@/lib/store";
import { toast } from "sonner";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [userPreferences, setUserPreferences] = useAtom(userPreferencesAtom);

  useEffect(() => {
    // Only show if consent hasn't been given
    if (!userPreferences.cookiesAccepted) {
      // Delay showing by 2 seconds for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [userPreferences.cookiesAccepted]);

  const acceptAll = () => {
    setUserPreferences({
      ...userPreferences,
      cookiesAccepted: true,
      analyticsConsent: true,
      marketingConsent: true,
      lastUpdated: new Date(),
    });
    setIsVisible(false);
    toast.success('Cookie preferences saved');
  };

  const acceptEssential = () => {
    setUserPreferences({
      ...userPreferences,
      cookiesAccepted: true,
      analyticsConsent: false,
      marketingConsent: false,
      lastUpdated: new Date(),
    });
    setIsVisible(false);
    toast.success('Essential cookie preferences saved');
  };

  const openSettings = () => {
    // In a real app, this would open a modal with detailed cookie settings
    toast.info('Cookie settings would open here');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-white p-4 shadow-lg dark:bg-gray-800 md:bottom-4 md:left-4 md:w-auto md:max-w-md md:rounded-lg">
      <div className="flex flex-col space-y-4">
        <div className="text-sm">
          <h3 className="mb-1 font-medium">Cookie Consent</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
          </p>
        </div>
        
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <button 
            onClick={acceptAll}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Accept All
          </button>
          <button 
            onClick={acceptEssential}
            className="rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Essential Only
          </button>
          <button 
            onClick={openSettings}
            className="rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Customize
          </button>
        </div>
      </div>
    </div>
  );
} 