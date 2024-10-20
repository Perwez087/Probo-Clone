import React from "react";
import { GoArrowRight } from "react-icons/go";
import left from "/images/person-left.png";
import right from "/images/person-right.png";
import AppDownloadModal from "./utils/AppDownloadModal";
import { useDataContext } from "../context/Context";

const Opinions = () => {
  const { isModal, handleModal, data, selectedIndex, handleTabChange } = useDataContext();
  
  return (
    <div className="w-full bg-gradient-to-r from-zinc-800 to-zinc-950">
      <div className="max-w-[1400px] mx-auto p-10 pb-0">
        <div className="flex flex-col md:items-center items-start justify-center gap-8 text-white">
          <h1 className="md:text-center lg:text-8xl md:text-6xl text-3xl mt-6">
            What will be the return <br /> on your opinions?
          </h1>
          <div onClick={handleModal} className="lg:mt-8 flex items-center cursor-pointer gap-2 border md:px-10 px-4 py-2 md:py-5 rounded-full">
            <button className="lg:text-xl font-medium">Download App</button>
            <span>
              <GoArrowRight size={25} />
            </span>
          </div>
        </div>

        <div className="flex items-center md:justify-between justify-center mt-8">
          <img className="md:w-[25%] w-[50%]" src={left} alt="" />
          <img className="md:w-[25%] w-[50%]" src={right} alt="" />
        </div>
      </div>
      <AppDownloadModal
        isModal={isModal}
        handleModal={handleModal}
        data={data}
        selectedIndex={selectedIndex}
        handleTabChange={handleTabChange}
      />
    </div>
  );
};

export default Opinions;
