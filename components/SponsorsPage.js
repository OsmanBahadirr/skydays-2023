import Image from 'next/image';
import React from 'react';
import NescafeSponsor from './images/sponsor-nescafe.jpg';

const SponsorsPage = () => {
	return (
		<div className=' h-screen sponsors text-white flex flex-col justify-between items-center py-20 md:py-32 snap-start'>
			<div className='text-xl md:text-6xl font-extrabold'>SPONSORLAR</div>

			{/* <div className='text-xl md:text-6xl font-extrabold'>
        YAKINDA
      </div> */}
			<div className='text-xl md:text-6xl font-extrabold w-32 md:w-64'>
				<Image
					className='w-full h-full'
					src={NescafeSponsor}
					alt='Sponsorlar'
				/>
			</div>

			<div></div>
		</div>
	);
};

export default SponsorsPage;
