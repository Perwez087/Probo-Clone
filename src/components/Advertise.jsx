import React, { useState } from "react";
import video from "/images/video.mp4";

const Advertise = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  const Heading = data[selectedIndex].heading;
  const Content = data[selectedIndex].content;

  return (
    <div className="bg-zinc-800 w-full py-16">
      <div className="max-w-[1400px] h-full mx-auto flex md:flex-row flex-col items-center justify-between text-white">
        {/* Left Part */}
        <div className="md:w-[50%] p-4 flex flex-col gap-2">
          <div className="flex flex-wrap  gap-6 mb-4">
            {data.map((items, index) => (
              <h1
                key={index}
                onClick={() => handleTabChange(index)}
                className={`lg:text-5xl text-3xl font-medium cursor-pointer tracking-wider ${
                  selectedIndex === index
                    ? "text-white font-bold"
                    : "text-zinc-400 font-normal"
                }`}
              >
                {items.title}
              </h1>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="lg:text-4xl text-2xl font-bold mt-4">{Heading}</h3>
            <p className="lg:text-[35px] text-[20px] leading-[44px] mt-2">{Content}</p>
          </div>
        </div>

        {/* Right Part */}
        <div className="md:w-[50%] mt-10">
          <div className="md:w-[40%] w-[60%] h-full mx-auto shadow-slate-400 bg-[#1f1f1f] rounded-[44px] overflow-hidden">
            <div className="p-3 rounded">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-[30px]"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
