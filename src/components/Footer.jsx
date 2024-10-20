import React, { useEffect, useState } from "react";
import logo from "/images/logo.png";
import trading from "/images/trading.png";
import authbridge from "/images/authbridge.png";
import datamuni from "/images/datamuni.png";
import googlecloud from "/images/google-cloud.png";
import firebase from "/images/google-firebase.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import AppDownloadModal from "./utils/AppDownloadModal";
import { useDataContext } from "../context/Context";

const Footer = () => {
  const { isModal, handleModal, data, selectedIndex, handleTabChange } = useDataContext();
  const items = [
    {
      title: "Company",
      links: ["About Us", "Culture"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Contact Support"],
    },
    {
      title: "Careers",
      links: ["Open Roles"],
    },
    {
      title: "Contact Us",
      links: ["help@probo.in", "communication@probo.in"],
    },
  ];

  const icons = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/company/probo-in/",
      title: "LinkedIn",
    },
    {
      icon: <FaSquareXTwitter />,
      href: "https://www.twitter.com/company/probo-in/",
      title: "Twitter",
    },
    {
      icon: <AiFillInstagram />,
      href: "https://www.instagram.com/company/probo-in/",
      title: "Instagram",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/company/probo-in/",
      title: "Youtube",
    },
  ];



  return (
    <div className="w-full bg-zinc-100 py-8">
      <div className="max-w-[1400px] mx-auto p-4">
        <div className="flex items-center justify-between border-b py-4">
          <img className="w-[105px]" src={logo} alt="logo" />

          <div className="flex items-center">
            <div className="lg:flex hidden items-center justify-center gap-4">
              <span className="w-[20%] text-xs text-right text-zinc-700 font-normal">
                For 18 years and above only
              </span>
              <div className="flex lg:flex-row flex-col gap-2 cursor-pointer">
                <button onClick={handleModal} className="bg-white text-sm px-8 border py-2 font-medium rounded">
                  Download App
                </button>
                <button className="bg-zinc-800 text-white text-sm px-8 border py-2 font-medium rounded">
                  Trade Online
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Links */}
        <div className="py-8 mt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-0 gap-4 border-b mb-6">
          {items.map((item, index) => (
            <div key={index}>
              <h2 className="lg:text-md text-sm font-medium text-black mb-2">
                {item.title}
              </h2>
              <ul className="flex flex-col gap-2 items-start justify-start">
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className="md:text-sm text-xs text-zinc-700 hover:text-black font-medium cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer content */}
        <div className="flex md:flex-row flex-col items-center justify-between gap-4 border-b pb-8">
          <div className="md:w-[45%] flex flex-col gap-2">
            <h1 className="text-md font-bold text-black mb-2">
              Probo Partnerships
            </h1>
            <p className="text-[14px]">
              Probo’s experience is made possible by our partnerships with{" "}
              <strong>TradingView</strong> (track upcoming events with{" "}
              <u>Economic Calendar</u> or browse stocks in the <u>Screener</u>),{" "}
              <strong>Authbridge</strong> for verification technology,{" "}
              <strong>DataMuni </strong>for data & analytics,{" "}
              <strong>Google Firebase</strong>, <strong>Google Cloud</strong> &{" "}
              <strong>AWS</strong>. Probo is also a member of{" "}
              <strong>FICCI</strong> and
              <strong>ASSOCHAM</strong>.
            </p>
          </div>
          <div className="flex items-end lg:justify-end justify-center gap-4">
            {[trading, authbridge, datamuni, googlecloud, firebase].map(
              (items, index) => (
                <img key={index} className="w-[12%]" src={items} alt="trading" />
              )
            )}
          </div>
        </div>
        {/* Social Links */}

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 py-2 border-b pb-8">
          {icons.map((items, index) => (
            <div key={index}>
              <a
                href={items.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-slate-900"
              >
                {items.icon}
              </a>
              <h4 className="font-bold text-zinc-800">{items.title}</h4>
            </div>
          ))}
        </div>

        {/* Terms & Condition*/}
        <div className="flex flex-wrap items-center justify-between py-10 text-zinc-500">
          <div className="flex items-center gap-4 font-semibold text-sm">
            <h4>Terms and Conditions</h4>
            <h4>Privacy Policy</h4>
          </div>
          <p>© copyright 2024 by Probo Media Technologies Pvt. Ltd.</p>
        </div>

        {/* Disclaimer */}

        <div className="flex flex-col gap-3 pb-4 py-10">
            <h1 className="text-zinc-800 font-bold">Disclaimer</h1>
            <p>This game may be habit-forming or financially risky. Play Responsibly.</p>
            <p>*Probo is available in all states where allowed by law. However, users in some states might not be able to access our app or its contests.</p>
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

export default Footer;
