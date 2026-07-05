"use client";

import { useInView } from "@/lib/useInView";

type LazyVideoProps = {
  src: string;
  className?: string;
};

export function LazyVideo({ src, className }: LazyVideoProps) {
  const { ref, inView } = useInView({ rootMargin: "100px" });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="object-cover object-center w-full h-full"
        />
      )}
    </div>
  );
}
