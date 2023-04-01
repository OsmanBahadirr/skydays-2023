import Image from 'next/image'
import React from 'react'
import speakerImage from "./images/hidden.jpg"

const SpeakersPage = () => {
  return (
    <div className=' min-h-screen konusmacilar text-white flex flex-col items-center justify-evenly  snap-start'>
      <div className=' text-xl md:text-5xl font-extrabold'>
        KONUŞMACILAR
      </div>

      <div className=' grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10'>

        <div className='w-20 text-6xl md:text-9xl font-bold md:w-[150px] border border-[#7BE9D3] flex justify-center items-center bg-black '>
          ?
        </div>

        <div className='w-20 text-6xl md:text-9xl font-bold md:w-[150px] border border-[#7BE9D3] flex justify-center items-center bg-black'>
          ?
        </div>

        <div className='w-20 text-6xl md:text-9xl font-bold md:w-[150px] border border-[#7BE9D3] flex justify-center items-center bg-black'>
          ?
        </div>

        <div className='w-20 text-6xl md:text-9xl font-bold md:w-[150px] border border-[#7BE9D3] flex justify-center items-center bg-black'>
          ?
        </div>

      </div>

    </div>
  )
}

export default SpeakersPage