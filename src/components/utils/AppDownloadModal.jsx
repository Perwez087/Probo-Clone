import React from "react";

const AppDownloadModal = ({ isModal, handleModal, data, selectedIndex, handleTabChange }) => {
  if (!isModal) return null;

  const QRCode = data[selectedIndex].qr;

  return (
    <div className="fixed inset-0 z-50 flex w-full items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg lg:w-1/3 w-fit">
        <span
          onClick={handleModal}
          className="text-black text-xl text-end cursor-pointer flex justify-end items-end"
        >
          X
        </span>
        <h2 className="md:text-2xl font-bold mb-4 text-center">
          We are excited to get you onboard!
        </h2>
        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <img width={150} src={QRCode} alt="qr" />
          </div>
          <div className="flex items-center justify-center gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleTabChange(index)}
                className={`flex items-center gap-2 cursor-pointer ${selectedIndex === index ? "bg-[#ECF7FE] border-[#abcce1]" : "bg-white"} lg:px-10 px-5 py-2 whitespace-nowrap border rounded-md`}
              >
                <span>{item.icon}</span>
                <button className="font-medium md:text-md text-sm">{item.title}</button>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-center mt-4">
          You can scan the QR code from Paytm or any QR Scanner app.
        </p>
      </div>
    </div>
  );
};

export default AppDownloadModal;
