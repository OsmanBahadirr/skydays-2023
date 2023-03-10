import React from "react";

const WhatIsPage = () => {
  return (
    <div className=" h-screen nedir text-white flex flex-col items-center justify-center gap-10 md:gap-20 p-10 md:px-40 font-bold">
      <div className=" text-4xl md:text-8xl ">NEDİR?</div>
      <div className=" text-lg md:text-2xl text-center font-semibold">
        Bu yıl 4. kez düzenlenecek olan SKY DAYS, 25 Nisan tarihinde YapıKredi
        Teknoloji’nin ana sponsorluğunda gerçekleşecek bir siber güvenlik
        etkinliğidir.
      </div>
      <div className=" bg-[#7BE9D3] text-red-900 py-4 md:py-8 px-4 text-lg md:text-2xl flex items-center justify-center  text-center">
        5 saat sürecek etkinliğimiz içerisinde katılımcılarımız; birbirinden
        değerli isimlerin bu alandaki sunumlarını dinleyecek, fuaye alanlarıyla
        network elde edecek ve çeşitli yarışmalar ile de hediyeler
        kazanabilecek.
      </div>
    </div>
  );
};

export default WhatIsPage;
