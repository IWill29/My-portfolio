"use client";

import dynamic from "next/dynamic";
import { FaDownload, FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const BackgroundBeams = dynamic(
  () => import("./ui/Beams").then((mod) => mod.BackgroundBeams),
  { ssr: false },
);

const Spotlight = dynamic(
  () => import("./ui/Spotlight").then((mod) => mod.Spotlight),
  { ssr: false },
);

const Hero = () => {
  return (
    <div className="relative h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      <BackgroundBeams className="absolute inset-0 w-full h-full z-0 bg-black-100" />

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="white"
        />
      </div>

      <div className="flex items-center justify-center h-full relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            My Portfolio with Next.js
          </p>

          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-white my-4 leading-snug tracking-wide">
            Full Stack Developer
          </h1>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Agnis, a Full-Stack Developer based in Latvia.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
            <a href="#about" className="inline-flex shrink-0">
              <MagicButton
                title="Watch my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <span className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl md:mt-10 lowercase shrink-0">
              or
            </span>
            <a
              href="/Agnis_Kulakovs_CV.docx"
              download="Agnis_Kulakovs_CV.docx"
              className="inline-flex shrink-0"
            >
              <MagicButton
                title="Download CV"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
