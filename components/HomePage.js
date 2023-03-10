import Image from "next/image";
import React from "react";
import background from "./images/page_1_background.png";

const HomePage = () => {
  return (
    <div className="h-screen home flex flex-col items-center justify-between text-white pt-24">
      <div className=" flex flex-col items-end justify-center  text-7xl sm:text-9xl md:text-[10rem] font-extrabold relative home-page_titlebox py-5 mt-10 md:mt-20">
        <div className=" z-10 home-page_title bg-clip-text text-transparent w-full h-full flex items-center justify-center">
          SKYDAYS
        </div>
        <div className=" z-10 text-sm w-full md:text-3xl font-semibold flex items-center justify-center home-page_title text-transparent bg-clip-text">
          TÜRKİYE NİN EN BÜYÜK SİBER GÜVENLİK ZİRVESİ
        </div>
      </div>

      <div className=" w-full flex justify-end pr-10">
        <div className=" bg-[#00A99D] p-2 md:p-6 pr-10 md:pr-40 text-sm md:text-base">
          25 NİSAN - YILDIZ TEKNİK ÜNİVERSİTESİ  TARİHİ HAMAM
        </div>
      </div>

      <div className=" mb-8">LOGO</div>
    </div>
  );
};

export default HomePage;
