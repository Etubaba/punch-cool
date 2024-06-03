import React from "react";
import inputIcon from "../../../assets/input-Icon.svg";
import { useSearchStore } from "../../../store";

const SearchInput = () => {
  const searchValue = useSearchStore((state) => state.searchValue);
  const handleSearch = useSearchStore((state) => state.handleSearch);

  return (
    <div className="relative flex justify-between items-center w-full  md:w-[570px] border border-gray-200 rounded-2xl md:flex md:items-center md:mx-auto   mb-10 ">
      <input
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
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
  );
};

export default SearchInput;
