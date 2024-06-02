import quote from "../../../assets/quote.svg";
import groove from "../../../assets/groove.svg";
import grooveLogo from "../../../assets/groove-box.png";
import grooveFace from "../../../assets/grooveface.png";
import leftIcon from "../../../assets/leftIcon.png";
import rightIcon from "../../../assets/rightIcon.png";
import { useState } from "react";

const HowItWork = () => {
  const [backgroundImage, setBackgroundImage] = useState(false);

  const handleMouseEnter = () => {
    setBackgroundImage(true);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(false);
  };

  return (
    <section className="md:-mt-6 -mt-2 z-35 relative 2xl:mx-auto 2xl:mx-w-7xl">
      <img
        src={quote}
        alt="quote"
        className="absolute -mt-0.5 md:-mt-[1px] -rotate-2 w-[95px] h-[65px]   md:h-[175px] md:w-[221px] top-[5px] right-0 md:right-3 z-[100]"
      />
      <div className="bg-zwilt-purple-900 w-full  polygon h-8 md:h-12"></div>
      <div className="bg-zwilt-purple-900 w-full flex -mt-1 pt-[150px] px-4 md:px-10 py-20">
        <div className="flex md:flex-row flex-col md:w-[90%] justify-between">
          <div>
            <div className="md:text-[54px] text-[48px] leading-10 md:leading-[64px] font-bold text-white">
              <h1 className="md:max-w-[379px] ">How it worked</h1>
              <span className="flex space-x-2">
                <h1 className="mr-1"> for jason</h1>
                <span className="mt-1">
                  <img
                    className="md:block rounded-full w-[40px] h-[40px] md:w-[57px] md:h-[57px]"
                    src={grooveFace}
                    alt="face"
                  />
                </span>
                <h1>at</h1>
              </span>
              <div className="mt-3">
                <img
                  src={groove}
                  alt=""
                  className="md:w-[192px] w-[150px] h-[50.69px]"
                />
              </div>
            </div>

            <div className="text-[22px] leading-[32px] mt-5 md:mt-10 text-white md:max-w-[461px]">
              <p>
                Zwilt enabled us to deliver on time and they've been heavy
                hitters in our corner since.
              </p>
            </div>

            <div className="flex space-x-4 mt-8 mb-16  md:mb-0">
              <div className="cursor-pointer">
                <img
                  src={leftIcon}
                  className="w-[49.79px] h-[49.79px]"
                  alt=""
                />
              </div>
              <div className="cursor-pointer">
                <img
                  src={rightIcon}
                  className="w-[49.79px] h-[49.79px]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="md:mt-28">
            <div className="flex space-x-3">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className=" w-[99px] h-[99px] rounded-[40.05px]"
                  src={!backgroundImage ? grooveLogo : grooveFace}
                  alt=""
                />
              </div>

              <div>
                <h1 className="text-white font-bold text-[34px] leading-[44px]">
                  Jason Makki
                </h1>
                <p className="text-base text-white/50">
                  Engineer at <b>GROOVE</b>
                </p>
                <p className="text-base text-white/50">San Francisco</p>
              </div>
            </div>
            <div className=" max-w-full md:max-w-[400px]">
              <p className="text-white mt-6 md:mt-10">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
