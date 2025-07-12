import { cn } from "@/lib/utils";
import React from "react";

export function GridBackgroundEffect() {
  return (
    <>
    
   {/* Grid + Fade Effect */}
     <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block">
  {/* Softer, balanced Grid */}
  <div
    className={cn(
      "absolute inset-0",
      "[background-size:36px_36px]", // medium spacing
      "[background-image:linear-gradient(to_right,#242424_1px,transparent_1px),linear-gradient(to_bottom,#242424_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,#242424_1px,transparent_1px),linear-gradient(to_bottom,#242424_1px,transparent_1px)]"
    )}
  />

  {/* Smooth radial fade edges */}
  <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]" />
</div>


      </>
  );
}
