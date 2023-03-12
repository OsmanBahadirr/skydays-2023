import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen home flex flex-col items-center justify-between text-white pt-10 sm:pt-16 md:pt-24 snap-start">

      <div className=" flex flex-col items-end justify-center  text-4xl sm:text-8xl md:text-[7rem] font-extrabold relative home-page_titlebox py-5 mt-10 md:mt-20">
        <div className=" z-10 home-page_title w-full h-full flex items-center justify-center">
          SKYDAYS
        </div>
        <div className=" z-10 text-sm w-full md:text-3xl font-semibold flex items-center justify-center home-page_title">
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
