import Image from 'next/image'
import React from 'react'
import speakerImage from "./images/konuşmacı.png"

const SpeakersPage = () => {
  return (
    <div className=' min-h-screen konusmacilar text-white flex flex-col items-center justify-evenly  snap-start'>
      <div className=' text-3xl md:text-7xl font-bold'>
        KONUŞMACILAR
      </div>

      <div className=' grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10'>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}  />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}  />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

        <div>
          <Image className=' w-20 md:w-[150px]' alt="konuşmacı" src={speakerImage} width={150}   />
          <div className=' text-sm md:text-base font-normal md:font-medium mt-2'>CEMAL TANER</div>
          <div className=' text-xs text-zinc-600'>cemaltaner.com</div>
        </div>

      </div>

    </div>
  )
}

export default SpeakersPage