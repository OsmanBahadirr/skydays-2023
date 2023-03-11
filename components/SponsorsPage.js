import Image from 'next/image'
import React from 'react'
import sponsor from "./images/sponsor.png"

const SponsorsPage = () => {
  return (
    <div className=' h-screen sponsors text-white flex flex-col justify-between items-center py-20 md:py-32 snap-start'>

      <div className='text-5xl md:text-7xl font-bold'>
        SPONSORLAR
      </div>

      <div className=''>
        <Image alt='sponsor' src={sponsor} width={300}  />
      </div>

      <div></div>
    </div>
  )
}

export default SponsorsPage