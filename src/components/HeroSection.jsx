import React, { useEffect, useState } from "react";
import Button from "./utils/Button";
import header from "/images/header.png";
import AppDownloadModal from "./utils/AppDownloadModal";
import { useDataContext } from "../context/Context";

const HeroSection = () => {
  const { isModal, handleModal, data, selectedIndex, handleTabChange } = useDataContext();
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="w-full border p-4">
      <div className="max-w-[1400px] m-auto flex md:flex-row flex-col md:mt-0 mt-8 md:items-center items-center justify-between py-10">
        <div className="flex flex-col justify-start gap-6">
          <div className="text-zinc-800">
            <h1 className="xl:text-[88px] text-[55px] leading-tight">
              Invest in your{" "}
            </h1>
            <span className="lg:text-[60px] text-[40px] leading-[50px]">
              point of view
            </span>
          </div>
          <p className="lg:text-[25px] text-[16px] text-zinc-600">
            Sports, Entertainment, Economy or Finance.
          </p>
          <div className="mt-10">
            <Button isChecked={isChecked} handleModal={handleModal} />
          </div>
          <div className="flex items-center gap-1">
            <input
              className="accent-black"
              onChange={handleCheck}
              type="checkbox"
              checked={isChecked}
            />
            <span className="text-xs font-semibold text-zinc-600">
              For 18 years and above only
            </span>
          </div>
        </div>
        <div>
          <img className="w-[580px]" src={header} alt="" />
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

export default HeroSection;
