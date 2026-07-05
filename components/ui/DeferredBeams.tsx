"use client";

import { useInView } from "@/lib/useInView";
import { BackgroundBeams } from "./Beams";
import { cn } from "@/lib/utils";

type DeferredBeamsProps = {
  className?: string;
};

export function DeferredBeams({ className }: DeferredBeamsProps) {
  const { ref, inView } = useInView({ rootMargin: "300px" });

  return (
    <div ref={ref} className="absolute inset-0">
      {inView ? (
        <BackgroundBeams className={cn("absolute inset-0 w-full h-full z-0", className)} />
      ) : (
        <div className={cn("absolute inset-0 w-full h-full z-0 bg-black-100", className)} />
      )}
    </div>
  );
}
