import React from "react";
import NavItems from "./utils/NavItems";
import NavActions from "./utils/NavActions";
import AppDownloadModal from "./utils/AppDownloadModal";
import { useDataContext } from "../context/Context";
import MobileNav from "./utils/MobileNav";

const Navbar = () => {
  const { isModal, isToggle, handleToggle,handleModal, data, selectedIndex, handleTabChange } = useDataContext();
  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-zinc-100 z-[999]">
        <div className="max-w-[1400px] border-b p-4 mx-auto flex items-center justify-between">
          <NavItems />
          <NavActions handleModal={handleModal} isToggle={isToggle} handleToggle={handleToggle}/>
          <MobileNav isToggle={isToggle} handleModal={handleModal}/>
        </div>
      </div>
      {isToggle && <div className="absolute inset-0 bg-black opacity-20 md:hidden"></div>}
      <AppDownloadModal
        isModal={isModal}
        handleModal={handleModal}
        data={data}
        selectedIndex={selectedIndex}
        handleTabChange={handleTabChange}
      />
    </>
  );
};

export default Navbar;
