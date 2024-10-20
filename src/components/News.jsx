import React from "react";
import NewsCard from "./utils/NewsCard";
// import quote from "/images/quotes.png";
// import quote2 from "/images/quotes2.png";

const News = () => {
  return (
    <div className="w-full bg-zinc-100">
  <div className="max-w-[1400px] mx-auto p-10 w-full">
    <div className="flex flex-col md:px-20">
      <h1 className="lg:text-[70px] text-[40px] font-semibold text-zinc-800 leading-tight">
        News that creates trading
      </h1>
      <h1 className="lg:text-[70px] text-[40px] font-semibold text-zinc-800 md:text-right leading-tight">opportunity, everyday</h1>
    </div>
    {/* card */}
    <NewsCard/>
  </div>
</div>

  
  );
};

export default News;
