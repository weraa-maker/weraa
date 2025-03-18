"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  href: string;
  label: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
  homeHref?: string;
  homeLabel?: string;
  showHome?: boolean;
}

export default function Breadcrumb({
  items = [],
  className,
  homeHref = '/',
  homeLabel = 'Home',
  showHome = true,
}: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Generate breadcrumb items from pathname if none provided
  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbItems(pathname, homeHref, homeLabel);
  
  // Add structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://weraa.vercel.app'}${item.href}`,
        name: item.label,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav aria-label="Breadcrumb" className={cn('flex mb-4', className)}>
        <ol className="flex flex-wrap items-center space-x-2">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-1 text-gray-500" aria-hidden="true" />
              )}
              
              {item.isCurrent ? (
                <span 
                  className="text-gray-700 font-medium" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {index === 0 && showHome ? (
                    <span className="flex items-center">
                      <Home className="h-4 w-4 mr-1" aria-hidden="true" />
                      <span className="sr-only md:not-sr-only">{item.label}</span>
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

// Helper function to generate breadcrumb items from pathname
function generateBreadcrumbItems(
  pathname: string,
  homeHref: string,
  homeLabel: string
): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  
  // Start with home
  const items: BreadcrumbItem[] = [
    { href: homeHref, label: homeLabel }
  ];
  
  // Build path incrementally
  let currentPath = '';
  paths.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Format the label: convert-this-format to "Convert This Format"
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    items.push({
      href: currentPath,
      label,
      isCurrent: index === paths.length - 1
    });
  });
  
  return items;
} 