import Button from "../../common/Button";
import { journeySteps } from "./content";

const StartJourney = () => {
  return (
    <section className="">
      <div className="2xl:mx-auto 2xl:mx-w-7xl md:my-20 px-4 md:px-10 ">
        <p className="md:text-[54px] text-[32px] leading-[55px] text-center font-bold md:leading-[64px] mb-[40px]  ">
          Start your journey today.
        </p>

        <div className="flex flex-col -space-y-5">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className={`flex ${
                idx === 0
                  ? "bg-zwilt-purple-100"
                  : idx === 1
                  ? "bg-zwilt-yellow-100"
                  : "bg-zwilt-gray-100"
              } justify-between items-center  p-[24px] h-[387.5px] overflow-hidden`}
              style={{
                clipPath: "polygon(0 65px, 100% 0, 100% 85%, 0 100%)",
              }}
            >
              <div className="flex">
                <div className="md:-mt-1">
                  <img
                    src={step.imageNumber}
                    className="md:h-[83px] h-[60px]"
                    alt="number"
                  />
                </div>
                <div className="flex flex-col  ml-4 md:ml-[20px] md:w-[407px]">
                  <p className="mb-6 text-[34px] text-zwilt-title-200 max-w-[260px]  md:max-w-[250px] font-bold leading-[44px] text-left md:text-[28px] md:leading-[34px]">
                    {step.title}
                  </p>
                  <p className="text-base mb-4 text-zwilt-text-200/80 font-normal leading-[24px] text-left">
                    {step.content}
                  </p>
                  <Button size="sm" text={step.buttonText} />
                </div>
              </div>
              <div className="-mt-12 md:block hidden">
                <img
                  src={step.image}
                  className="md:w-[460px] md:h-[380px] "
                  alt="developer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartJourney;
