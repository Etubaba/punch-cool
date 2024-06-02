import { faqContent } from "./content";
import logoPointer from "../../../assets/logopointer.svg";
import { useState } from "react";

const FaqSection = () => {
  const [active, setActive] = useState(-1);
  return (
    <section className="md:-mt-9 -mt-5 z-30 relative 2xl:mx-auto 2xl:mx-w-7xl">
      <div className="bg-zwilt-gray-100 w-full  polygon h-8 md:h-12"></div>
      <div className="bg-zwilt-gray-100 w-full flex -mt-1  py-16">
        <div className="w-full">
          <p className="md:text-5xl text-[32px]  px-4  text-zwilt-title-200 font-bold !text-center mb-10 md:mb-20">
            Frequently asked questions
          </p>

          <div className="flex flex-wrap justify-center border-b ">
            {faqContent.map((faq, idx) => (
              <div className="w-full" key={idx}>
                {faq.questions.map((ques, i) => (
                  <div
                    onMouseEnter={() => setActive(ques.id)}
                    onMouseLeave={() => setActive(-1)}
                    className="border-t border-gray-300 flex flex-col md:flex-row items-center relative"
                    key={i}
                  >
                    <div className="md:w-1/3 md:flex  hidden">
                      <p
                        className={`w-full md:w-56 text-lg font-semibold border-r border-gray-300 text-center py-4 ${
                          ques.category ? "md:block hidden" : "hidden"
                        }`}
                      >
                        {ques.category}
                      </p>
                      <p
                        className={`w-full md:w-56 text-lg font-semibold text-center py-4 ${
                          ques.sub_category ? "block " : "hidden"
                        } ${
                          ques.sub_category ? "border-r border-gray-300" : ""
                        }`}
                      >
                        {ques.sub_category}
                      </p>
                    </div>
                    <div className="flex-1 md:w-2/3 flex justify-between items-center px-6 py-4 hover:bg-gray-200 cursor-pointer transition-colors duration-300">
                      <p
                        className={`text-lg text-center md:text-left text-zwilt-text-100 ${
                          active === ques.id ? "font-semibold" : ""
                        }`}
                      >
                        {ques.question}
                      </p>
                      <img
                        className={` ${
                          active === ques.id ? "opacity-1" : "opacity-0"
                        } transition-opacity duration-300  md:block hidden`}
                        src={logoPointer}
                        alt="logo"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
