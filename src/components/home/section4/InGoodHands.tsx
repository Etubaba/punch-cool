import { MdSmartDisplay } from "react-icons/md";
import { useState } from "react";
import { videoContents } from "./content";

function InGoodHands() {
  const [activeStep, setActiveStep] = useState("Step 1");

  //   const VideosSec = [
  //     {
  //       background: "#EDEFFF",
  //       videoNum: vid1Num,
  //       videoImg: vid1Img,
  //       title: "Find your next star performer",
  //       body: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
  //       buttonTitle: "Join Now",
  //     },
  //     {
  //       background: "#FFF7E1",
  //       videoNum: vid2Num,
  //       videoImg: vid2Img,
  //       title: "Evaluate to your heart’s content.",
  //       body: "Assess the candidate through work history, transparent tests and video interviews.",
  //       buttonTitle: "Browse More",
  //     },
  //     {
  //       background: "#F3F3F3",
  //       videoNum: vid3Num,
  //       videoImg: vid3Img,
  //       title: "Start  building your team",
  //       body: "Onboard your candidate right away and start creating the next big thing.",
  //       buttonTitle: "Join Now",
  //     },
  //   ];

  const handleChange = (inputStep: string) => {
    if (activeStep === inputStep) {
      return;
    } else {
      setActiveStep(inputStep);
    }
  };
  return (
    <section className="md:-mt-10 -mt-5 z-40 relative 2xl:mx-auto 2xl:mx-w-7xl">
      <div className="bg-white w-full  polygon h-8 md:h-12"></div>
      <div className="bg-white w-full flex -mt-1  px-4 md:px-10 py-28">
        <div className="flex flex-col gap-4 md:w-1/2 ">
          <h1 className="text-[54px] md:max-w-[570px] leading-[64px] text-zwilt-title-200 font-bold">
            How we ensure you're in good hands.
          </h1>
          <p className="text-[22px] mt-2 leading-[32px] text-zwilt-text-200/80 md:max-w-[646px] ">
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
                    <p className="text-lg font-bold">{content.step}:</p>
                    <p className="text-lg">{content.title}</p>
                  </span>
                </div>
                {activeStep === content.step && (
                  <p className="text-lg animate__animated animate__fadeIn">
                    {content.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <div className='flex flex-col gap-4'>
        <p className='text-4xl font-bold'>Start your journey today.</p>
        {VideosSec.map((videos) => (
          <div className='flex gap-4 p-4 bg-white rounded-lg shadow-md'>
            <div className='flex gap-2'>
              <img src={videos.videoNum} alt='video Number' height={83} />
              <div className='flex flex-col gap-2'>
                <p className='text-2xl font-bold'>{videos.title}</p>
                <p className='text-lg'>{videos.body}</p>
                 <ButtonMini text={videos.buttonTitle} /> 
              </div>
            </div>
            <div className='hidden md:block'>
              <img src={videos.videoImg} alt='alt picture' />
            </div>
          </div>
        ))}
      </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default InGoodHands;
