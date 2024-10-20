import React from "react";
import FeatureCard from "./utils/FeatureCard";

const Features = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto py-8 md:px-8 px-4 mt-4">
        <h1 className="lg:text-7xl md:text-5xl text-2xl font-medium text-zinc-800">Probo takes care of you, <br /> so you take care of your trades.</h1>
         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-20 w-full mt-8 mx-auto">
            <FeatureCard/>
         </div>
      </div>
    </div>
  );
};

export default Features;
