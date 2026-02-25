/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { BackgroundBeams } from "./ui/Beams";

const Footer = () => {
  return (
    <footer className="relative p-6 h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden" id="contact">
      <BackgroundBeams className="absolute inset-0 w-full h-full z-0" />

      <div className="relative z-10 flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="heading lg:max-w-[45vw]">
            Let&lsquo;s work together on your next project
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&lsquo;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:agnis.kulakovs@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center px-4 py-10">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2026 Agnis Kulakovs
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
