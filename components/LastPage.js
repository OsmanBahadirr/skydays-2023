import Image from "next/image";
import React from "react";
import ytüLogo from "./images/ytü_logo.png"
import skylabLogo from "./images/skylab_logo.png"

const LastPage = () => {
  return (
    <div className=" h-screen bg-black snap-start flex flex-col justify-evenly items-center text-white/50">
      <div className="  font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
        SKYDAYS
      </div>

      <div className=" flex flex-col items-center font-sans sm:text-lg md:text-2xl">
        <div className=" flex gap-5 items-center">
          <div>05554443322</div>
          <span className=" w-2 h-2 rounded-full bg-white/50"></span>
          <div>05554443322</div>
        </div>

        <div className=" text-center">
          Davutpaşa Mah. Davutpaşa Caddesi 34220, Esenler / İSTANBUL
        </div>
      </div>

      <div className=" mb-8 flex gap-5 text-lg md:text-5xl font-semibold md:font-bold relative">
        <div className=" absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className=" flex gap-2 bg-black ">
          <Image className=" w-24 h-10 md:w-52 md:h-20 " alt="konuşmacı" src={ytüLogo}/>
        </div>
        <div className=" flex gap-2 items-center text-white">
          <Image className=' w-10 h-10 md:w-20 md:h-20' alt="konuşmacı" src={skylabLogo}/>
          <div>SKYLAB</div>
        </div>
      </div>

    </div>
  );
};

export default LastPage;
