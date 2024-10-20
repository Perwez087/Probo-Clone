import React from "react";
import img1 from "/images/file.png";
import img2 from "/images/trade.png";
import img3 from "/images/trades.png";
import img4 from "/images/society.png";

const FeatureCard = () => {
  const featureData = [
    {
      img: img1,
      title: "Fastest news feed in the game",
      content:
        "Probo is all about understanding the world around us and bene fitting from our knowledge. Everything on Probo is based on real events that you can learn about, verify and follow yourself.",
    },
    {
      img: img2,
      title: "All the news without the noise",
      content:
        "Our experts go through tons of information to get to the very core of a world event. They help you develop not only an opinion about events but also a better understanding of the world around us.",
    },
    {
      img: img3,
      title: "The power to exit trades, anytime",
      content:
        "Probo is an opinion trading platform. And, like a true trading platform, Probo gives you the power to exit. You can withdraw from a trade, if it’s not going in the direction you thought it will go.",
    },
    {
      img: img4,
      title: "The pulse of society is on Probo",
      content:
        "Besides helping you learn important financial & trading skills, Probo also helps you understand the collective thoughts of Indians. Knowledge that is crucial for the betterment of our country.",
    },
  ];
  return (
    <>
      {featureData.map((data,index) => (
        <div key={index} className="flex flex-col gap-10 justify-between mt-8">
          <div>
            <img className="w-20" src={data.img} alt="images" />
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <h1 className="text-xl font-medium text-zinc-800">
              {data.title}
            </h1>
            <p className="text-sm">
              {data.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
