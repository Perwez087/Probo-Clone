import React from "react";
import { GoArrowRight } from "react-icons/go";
import cares from "/images/cares.jpg";
import exit from "/images/exit.jpg";
import trading from "/images/trading.jpg";
import prediction from "/images/predictions.jpg";

const CaresCard = () => {
  const cardData = [
    {
      title: (
        <>
          Probo Cares<br />
        </>
      ),
      content:
        "Be it loss protection or data security, Probo is user first always. Check out the latest on responsible trading.",
      btn: "Read more",
      arrow: <GoArrowRight size={18} />,
      img: cares,
    },
    {
      title: (
        <>
          Exiting trades is <br /> your choice
        </>
      ),
      content:
        "The ‘Exit’ feature gives the user an opportunity to exit from the current trade and helps in controlling your losses and maximising the profit.",
      btn: "Read more",
      arrow: <GoArrowRight size={18} />,
      img: exit,
    },
    {
      title: (
        <>
          Market Orders <br /> and Instant Exit
        </>
      ),
      content:
        "Market orders are a fast and reliable method to buy or exit a trade in a fast-moving market. With market orders, quantities are matched almost instantly after placing an order at the best available price. Come test drive.",
      btn: "Read more",
      arrow: <GoArrowRight size={18} />,
      img: trading,
    },
    {
      title: (
        <>
          The Power of <br /> Prediction <br /> Markets
        </>
      ),
      content:
        "Check out case studies, research articles and the utility of Probo events",
      btn: "Read more",
      arrow: <GoArrowRight size={18} />,
      img: prediction,
    },
  ];

  return (
    <>
      {cardData.map((data, index) => (
        <div
          key={index}
          className={`bg-[#262626] text-white py-5 pb-0 px-5 rounded-md flex flex-col justify-between ${
            index === cardData.length - 2 ? "lg:col-span-2" : ""
          }`}
        >
          <div className="flex flex-col gap-4">
            <h1 className="lg:text-4xl text-2xl font-medium">{data.title}</h1>
            <p className="text-sm lg:w-[70%]">{data.content}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 place-self-end mb-8">
              <button className="md:text-sm text-xs whitespace-nowrap font-medium">{data.btn}</button>
              <span>{data.arrow}</span>
            </div>
            <img
              className={`lg:w-[210px] w-[150px] ${
                index === cardData.length - 2 ? "lg:w-[300px] w-[150px]" : ""
              }`}
              src={data.img}
              alt="imgs"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CaresCard;
