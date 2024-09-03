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

// ListItem Component
interface ListItemProps {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, title, children, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link href={href} passHref>
            <div
              ref={ref}
              className={cn(
                "block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-200 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900",
                className
              )}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
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

// Navigation Menu Bar Component
export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-6">
        
        {/* Features Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-4 p-6 md:w-[420px] lg:w-[520px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href="/">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-100 to-gray-300 p-6 no-underline outline-none focus:shadow-md">
                      <Logo />
                      <div className="mb-2 mt-4 text-lg font-semibold text-gray-800">
                        Weraa Tech
                      </div>
                      <p className="text-sm leading-tight text-gray-600">
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
            <ul className="grid gap-4 p-6 md:w-[420px] lg:w-[520px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href="/product">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-100 to-gray-300 p-6 no-underline outline-none focus:shadow-md">
                      <Logo />
                      <div className="mb-2 mt-4 text-lg font-semibold text-gray-800">
                        Data Labeling
                      </div>
                      <p className="text-sm leading-tight text-gray-600">
                        BB, 3D, 2D, Polygon, Key Point, etc.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product" title="Weraa Solution">
                Unlock the potential of your business with Generative AI services.
              </ListItem>
              <ListItem href="#section3" title="Services">
                Transform your platform with advanced content moderation.
              </ListItem>
              <ListItem href="#section4" title="Workflow">
                Making your operations as efficient and effective as possible.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Industries Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-4 p-4 md:w-[520px] md:grid-cols-2 lg:w-[620px]">
              {components.map((component, index) => (
                <ListItem key={index} href="/" title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Blog Link */}
        <NavigationMenuItem>
          <Link href="/blog" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Pricing Link */}
        <NavigationMenuItem>
          <Link href="/pricing" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
