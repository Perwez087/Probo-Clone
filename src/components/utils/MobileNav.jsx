import React from "react";

const MobileNav = ({isToggle,handleModal}) => {
  
  return (
    <div
      className={`fixed top-[65px] right-0 bg-zinc-100 h-full w-60 md:hidden flex flex-col p-6 transform transition-transform duration-300 ease-in-out ${
        isToggle ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="flex-grow">
        <ul className="flex flex-col gap-6 text-sm text-zinc-700 font-normal text-[16px]">
          <li className="cursor-pointer">Trading</li>
          <li className="cursor-pointer">Team 11</li>
          <li className="cursor-pointer">Read</li>
          <li className="cursor-pointer">Cares</li>
          <li className="cursor-pointer">Careers</li>
        </ul>
        <div className="py-8">
          <button
            onClick={handleModal}
            className="bg-white text-sm whitespace-nowrap px-8 border w-full py-2 font-medium rounded cursor-pointer"
          >
            Download App
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
