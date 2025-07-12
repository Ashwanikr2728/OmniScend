"use client";

import React from "react";
import {
  FaAmazon,
  FaMicrosoft,
  FaShoppingCart,
  FaUniversity,
  FaGoogle,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const brands = [
  { icon: <FaAmazon size={32} className="text-[#FF9900]" />, name: "Amazon" },
  {
    icon: <FaMicrosoft size={32} className="text-[#737373]" />,
    name: "Microsoft",
  },
  {
    icon: <FaShoppingCart size={32} className="text-[#2874F0]" />,
    name: "Flipkart",
  },
  {
    icon: <FaUniversity size={32} className="text-[#003865]" />,
    name: "J.P. Morgan",
  },
  { icon: <FaGoogle size={32} className="text-[#DB4437]" />, name: "Google" },
  { icon: <FaApple size={32} className="text-[#A2AAAD]" />, name: "Apple" },
  {
    icon: <FaFacebook size={32} className="text-[#1877F2]" />,
    name: "Facebook",
  },
  { icon: <FaTwitter size={32} className="text-[#1DA1F2]" />, name: "Twitter" },
  {
    icon: <FaLinkedin size={32} className="text-[#0077B5]" />,
    name: "LinkedIn",
  },
  { icon: <FaGithub size={32} className="text-[#333]" />, name: "GitHub" },
  { icon: <FaYoutube size={32} className="text-[#FF0000]" />, name: "YouTube" },
];

export function InfiniteBrandMarquee() {
  return (
    <>
      <div className="relative w-full overflow-hidden border-t border-black border-b my-16 dark:border-white/10 py-4 dark:bg-black">
        <div className="animate-scroll flex whitespace-nowrap gap-16">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 min-w-fit text-xl font-medium text-black dark:text-white"
            >
              {brand.icon}
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
