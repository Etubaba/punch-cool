import Menu from "./Menu";
import zwiltLogo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex mx-4 md:mx-10 shadow-2xl items-center justify-between py-2 md:py-3  px-4 bg-zwilt-purple-600 rounded-2xl mt-9 text-zwilt-white">
      <div className="ml-4">
        <Link to="/">
          <img
            src={zwiltLogo}
            alt="Zwilt logo"
            className="md:h-[27.35px] md:w-[112px] h-[25px] w-[100px] "
          />
        </Link>
      </div>

      <div className="md:flex hidden space-x-6 text-sm font-medium">
        <Link to="/find-work" className="hover:underline">
          Find work
        </Link>
        <Link to="/find-talent" className="hover:underline">
          Find Talent
        </Link>
        <Link to="/articles" className="hover:underline">
          Articles
        </Link>
        <a href="/contact-us" className="hover:underline">
          Contact Us
        </a>
      </div>

      <div className="md:flex hidden items-center space-x-6">
        <Link to="/login" className="hover:underline">
          Log In
        </Link>
        <Link
          to="/learn-more"
          className="ml-5 text-sm font-medium px-5 py-3 bg-white text-black rounded-full"
        >
          Join Now
        </Link>
      </div>
      <Menu yes={checked} setChecked={setChecked} />
      {checked && (
        <div
          className={` md:hidden  w-[21.6rem] mt-12 -ml-4  rounded-xl  mx-10  absolute ${
            !checked && "opacity-0"
          } px-5 py-5 top-12 animate__animated animate__fadeInLeft z-50 flex flex-col text-center h-auto justify-center space-y-3 items-start bg-zwilt-purple-100 `}
        >
          <Link
            to={"/find-work"}
            onClick={() => {
              setChecked(false);
            }}
            className="hover:bg-[#1B242F]/30  text-zwilt-text-100  py-1 w-full rounded-md"
          >
            Find work
          </Link>

          <Link
            to={"/find-talent"}
            onClick={() => {
              setChecked(false);
            }}
            className="hover:bg-[#1B242F]/30 text-zwilt-text-100  py-1 w-full rounded-md"
          >
            Find Talent
          </Link>

          <Link
            to={"/articles"}
            onClick={() => {
              setChecked(false);
            }}
            className="hover:bg-[#1B242F]/30 text-zwilt-text-100  py-1 w-full rounded-md"
          >
            Articles
          </Link>

          <Link
            to={"/contact-us"}
            onClick={() => {
              setChecked(false);
            }}
            className="hover:bg-[#1B242F]/30 text-zwilt-text-100  py-1 w-full rounded-md"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
