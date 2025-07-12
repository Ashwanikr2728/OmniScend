"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const content = [
  {
    title: "Collaborative Learning",
    description:
      "Learn together with friends, classmates, and mentors in real time. Share notes, discuss doubts, and solve problems as a team — because learning grows faster when it's shared.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Learning
      </div>
    ),
  },
  {
    title: "Instant Progress Tracking",
    description:
      "Stay updated with your course progress across all devices. From quiz scores to lecture completions, everything syncs automatically — so you never lose track of your journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="progress tracker"
        />
      </div>
    ),
  },
  {
    title: "Seamless Sync",
    description:
      "No more manual saving or repeated uploads. All your notes, lectures, and study material are automatically saved and synced — giving you a smooth, worry-free learning experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Seamless Sync
      </div>
    ),
  },
  {
    title: "Never Run Out of Resources",
    description:
      "Access a growing library of high-quality study materials, practice sets, and interactive content. Whether you're revising or exploring new topics — we've got you covered.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Never Run Out of Resources
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4 custom-scrollbar">
  <StickyScroll content={content} />
</div>

  );
}
