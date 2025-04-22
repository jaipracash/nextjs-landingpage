"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Web Development",
    href: "/services/web",
    description: "Custom websites and web applications for your business",
  },
  {
    title: "Mobile Apps",
    href: "/services/mobile",
    description: "iOS and Android applications built with modern technologies",
  },
  {
    title: "UI/UX Design",
    href: "/services/design",
    description: "Beautiful interfaces that enhance user experience",
  },
  {
    title: "Consulting",
    href: "/services/consulting",
    description: "Expert advice to grow your digital presence",
  },
]

export function MainNav() {
  return (
    <div className="sticky top-0 z-50 shadow-md">
      {/* Top Account Navigation - Increased height */}
      <nav className="bg-[#2a7f6a] text-white">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3 px-6">
          <div className="flex items-center space-x-1">
            <span className="text-sm">Welcome to our store!</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/account" className="text-sm hover:underline hover:text-gray-100 transition-colors">
              My Account
            </Link>
            <Link href="/support" className="text-sm hover:underline hover:text-gray-100 transition-colors">
              Support
            </Link>
            <Link href="/contact" className="text-sm hover:underline hover:text-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Navigation - Increased height */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-[#2a7f6a] p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
              TechSolutions
            </span>
          </Link>

          {/* Mobile menu button */}
          <button 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
            aria-controls="navbar-default" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden w-full md:flex md:w-auto md:items-center" id="navbar-default">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-[#2a7f6a] h-12"
                    )}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-gray-700 hover:text-[#2a7f6a] h-12">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-[#2a7f6a] h-12"
                    )}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-[#2a7f6a] h-12"
                    )}>
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-[#2a7f6a] h-12"
                    )}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="ml-4">
                  <Button className="bg-[#2a7f6a] hover:bg-[#1f6b58] text-white h-12 px-6 shadow-sm transition-colors">
                    Get Started
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </div>
  )
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50",
            "text-gray-800 hover:text-[#2a7f6a]",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"