"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";

// Sample components for the Industries dropdown
const components = [
  {
    title: "ADAS & Automotive Vehicles",
    description:
      "Outsourcing ensures high-quality, scalable, and cost-effective data annotation, speeding up the development of reliable ADAS technologies.",
  },
  {
    title: "Consumer & Media",
    description:
      "Professional data labeling enhances content recommendation algorithms and user engagement, allowing for faster and more efficient content processing.",
  },
  {
    title: "Robotics & Manufacturing",
    description:
      "High-quality and scalable data annotation accelerates the development of intelligent automation systems while reducing costs.",
  },
  {
    title: "Food & Agriculture",
    description:
      "Accurate and scalable data labeling enables the efficient processing of agricultural data, driving innovation and operational efficiency.",
  },
  {
    title: "Generative AI",
    description:
      "Outsourcing provides precise and efficient data annotation, facilitating quicker training and iteration of high-quality generative AI models.",
  },
  {
    title: "Gaming & Entertainment",
    description:
      "Outsourced data labeling ensures accurate and timely identification of harmful content, maintaining the integrity of online platforms.",
  },
];

// Navigation Menu Bar Component
export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        
        {/* Features Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href="/">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <Logo />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Weraa Tech
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Readily, Reliable & Resourceful.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="BPO">
                Our team provides bespoke customer service solutions to enhance client satisfaction and loyalty.
              </ListItem>
              <ListItem href="/" title="Services">
                Our services are designed to optimize your business operations and deliver top-notch results.
              </ListItem>
              <ListItem href="/" title="Structure">
                Leverage our expertise to manage your projects seamlessly with real-time insights and robust support.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Solutions Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href="/product">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <Logo />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Data Labeling
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        BB, 3D, 2D, Polygon, Key Point etc.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product" title="Weraa solution">
                Unlock the Potential of Your Business with Generative AI Services.
              </ListItem>
              <ListItem href="/product" title="Services">
                Transform Your Platform with Advanced Content Moderation.
              </ListItem>
              <ListItem href="/product" title="Workflow">
                Making your operations as efficient and effective as possible.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Industries Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} href="/" title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Blog Link */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Pricing Link */}
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ListItem Component
const ListItem = React.forwardRef<HTMLDivElement, {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}>(
  ({ className, title, children, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link href={href} passHref>
            <div
              ref={ref}
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
              )}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
