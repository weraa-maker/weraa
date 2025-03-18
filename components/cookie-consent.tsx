"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Show banner if no choice has been made
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    // Set consent to "all" in localStorage
    localStorage.setItem("cookie-consent", "all");
    // Here you would normally initialize analytics, etc.
    setShowBanner(false);
  };

  const acceptEssential = () => {
    // Set consent to "essential" in localStorage
    localStorage.setItem("cookie-consent", "essential");
    // Here you would only initialize essential cookies
    setShowBanner(false);
  };

  const openSettings = () => {
    // This would open more detailed cookie settings
    // For simplicity, we'll just show an alert
    alert("Cookie settings would open here");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-grow max-w-3xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold dark:text-white">Cookie Consent</h3>
              <button 
                onClick={() => setShowBanner(false)} 
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close cookie banner"
              >
                <X size={20} />
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
            </p>
            <button 
              onClick={openSettings}
              className="text-blue-600 dark:text-blue-400 text-sm mt-1 hover:underline"
            >
              Cookie Policy
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 