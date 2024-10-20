import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Advertise from "./components/Advertise";
import Trade from "./components/Trade";
import Cares from "./components/Cares";
import Features from "./components/Features";
import News from "./components/News";
import Opinions from "./components/Opinions";
import Footer from "./components/Footer"

const App = () => {
  const data = [
    {
      title: "Samachar",
      heading: "Be in the know",
      content:
        "From Sports to Entertainment, Economy, Finance and more. Keep an eye on events in your field of interest.",
    },
    {
      title: "Vichaar",
      heading: "Use what you know",
      content:
        "Build your knowledge and form your opinions and views about upcoming events in the world.",
    },
    {
      title: "Vyapaar",
      heading: "Trade and grow",
      content:
        "Invest in your opinions about future events and use your knowledge to trade & benefit.",
    },
  ];
  return (
    <div className="w-full h-screen bg-zinc-100">
      <Navbar />
      <HeroSection />
      <Advertise data={data} />
      <Trade/>
      <Cares/>
      <Features/>
      <News/>
      <Opinions/>
      <Footer/>
    </div>
  );
};

export default App;
