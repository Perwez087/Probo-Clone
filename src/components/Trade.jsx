import React from "react";
import Cards from "./utils/Cards";

const Trade = () => {
  return (
    <div className="w-full lg:h-screen bg-zinc-100 md:py-0 py-16">
      <div className="max-w-[1400px] h-full mx-auto flex flex-row items-center justify-between p-4">
        {/* left part */}
        <div className="lg:w-[50%]">
          <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold text-zinc-800">Trade when <br /> you like,</h1>
          <h3 className="lg:text-6xl text-4xl font-semibold text-zinc-800 mt-10">on what you like.</h3>
        </div>

        {/* right part */}
        <div className="md:w-[80%] lg:w-[50%] md:block hidden">
             {/* cards */}
             <Cards/>
        </div>
      </div>
    </div>
  );
};

export default Trade;
