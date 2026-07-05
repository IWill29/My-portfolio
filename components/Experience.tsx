import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const cardStyle = {
  background: "rgb(4,7,29)",
  backgroundColor:
    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
  borderRadius: "calc(1.75rem* 0.96)",
};

const ExperienceCard = ({ card }: { card: (typeof workExperience)[number] }) => (
  <Button
    duration={10000 + card.id * 2500}
    borderRadius="1.75rem"
    style={cardStyle}
    containerClassName="block w-full h-full"
    className="h-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
  >
    <div className="flex lg:flex-row flex-col lg:items-center justify-center items-center p-3 py-6 md:p-5 lg:p-10 gap-2 text-white min-h-44">
      <div className="relative lg:w-36 md:w-28 w-24 h-16 shrink-0 flex items-center justify-center">
        <Image
          src={card.thumbnail}
          alt={card.title}
          width={144}
          height={64}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="lg:ms-5">
        <h1 className="text-start text-xl md:text-2xl font-bold line-clamp-2">
          {card.title}
        </h1>
        <p className="text-start text-white-100 mt-3 font-semibold line-clamp-3">
          {card.desc}
        </p>
      </div>
    </div>
  </Button>
);

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">experience</span>
      </h1>

      <div className="flex flex-wrap items-stretch justify-center gap-10 mt-12">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="flex"
            style={{ flex: "1 1 420px", maxWidth: "520px" }}
          >
            <ExperienceCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
