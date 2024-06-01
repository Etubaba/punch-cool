import React, { useState, useRef } from "react";

import heroFaceGIF from "../../../assets/hero-face-gif.gif";
import inputIcon from "../../../assets/input-Icon.svg";
import { skillsChoice } from "./content";

export default function HeroSection() {
  const [selectedField, setSelectedField] = useState("IT & Development");
  const [searchValue, setSearchValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const elementRef = useRef(null);

  //   const handleToggle = () => {
  //     // if (!isSmallScreen) {
  //     if (elementRef.current) {
  //       if (isAtFirstPosition) {
  //         //@ts-ignore
  //         elementRef.current.style.transform = `translateX(220px)`;
  //       } else {
  //         //@ts-ignore
  //         elementRef.current.style.transform = "translateX(0)";
  //       }
  //       setIsAtFirstPosition(!isAtFirstPosition);
  //     }
  //     // }
  //   };

  return (
    <section>
      <div className="relative z-10 2xl:mx-auto 2xl:mx-w-7xl px-4  mb-80">
        <div className="flex flex-col">
          <div className="w-full mt-16 md:mt-36 flex items-center justify-center mb-5">
            <div className="text-center w-full  text-zwilt-title-200   text-4xl  leading-[50px] md:text-[54px] font-bold md:leading-[64px] ">
              <span className="md:flex  block justify-center items-center">
                <h1> Finding the right fit</h1>
                <span className="flex justify-center items-center md:justify-start md:items-start">
                  <img
                    className="md:block "
                    src={heroFaceGIF}
                    width={63}
                    height={43}
                    alt="face gif"
                  />
                </span>
                <h1 className="md:block hidden">has </h1>
              </span>{" "}
              <span className="md:hidden block">has never been easier.</span>{" "}
              <h1 className="md:block hidden">never been easier.</h1>
            </div>
          </div>
          <p className="text-center text-zwilt-text-100 md:text-xl text-lg font-normal  w-full leading-8 md:w-1/2 mx-auto mb-7">
            With our rigorous pre-vetting process, you'll never have to worry
            about finding the ideal candidate ever again.
          </p>
          <div className="relative flex justify-between items-center w-full  md:w-[570px] border border-gray-200 rounded-2xl md:flex md:items-center md:mx-auto   mb-10 ">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Looking for design |"
              className="w-5/6 placeholder-gray-700 placeholder:text-sm py-3 md:py-4 px-6  text-lg font-semibold bg-transparent outline-none"
            />
            <button className="md:w-[74px] md:h-[74px] h-[54px] w-[54px] bg-zwilt-yellow-500 p-3 md:p-6 rounded-2xl">
              <img
                src={inputIcon}
                className="md:w-[25px] md:h-[15px] ml-1 md:ml-0"
                alt="input icon"
              />
            </button>
          </div>
          <div className="flex flex-col bg-zwilt-gray-300 rounded-2xl py-4 px-6 md:px-16  md:mx-auto mb-18 w-full max-w-5xl">
            <div className="w-full justify-center items-center flex">
              <div className="relative md:w-[391px]  flex items-center justify-between  bg-zwilt-gray-200 text-lg font-medium text-center  rounded-lg">
                <div
                  className={`absolute md:block hidden bg-green-200 w-52 h-full rounded-lg transition-transform duration-300 ease  ${
                    currentIndex === 0
                      ? "translate-x-[0]"
                      : "translate-x-[180px]"
                  }`}
                ></div>
                {skillsChoice.map((item, index) => (
                  <div
                    key={index}
                    className={`py-2 z-30 px-6 rounded-lg cursor-pointer`}
                    onClick={() => {
                      setSelectedField(item.field);
                      setCurrentIndex(index);
                    }}
                  >
                    <p
                      className={`md:text-base ${
                        currentIndex === index
                          ? "text-zwilt-title-200"
                          : " md:text-zwilt-title-200 text-zwilt-title-200/55"
                      }  text-sm`}
                    >
                      {item.field}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-6 pb-4">
              {skillsChoice
                .filter((item) => item.field === selectedField)[0]
                .choices.map((option, index) => (
                  <div
                    key={index}
                    className="flex justify-center text-gray-600 cursor-pointer hover:text-black hover:font-bold transition ease"
                  >
                    {option}
                  </div>
                ))}
              <p className="font-semibold text-black flex justify-center">
                Explore More
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
