import React, { createContext, useContext, useState, useEffect } from "react";
import android from "/images/android.jpg";
import apple from "/images/apple.jpg";
import { DiAndroid } from "react-icons/di";
import { BsApple } from "react-icons/bs";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const data = [
    {
      qr: android,
      title: "Android",
      icon: <DiAndroid color="green" />,
    },
    {
      qr: apple,
      title: "App Store",
      icon: <BsApple />,
    },
  ];

  const [isModal, setIsModal] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleModal = () => {
    setIsModal((prev) => !prev);
    setIsToggle(false);
  };
  const handleToggle = () => {
    setIsToggle((prev) => !prev);
    setIsModal(false);
  };

  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    document.body.style.overflow = isModal  || isToggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModal,isToggle]);

  return (
    <DataContext.Provider value={{ isModal,isToggle, handleToggle, handleModal, data, selectedIndex, handleTabChange }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
