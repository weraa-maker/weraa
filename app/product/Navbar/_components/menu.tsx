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

const components: { title: string; description: string }[] = [
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

    description: "Accurate and scalable data labeling enables the efficient processing of agricultural data, driving innovation and operational efficiency.",
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




export function NavigationMenuBar() {
  return (
    <NavigationMenu
    

    >
      <NavigationMenuList
      className="hidden md:flex md:space-x-4"
      
      >
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Bird Software
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      eCommerce for everyone.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product" title="Product">
                Learn about the project goals and how to get started.
              </ListItem>
              <ListItem href="/" title="Demo">
                How to build a store in 60 seconds with Bird.
              </ListItem>
              <ListItem href="/" title="Community">
                Join the community and get help with your project.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
      
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
      
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Enterprise
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem

        
        >
          <Link href="/pricing" legacyBehavior passHref>
          <div>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
