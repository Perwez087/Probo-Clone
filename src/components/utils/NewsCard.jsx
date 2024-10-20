import React from "react";
import img1 from "/images/nazar.png";
import img2 from "/images/khabar.png";
import img3 from "/images/jigar.png";
import img4 from "/images/sabar.png";

const NewsCard = () => {
  const newData = [
    {
      title: "Nazar",
      image: img1,
      content: "Keep an eye on the happenings around you. Be it Politics, Sports, Entertainment and more."
    },
    {
      title: "Khabar",
      image: img2,
      content: "Understand the news without the noise. Get to the crux of every matter and develop an opinion."
    },
    {
      title: "Jigar",
      image: img3,
      content: "Have the courage to stand by your opinions about upcoming world events by investing in them."
    },
    {
      title: "Sabar",
      image: img4,
      content: "Have the patience to negotiate market ups and downs, and take a decision as events unfold."
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 py-10">
      {newData.map((news, index) => (
        <div key={index} className="relative w-[300px]">
          <img className="w-full h-full rounded-lg" src={news.image} alt={news.title} />
          <div className="bg-white absolute bottom-0 left-5 w-[88%] md:h-32 flex flex-col justify-center items-center p-4">
            <h2 className="md:text-xl font-semibold">{news.title}</h2>
            <p className="md:text-sm text-xs">{news.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
