import { ourTalents } from "./content";
import skillsIcon from "../../../assets/section-two/skills.svg";
import categoriesIcon from "../../../assets/section-two/categories.svg";
import profileIcon from "../../../assets/section-two/profiles.svg";
import Button from "../../common/Button";

const BrandSection = () => {
  return (
    <section className="md:-mt-6 -mt-2 z-30">
      <div className=" bg-zwilt-purple-100  w-full polygon h-8 md:h-12"></div>
      <div className=" bg-zwilt-purple-100  -mt-2 md:py-20 py-10 px-4 md:px-10">
        <div className="text-center mb-16 md:px-24">
          <p className="md:text-[54px] font-switzerBold  text-3xl leading-[50px] md:leading-[64px]  font-bold text-zwilt-title-200">
            Your one-stop marketplace for finding the talent your business
            needs.
          </p>
        </div>

        <div className=" flex md:flex-row font-switzerRegular flex-col space-y-4 md:space-y-0 md:space-x-28">
          <div className="md:w-1/3 md:mt-6 md:mb-0  mb-10">
            <p className="text-xl font-bold mb-4 ">
              Find Dev and IT professionals to scale your business.
            </p>
            <div className="flex flex-col  !items-start space-y-4">
              <div className="flex space-x-3 md:space-x-6 ">
                <div className="flex space-x-2">
                  <img src={skillsIcon} alt="skillsIcon" className="w-6 h-6" />
                  <p className="text-zwilt-titl2-200/60">989 skills</p>
                </div>
                <div className="flex  space-x-2">
                  <img
                    src={categoriesIcon}
                    alt="skillsIcon"
                    className="w-6 h-6"
                  />
                  <p>45 sub-categories</p>
                </div>
              </div>
              <div className="flex  items-start justify-start mt-2 space-x-2">
                <img src={profileIcon} alt="skillsIcon" className="w-6 h-6" />
                <p>1011 profile</p>
              </div>
            </div>
          </div>

          {ourTalents
            .filter((_, idx) => idx === 0)
            .map((item, idx) => (
              <div
                key={idx}
                className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg mt-8"
              >
                <p className="text-lg font-medium mb-4">{item.title}</p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3   lg:hidden place-content-center">
                  {item.stack.map((stack, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center flex-col"
                    >
                      <div
                        className={`w-16 h-16 flex items-center justify-center ${
                          stack.name ? "rounded-full" : "rounded-lg"
                        } bg-gray-200`}
                      >
                        <img
                          className="w-8 h-8"
                          alt={stack.name}
                          src={stack.image}
                        />
                      </div>
                      <p className="mt-2 text-sm font-semibold break-words">
                        {stack.name}&nbsp;&nbsp;
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-x-7 hidden lg:flex ">
                  {item.stack.map((stack, index) => (
                    <div key={index} className=" ">
                      <div
                        className={`w-24 h-24 flex items-center justify-center ${
                          stack.name ? "rounded-full" : "rounded-lg"
                        } bg-gray-200`}
                      >
                        <img
                          className="w-8 h-8"
                          alt={stack.name}
                          src={stack.image}
                        />
                      </div>
                      <p className="mt-2 text-sm font-semibold max-w-[68px] ml-5 break-words">
                        {stack.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="mt-10 flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-28">
          <div className="md:w-1/3 md:mt-6 md:mb-0  mb-10">
            <p className="text-xl font-bold mb-4 ">
              Explore Creative individuals with a keen eye for detail.
            </p>
            <div className="flex flex-col !items-start space-y-4">
              <div className="flex space-x-3 md:space-x-6 ">
                <div className="flex space-x-2">
                  <img src={skillsIcon} alt="skillsIcon" className="w-6 h-6" />
                  <p className="text-zwilt-titl2-200/60">989 skills</p>
                </div>
                <div className="flex  space-x-2">
                  <img
                    src={categoriesIcon}
                    alt="skillsIcon"
                    className="w-6 h-6"
                  />
                  <p>45 sub-categories</p>
                </div>
              </div>

              <div className="flex  mt-2 space-x-2">
                <img src={profileIcon} alt="skillsIcon" className="w-6 h-6" />
                <p>1011 profile</p>
              </div>
            </div>
          </div>

          {ourTalents
            .filter((_, idx) => idx === 1)
            .map((item, idx) => (
              <div
                key={idx}
                className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg mt-8"
              >
                <p className="text-lg font-medium mb-4">{item.title}</p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3  place-content-center  lg:hidden ">
                  {item.stack.map((stack, index) => (
                    <div
                      key={index}
                      className=" flex justify-center items-center flex-col"
                    >
                      <div
                        className={`w-16 h-16 flex items-center justify-center ${
                          stack.name ? "rounded-full" : "rounded-lg"
                        } bg-gray-200`}
                      >
                        <img
                          className="w-8 h-8"
                          alt={stack.name}
                          src={stack.image}
                        />
                      </div>
                      <p className="mt-2 text-sm font-semibold break-words">
                        {stack.name}&nbsp;&nbsp;
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-x-7 hidden lg:flex ">
                  {item.stack.map((stack, index) => (
                    <div key={index} className=" ">
                      <div
                        className={`w-24 h-24 flex items-center justify-center ${
                          stack.name ? "rounded-full" : "rounded-lg"
                        } bg-gray-200`}
                      >
                        <img
                          className="w-8 h-8"
                          alt={stack.name}
                          src={stack.image}
                        />
                      </div>
                      <p className="mt-2 text-sm font-semibold max-w-[68px] ml-5 break-words">
                        {stack.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="flex mt-5 md:flex-row  flex-col w-full items-center justify-center md:justify-start  md:space-x-10 ">
          <div className=" md:w-1/3">
            <Button text="Explore more" />
          </div>
          <div className="md:w-2/3 text-center mt-2 md:!text-left">
            <p>
              {" "}
              <b className="text-zwilt-title-200/90">30 more</b> to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BrandSection;
