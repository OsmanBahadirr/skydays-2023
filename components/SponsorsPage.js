import Image from 'next/image'
import React from 'react'
import sponsor from "./images/sponsor.png"

const SponsorsPage = () => {
  return (
    <div className=' h-screen sponsors text-white flex flex-col justify-between items-center py-20 md:py-32 snap-start'>

      <div className='text-xl md:text-6xl font-extrabold'>
        SPONSORLAR
      </div>

      <div className='text-xl md:text-6xl font-extrabold'>
        YAKINDA
      </div>

      <div></div>
    </div>
  )
}

export default SponsorsPage