import buttonIcon from "../../assets/button-icon.svg";
import zwiltLogo from "../../assets/logo.svg";
import { footerLinks } from "./content";

function Footer() {
  return (
    <div className="md:-mt-9 -mt-5 z-30 relative 2xl:mx-auto 2xl:mx-w-7xl">
      <div className="bg-zwilt-dark-300 w-full polygon h-8 md:h-12"></div>
      <div className="2xl:mx-auto 2xl:mx-w-7xl bg-gradient-to-b -mt-2 from-zwilt-dark-300 to-zwilt-dark-400 px-10 pt-10   ">
        <div
          style={{
            clipPath:
              window.innerWidth > 500
                ? "polygon(0 65px, 100% 0, 100% 85%, 0 100%)"
                : "polygon(0 35px, 100% 0, 100% 90%, 0 100%)",
          }}
          className="bg-zwilt-purple-600 py-24 lg:py-32   flex flex-col items-center"
        >
          <p className="text-white mt-8 md:mt-0 md:max-w-[683px] text-2xl lg:text-5xl font-semibold text-center mb-9">
            Need a job done, and done well? Get started
          </p>
          <div className="md:w-16 md:h-16 h-12 w-12 rounded-[14px] md:rounded-[25px] bg-zwilt-dark-400 flex items-center justify-center">
            <img
              src={buttonIcon}
              alt="Button Icon"
              className="transform rotate-90 w-[20px] h-[20px] md:w-[24.91px] md:h-[14.95px]"
            />
          </div>
        </div>

        <div>
          <div className="mt-24 lg:mt-36 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
            <div className="w-full lg:w-72 text-white">
              <img src={zwiltLogo} alt="Logo" className="" />
              <p className="my-8 text-sm">
                We take complex hiring processes - and simplify them. Connecting
                you to the world's highly qualified talent pool.
              </p>
              <p className="text-gray-500 text-sm font-semibold mb-4">
                LINKS AND REDIRECTS
              </p>
              <div className="flex gap-2">
                <button className="bg-zwilt-dark-200 hover:bg-zwilt-dark-200/80 text-white px-7 py-3 rounded-[20.27px]">
                  Hire now
                </button>
                <button className="bg-zwilt-dark-200 hover:bg-zwilt-dark-200/80 text-white px-6 py-3 rounded-[20.27px]">
                  Apply now
                </button>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white text-4xl md::text-[54px] leading-[44px] md:text-5xl font-semibold mb-16">
                Connecting the right people to the right businesses.
              </p>
              <div className="md:flex grid grid-cols-2 md:justify-between gap-8">
                {footerLinks.map((link, i) => (
                  <div key={i} className="flex flex-col ">
                    <p className="text-gray-500 text-sm font-semibold mb-4">
                      {link.category}
                    </p>
                    <div className="flex flex-col space-y-2">
                      {link.links.map((item, idx) => (
                        <a
                          key={idx}
                          className="text-white link relative text-lg  transition duration-300"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-gradient-to-r from-white to-zwilt-dark-200 h-[0.5px] w-full"></div>
            <div className="flex  flex-col lg:flex-row justify-between items-center  py-2.5 text-white">
              <p className="text-base font-medium">
                All rights reserved by Zwilt
              </p>
              <div className="flex space-x-6 lg:mt-0">
                <a className="underline text-gray-500 cursor-pointer">
                  Privacy Policy
                </a>
                <a className="underline text-gray-500 cursor-pointer">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
