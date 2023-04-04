import Image from "next/image";
import React, { useState } from "react";
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.jpg";

const GalleryPage = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className=" h-screen bg-black relative snap-start">
      <Image
        alt="ımage"
        src={gallery1}
        className={`${
          current == 1 ? "block" : " hidden"
        } h-screen  object-cover absolute top-0 grayscale`}
      />
      <Image
        alt="ımage"
        src={gallery2}
        className={`${
          current == 2 ? "block" : " hidden"
        } h-screen  object-cover absolute top-0 grayscale`}
      />
      <Image
        alt="ımage"
        src={gallery3}
        className={`${
          current == 3 ? "block" : " hidden"
        } h-screen  object-cover absolute top-0 grayscale`}
      />
      <Image
        alt="ımage"
        src={gallery4}
        className={`${
          current == 4 ? "block" : " hidden"
        } h-screen  object-cover absolute top-0 grayscale`}
      />
      <Image
        alt="ımage"
        src={gallery5}
        className={`${
          current == 5 ? "block" : " hidden"
        } h-screen  object-cover absolute top-0 grayscale`}
      />
      <div className=" absolute bottom-16 w-full grid grid-cols-5 gap-5 px-5 lg:px-20">
        <div
          className={` w-fit cursor-pointer pb-5 ${
            current == 1 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(1)}
        >
          <Image alt="ımage" src={gallery1} width={150} className="grayscale" />
        </div>

        <div
          className={` w-fit cursor-pointer pb-5 ${
            current == 2 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(2)}
        >
          <Image alt="ımage" src={gallery2} width={150} className="grayscale" />
        </div>

        <div
          className={` w-fit cursor-pointer pb-5 ${
            current == 3 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(3)}
        >
          <Image alt="ımage" src={gallery3} width={150} className="grayscale" />
        </div>

        <div
          className={` w-fit cursor-pointer pb-5 ${
            current == 4 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(4)}
        >
          <Image alt="ımage" src={gallery4} width={150} className="grayscale" />
        </div>

        <div
          className={` w-fit cursor-pointer pb-5 ${
            current == 5 ? "border-b-2 border-[#7BE9D3]" : ""
          } `}
          onClick={() => setCurrent(5)}
        >
          <Image alt="ımage" src={gallery5} width={150} className="grayscale" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
