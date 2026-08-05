"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { siteConfig } from "@/lib/site";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const portfolioHost = new URL(siteConfig.url).hostname;

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My projects to share with you
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={portfolioHost}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={240}
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 384px, 400px"
                  quality={80}
                  loading="lazy"
                  className="z-10 absolute bottom-0 w-full h-auto object-contain"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                        sizes="32px"
                        loading="lazy"
                        className="p-2 w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
