"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { HoverBorderGradient } from "../aceternity/ui/hover-border-gradient";

// ✅ Mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  className?: string;
}) => {
  const isMobile = useIsMobile(); // ✅ detect mobile
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-8 py-6 md:py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.icon}
          key={item?.icon}
          className="relative group block p-1 md:p-2 h-full w-full"
          onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
          onMouseLeave={() => !isMobile && setHoveredIndex(null)}
        >
          <AnimatePresence>
            {!isMobile && hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="bg-gradient-to-t from-amber-50 dark:from-slate-600">
            <CardTitle className="font-bold text-base md:text-3xl text-center">
              {item.title}
            </CardTitle>
            <CardDescription className="">{item.description}</CardDescription>
            <CardDescription className="text-center">
              {item.icon}
            </CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl md:h-60 h-50 w-full border bg-white dark:bg-[#0d0d0d] border-gray-200 dark:border-white/10 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden relative",
        className
      )}
    >
      <div className="flex flex-col justify-between h-full p-6 md:p-8 space-y-4">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-gray-900 dark:text-white font-semibold tracking-wide text-lg md:text-xl whitespace-nowrap overflow-hidden",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-gray-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base space-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

