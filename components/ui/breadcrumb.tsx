"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbProps = {
  homeElement?: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export const Breadcrumb = ({
  homeElement = <Home className="h-4 w-4" />,
  separator = <ChevronRight className="h-4 w-4" />,
  containerClasses = "py-4 flex text-sm",
  listClasses = "hover:underline transition-all",
  activeClasses = "text-primary font-semibold",
  capitalizeLinks = true,
}: BreadcrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className={containerClasses}>
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className={listClasses} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" itemProp="item" className="flex items-center">
            <span itemProp="name">{homeElement}</span>
            <meta itemProp="position" content="1" />
          </Link>
        </li>

        {pathNames.length > 0 && separator}

        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemProps = { itemProp: "name" };
          const isLast = index === pathNames.length - 1;
          const formattedLink = capitalizeLinks
            ? link.charAt(0).toUpperCase() + link.slice(1).replace(/-/g, " ")
            : link.replace(/-/g, " ");

          return (
            <React.Fragment key={index}>
              <li 
                className={`${listClasses} ${isLast ? activeClasses : ""}`} 
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span {...itemProps} className="truncate max-w-[200px]">{formattedLink}</span>
                ) : (
                  <Link href={href} itemProp="item" className="flex items-center">
                    <span {...itemProps} className="truncate max-w-[200px]">{formattedLink}</span>
                  </Link>
                )}
                <meta itemProp="position" content={`${index + 2}`} />
              </li>
              {!isLast && separator}
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
}; 