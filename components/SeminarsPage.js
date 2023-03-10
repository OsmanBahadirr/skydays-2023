import React from 'react'

const SeminarsPage = () => {
  return (
    <div className=' h-screen bg-black text-white flex flex-col justify-evenly items-center gap-16 md:gap-40 px-5 md:px-20 lg:px-40 text-sm md:text-2xl font-medium md:font-bold py-20'>
      <div className=' text-3xl md:text-7xl font-bold'>
        SEMİNERLER
      </div>

      <ul className=' flex flex-col w-full gap-5'>

        <li className=' flex items-center gap-2 md:gap-5'>
          <div>1</div>
          <div>LOREM IPSUM</div>
          <div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
          <div>12:00 - 12:30</div>
        </li>

        <li className=' flex items-center gap-2 md:gap-5'>
          <div>2</div>
          <div>DOLOR SIT AMET</div>
          <div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
          <div>12:00 - 12:30</div>
        </li>

        <li className=' flex items-center gap-2 md:gap-5'>
          <div>3</div>
          <div>TEMOIN PAPIER SAISON HESTIER</div>
          <div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
          <div>12:00 - 12:30</div>
        </li>

        <li className=' flex items-center gap-2 md:gap-5'>
          <div>4</div>
          <div>ORE WA MO SHINDEIRU</div>
          <div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
          <div>12:00 - 12:30</div>
        </li>

        <li className=' flex items-center gap-2 md:gap-5'>
          <div>5</div>
          <div>SARU MO KI KARA OCHIRU</div>
          <div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
          <div>12:00 - 12:30</div>
        </li>

        <li className=' flex items-center gap-2 md:gap-5'>
          <div>6</div>
          <div>NEUNUNDNEUNZIG LUFTBALLONS</div>
          <div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
          <div>12:00 - 12:30</div>
        </li>

      </ul>

    </div>
  )
}

export default SeminarsPage