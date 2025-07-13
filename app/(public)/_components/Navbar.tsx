"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.jpg";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import { UserDropdown } from "./UserDropdown";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },
];


export function Navbar() {
  const isMediumScreen = useMediaQuery("(min-width: 1436px)");
  const { data: session, isPending } = authClient.useSession();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <>
      <motion.header
        ref={ref}
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
            : "none",
          width: isMediumScreen ? (visible ? "50%" : "100%") : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 30,
        }}
        className={cn(
          "sticky top-4 z-50 max-w-screen-xl mx-auto rounded-full px-4 py-2 border border-indigo-300 dark:border-gray-800",
          visible ? "bg-white/80 dark:bg-neutral-950/80" : "bg-background/95"
        )}
      >
        {/* ✅ Gradient background layer */}
        <div className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-blue-100 via-pink-100 to-transparent dark:from-transparent dark:via-transparent dark:to-transparent" />

        <div className="flex min-h-10 items-center justify-between ">
          <Link href="/" className="flex items-center space-x-2 mr-4">
            <Image src={logo} alt="Logo" className="size-8 rounded-full" />
            <span className="font-bold text-xl">OmniScend</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-between">
            <div className="flex-1 flex justify-center items-center space-x-5">
              {navigationItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className="relative text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>

                  {/* Separator: Only show between items */}
                  {index !== navigationItems.length - 1 && (
                    <span className="h-4 w-px bg-blue-300 dark:bg-gray-700" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {isPending ? null : session ? (
                <UserDropdown
                  email={session.user.email}
                  image={
                    session?.user.image ??
                    `https://avatar.vercel.sh/${session?.user.email}`
                  }
                  name={
                    session?.user.name && session.user.name.length > 0
                      ? session.user.name.charAt(0).toUpperCase()
                      : session?.user.email.split("@")[0]
                  }
                />
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-1.5 rounded-md border border-gray-300 text-gray-700 bg-gray-100 hover:bg-blue-200 hover:text-black transition-colors duration-200 text-sm dark:bg-neutral-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-neutral-700"
                  >
                    Login
                  </Link>

                  <Link href="/register" className={buttonVariants()}>
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Nav Toggle and Avatar */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            {isPending ? null : session ? (
              <UserDropdown
                email={session.user.email}
                image={
                  session?.user.image ??
                  `https://avatar.vercel.sh/${session?.user.email}`
                }
                name={
                  session?.user.name && session.user.name.length > 0
                    ? session.user.name.charAt(0).toUpperCase()
                    : session?.user.email.split("@")[0]
                }
              />
            ) : (
              <>
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "hidden md:block hover:bg-amber-400"
                  )}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className={cn(buttonVariants(), "hidden md:block")}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </motion.header>
    </>
  );
}
