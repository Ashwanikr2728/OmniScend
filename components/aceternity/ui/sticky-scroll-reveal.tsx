"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan to emerald
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink to indigo
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange to yellow
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div className="relative flex h-[35rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 bg-white/10 backdrop-blur-md shadow-2xl dark:bg-[#0f172a]/40"
>
      <div className="relative flex items-start px-4 max-w-2xl w-full">
        <div className="w-full">
          {content.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              margin: "-40% 0px -40% 0px",
              amount: 0.5,
            });

            useEffect(() => {
              if (isInView) setActiveCard(index);
            }, [isInView]);

            return (
              <div
                key={item.title + index}
                ref={ref}
                className="my-24 md:my-28 space-y-4"
              >
                <motion.h2
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    y: activeCard === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-black dark:text-white"

                >
                  {item.title}
                </motion.h2>
                <motion.p
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                    y: activeCard === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 max-w-md text-base md:text-lg text-black dark:text-white"

                >
                  {item.description}
                </motion.p>
              </div>
            );
          })}
          <div className="h-40" />
        </div>
      </div>

      {/* Sticky Preview Card */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-72 w-96 overflow-hidden rounded-xl bg-white/10 backdrop-blur-md shadow-xl lg:block"
,
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
