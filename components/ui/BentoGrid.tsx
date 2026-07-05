"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { techStackIcons } from "@/data";
import GridGlobe from "./GridGlobe";
import { LazyVideo } from "./LazyVideo";
import MagicButton from "../MagicButton";

type LottieModule = typeof import("lottie-react");

function normalizeImageSrc(src: string) {
  return src.startsWith("/") ? src : `/${src}`;
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareVideo,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareVideo?: string;
}) => {
  const stackMidpoint = Math.ceil(techStackIcons.length / 2);
  const leftLists = techStackIcons.slice(0, stackMidpoint);
  const rightLists = techStackIcons.slice(stackMidpoint);

  const [copied, setCopied] = useState(false);
  const [confetti, setConfetti] = useState<{
    Lottie: LottieModule["default"];
    animationData: object;
  } | null>(null);

  const handleCopy = async () => {
    const text = "agnis.kulakovs@gmail.com";
    await navigator.clipboard.writeText(text);
    setCopied(true);

    if (!confetti) {
      const [{ default: Lottie }, { default: animationData }] = await Promise.all([
        import("lottie-react"),
        import("@/data/confetti.json"),
      ]);
      setConfetti({ Lottie, animationData });
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={normalizeImageSrc(img)}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              priority={id === 1}
              loading={id === 1 ? undefined : "lazy"}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareVideo && (
            <LazyVideo
              src={spareVideo}
              className="w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-20 flex flex-col px-5 p-5 lg:",
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <div
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center"
                  >
                    <Image
                      src={item}
                      alt="tech"
                      width={32}
                      height={32}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
                <div className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></div>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <div className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></div>
                {rightLists.map((item, i) => (
                  <div
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E] w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center"
                  >
                    <Image
                      src={item}
                      alt="tech"
                      width={32}
                      height={32}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {copied && confetti && (
                <div className="absolute -bottom-5 right-0">
                  <confetti.Lottie
                    loop
                    autoplay
                    animationData={confetti.animationData}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice",
                    }}
                    style={{ height: 200, width: 400 }}
                  />
                </div>
              )}

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
