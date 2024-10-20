import React from "react";

const Button = ({isChecked,handleModal}) => {
  return (
    <div className={`flex lg:flex-row flex-col gap-2 cursor-pointer ${isChecked ? "cursor-pointer" : "cursor-not-allowed"}`}>
      <button onClick={handleModal} disabled={!isChecked} className={`text-sm px-8 border py-2 font-medium rounded ${isChecked ? "bg-white":"bg-[#ABABAB] text-white"}`}>
        Download App
      </button>
      <button disabled={!isChecked} className={`text-sm px-8 border py-2 font-medium rounded ${isChecked ? "bg-zinc-800 text-white":"bg-[#ABABAB] text-white"}`}>
        Trade Online
      </button>
    </div>
  );
};

export default Button;
