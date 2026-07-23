import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-px focus:outline-none"
      onClick={handleClick}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-lg"
        style={{ backgroundColor: "#8B7CDB" }}
      />
      <span
        aria-hidden
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, transparent 40%, transparent 60%, #E2CBFF 100%)",
        }}
      />
      <span
        className={`relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white gap-2 whitespace-nowrap ${otherClasses ?? ""}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
