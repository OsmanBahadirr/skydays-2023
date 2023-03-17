import React from "react";

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

      <div className=" mb-8 flex gap-5 text-lg md:text-4xl font-semibold md:font-bold">
        <div className=" flex gap-2">
          <div>*</div>
          <div>YTÜ</div>
        </div>
        <div className=" flex gap-2">
          <div>ROKET</div>
          <div>SKYLAB</div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
