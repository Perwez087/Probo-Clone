import React from "react";
import logo from "/images/logo.png";

const NavItems = () => {
  return (
    <div className="flex items-center gap-14">
      <img className="w-[105px]" src={logo} alt="logo" />
      <nav>
        <ul className="md:flex hidden items-center gap-10 text-sm text-zinc-700 font-normal">
          <li className="cursor-pointer">Trading</li>
          <li className="cursor-pointer">Team 11</li>
          <li className="cursor-pointer">Read</li>
          <li className="cursor-pointer">Cares</li>
          <li className="cursor-pointer">Careers</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavItems;
