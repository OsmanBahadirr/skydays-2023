import Image from "next/image";
import React, { useState } from "react";
import gallery1 from "./images/page_6_background.png";

const GalleryPage = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className=" h-screen gallery relative snap-start">
      <div className=" absolute bottom-16 w-full grid grid-cols-5 gap-5 px-5 lg:px-20">
        <Image
          alt="ımage"
          src={gallery1}
          width={150}
          className={`  cursor-pointer pb-5 ${
            current == 1 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(1)}
        />

        <Image
          alt="ımage"
          src={gallery1}
          width={150}
          className={`  cursor-pointer pb-5 ${
            current == 2 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(2)}
        />

        <Image
          alt="ımage"
          src={gallery1}
          width={150}
          className={`  cursor-pointer pb-5 ${
            current == 3 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(3)}
        />

        <Image
          alt="ımage"
          src={gallery1}
          width={150}
          className={`  cursor-pointer pb-5 ${
            current == 4 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(4)}
        />

        <Image
          alt="ımage"
          src={gallery1}
          width={150}
          className={`  cursor-pointer pb-5 ${
            current == 5 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(5)}
        />
      </div>
    </div>
  );
};

export default GalleryPage;
