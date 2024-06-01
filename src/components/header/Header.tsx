import Menu from "./Menu";
import zwiltLogo from "../../assets/logo.svg";
import { useState } from "react";

function Header() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex mx-6 items-center justify-between py-2 md:py-3  px-4 bg-zwilt-purple-600 rounded-2xl mt-9 text-zwilt-white">
      <div className="ml-4">
        <img
          src={zwiltLogo}
          alt="Zwilt logo"
          className="md:h-[27.35px] md:w-[112px] h-[25px] w-[100px] "
        />
      </div>

      <div className="md:flex hidden space-x-6 text-sm font-medium">
        <a href="#" className="hover:underline">
          Find work
        </a>
        <a href="#" className="hover:underline">
          Find Talent
        </a>
        <a href="#" className="hover:underline">
          Articles
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </div>

      <div className="md:flex hidden items-center space-x-6">
        <a href="#" className="hover:underline">
          Log In
        </a>
        <a
          href="#"
          className="ml-5 text-sm font-medium px-5 py-3 bg-white text-black rounded-full"
        >
          Join Now
        </a>
      </div>
      <Menu yes={checked} setChecked={setChecked} />
    </div>
  );
}

export default Header;
