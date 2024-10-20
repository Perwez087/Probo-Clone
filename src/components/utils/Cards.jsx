import React from 'react';
import img1 from "/images/trade1.png";
import img2 from "/images/trade2.png";
import img3 from "/images/trade3.png";
import img4 from "/images/trade4.png";
import img5 from "/images/trade5.jpeg";
import img6 from "/images/trade6.png";
import img7 from "/images/trade7.jpeg";
import img8 from "/images/trade8.png";
import bar from "/images/bar.png";

const Cards = () => {
    const cardItems = [
        {
            icons: img1,
            bar: bar,
            count: "32090 traders",
            content: "Center to constitute the 8th Pay Commission?",
            btn1: "Yes ₹2",
            btn2: "No ₹8"
        },
        {
            icons: img2,
            bar: bar,
            count: "6465 traders",
            content: "Kane Williamson to announce his retirement from international T20 cricket?",
            btn1: "Yes ₹4.5",
            btn2: "No ₹5.5"
        },
        {
            icons: img3,
            bar: bar,
            count: "7566 traders",
            content: "Tesla to open their first showroom in India by the end of 2024?",
            btn1: "Yes ₹2",
            btn2: "No ₹8"
        },
        {
            icons: img4,
            bar: bar,
            count: "1392 traders",
            content: "Red Bull Racing to win the F1 Constructors Championship 2024?",
            btn1: "Yes ₹2.5",
            btn2: "No ₹7.5"
        },
        {
            icons: img5,
            bar: bar,
            count: "7214 traders",
            content: "India AI mission to launch an app in collaboration with OpenAI?",
            btn1: "Yes ₹7.5",
            btn2: "No ₹2.5"
        },
        {
            icons: img6,
            bar: bar,
            count: "1215 traders",
            content: "Manchester City to win the 2024-25 Premier League title?",
            btn1: "Yes ₹6.5",
            btn2: "No ₹3.5"
        },
        {
            icons: img7,
            bar: bar,
            count: "123 traders",
            content: "Central Government to extend the urban poverty alleviation pilot project to additional cities by the end of 2024?",
            btn1: "Yes ₹6",
            btn2: "No ₹4"
        },
        {
            icons: img8,
            bar: bar,
            count: "450 traders",
            content: "Bayern Munich to win the 2024-25 Bundesliga?",
            btn1: "Yes ₹4",
            btn2: "No ₹6"
        },
    ];

    return (
        <div className='w-full h-[87vh] overflow-y-scroll scrollbar-hide'>
            <div className='flex flex-wrap justify-center gap-4'>
                {
                    cardItems.map((items, index) => (
                        <div 
                            key={index} 
                            className='w-[41%] 2xl:h-[39vh] h-[23vh] border bg-white drop-shadow-md p-4 rounded-lg flex flex-col justify-between'
                        >
                            <div className='flex flex-col gap-2'>
                                <img className='w-[25%]' src={items.icons} alt="img" />
                                <div className='flex items-center gap-2 mt-2'>
                                    <img className='w-5' src={items.bar} alt="bar" />
                                    <span className='text-xs tracking-tight leading-2 font-medium'>{items.count}</span>
                                </div>
                                <p className='lg:text-[14px] text-[13px] tracking-wider'>{items.content}</p>
                            </div>
                            <div className='flex gap-4 w-full justify-center items-center'>
                                <button className='bg-gradient-to-r from-[#E7F1FE] to-[#D7E9FF] w-[120px] py-2 text-sm font-medium rounded-md text-blue-600'>{items.btn1}</button>
                                <button className='bg-gradient-to-r from-[#FCEDEC] to-[#FAE1DE] w-[120px] py-2 text-sm font-medium rounded-md text-red-600'>{items.btn2}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;
