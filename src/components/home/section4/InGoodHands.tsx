import { MdSmartDisplay } from "react-icons/md";
import { useState } from "react";
import { videoContents } from "./content";

function InGoodHands() {
  const [activeStep, setActiveStep] = useState("Step 1");

  const handleChange = (inputStep: string) => {
    if (activeStep === inputStep) {
      return;
    } else {
      setActiveStep(inputStep);
    }
  };
  return (
    <section className="md:-mt-10 -mt-5 z-40 relative 2xl:mx-auto 2xl:max-w-7xl">
      <div className="bg-white w-full  polygon h-8 md:h-12"></div>
      <div className="bg-white w-full flex -mt-1  px-4 md:px-10 py-28">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 ">
          <h1 className="md:text-[54px] animate__animated animate__fadeIn  transform duration-300 md:max-w-[570px] font-switzerBold  md:leading-[64px] text-center md:text-left text-4xl leading-[50px] text-zwilt-title-200 font-bold">
            How we ensure you're in good hands.
          </h1>
          <p className="md:text-[22px] animate__animated animate__fadeIn transform duration-500 font-switzerRegular text-lg mt-2 leading-[32px] text-zwilt-text-200/80 md:max-w-[646px] ">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>
          <div className="flex flex-col gap-2">
            {videoContents.map((content, i) => (
              <div
                key={i}
                onClick={() => handleChange(content.step)}
                className=" flex flex-col gap-2 p-4 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md"
              >
                <div className="flex space-x-4 items-center">
                  <div
                    className={`w-12 h-12 space-x-4 ${
                      activeStep === content.step
                        ? "bg-zwilt-purple-200"
                        : "bg-gray-200"
                    } rounded-full flex items-center justify-center`}
                  >
                    <MdSmartDisplay
                      fontSize={15}
                      className={` ${
                        activeStep === content.step
                          ? "text-white"
                          : "text-black"
                      }`}
                    />
                  </div>
                  <span className="flex space-x-2">
                    <p className="text-lg font-bold font-switzerBold">
                      {content.step}:
                    </p>
                    <p className="text-lg">{content.title}</p>
                  </span>
                </div>
                {activeStep === content.step && (
                  <p className="text-lg font-switzerRegular animate__animated animate__fadeIn transform duration-700">
                    {content.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InGoodHands;
