import React, { useState } from "react";
// import translation from "/images/translation.png";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const NavActions = ({ handleModal,handleToggle,isToggle}) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };


  return (
    <div className="flex items-center relative gap-4">
      <div className="lg:flex hidden items-center justify-center gap-4">
        <span className="w-[20%] text-xs text-right text-zinc-700 font-normal">
          For 18 years and above only
        </span>
        <div className="flex lg:flex-row flex-col gap-2 cursor-pointer">
          <button
            onClick={handleModal}
            className="bg-white text-sm px-8 border py-2 font-medium rounded cursor-pointer"
          >
            Download App
          </button>
          <button className="bg-zinc-800 text-white text-sm px-8 border py-2 font-medium rounded">
            Trade Online
          </button>
        </div>
      </div>

      {/* <div className="relative">
        <img
          className="w-[25px] cursor-pointer"
          src={translation}
          alt="translation"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-6 w-32 bg-zinc-100 border rounded shadow-lg z-50">
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                English
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                हिन्दी
              </li>
            </ul>
          </div>
        )}
      </div> */}
      <div className="md:hidden" onClick={handleToggle}>
         {isToggle ? <RxCross1/> : <FaBars/>}
      </div>
    </div>
  );
};

export default NavActions;
