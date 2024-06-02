import React from "react";
import quote from "../../../assets/quote.svg";

const HowItWork = () => {
  return (
    <section className="md:-mt-6 -mt-2 z-35 relative">
      <img
        src={quote}
        alt="quote"
        className="absolute w- top-[5px] right-0 z-[100]"
      />
      <div className="bg-zwilt-purple-900 w-full polygon h-8 md:h-12"></div>
      <div className="bg-zwilt-purple-900 w-full flex -mt-1 pt-[150px] px-4 md:px-10">
        <div className="flex-1">
          <p className=" text-white">Text</p>
        </div>
        <div className="flex-1">
          <p className="text-white">Test</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
