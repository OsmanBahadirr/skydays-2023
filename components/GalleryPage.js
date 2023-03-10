import Image from 'next/image'
import React, { useState } from 'react'
import gallery1 from "./images/page_6_background.png"

const GalleryPage = () => {
  const [ current, setCurrent] = useState(1)
  
  return (
    <div className=' h-screen gallery relative'>

      <div className=' absolute bottom-16 w-full grid grid-cols-5 gap-5 px-5 lg:px-20'>

        <div className={` pb-5 ${current == 1 ?"border-b-2 border-[#7BE9D3]" :""} `}>
          <Image alt='ımage' src={gallery1} width={150} className=" cursor-pointer" onClick={()=>setCurrent(1)} />  
        </div>

        <div className={` pb-5 ${current == 2 ?"border-b-2 border-[#7BE9D3]" :""} `}>
          <Image alt='ımage' src={gallery1} width={150} className=" cursor-pointer" onClick={()=>setCurrent(2)} />  
        </div>

        <div className={` pb-5 ${current == 3 ?"border-b-2 border-[#7BE9D3]" :""} `}>
          <Image alt='ımage' src={gallery1} width={150} className=" cursor-pointer" onClick={()=>setCurrent(3)} />  
        </div>

        <div className={` pb-5 ${current == 4 ?"border-b-2 border-[#7BE9D3]" :""} `}>
          <Image alt='ımage' src={gallery1} width={150} className=" cursor-pointer" onClick={()=>setCurrent(4)} />  
        </div>

        <div className={` pb-5 ${current == 5 ?"border-b-2 border-[#7BE9D3]" :""} `}>
          <Image alt='ımage' src={gallery1} width={150} className=" cursor-pointer" onClick={()=>setCurrent(5)} />  
        </div>

      </div>

    </div>
  )
}

export default GalleryPage