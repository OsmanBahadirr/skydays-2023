import Image from 'next/image';
import React from 'react';
import NescafeSponsor from './images/sponsor-nescafe.jpg';
import BritishSponsor from './images/sponsor-british.png';
import PaloAltoSponsor from './images/sponsor-paloalto.png';
import YapiKrediSponsor from './images/sponsor-yapikredi.png';
import DestekSponsor from './images/sponsor-destek.png';

const SponsorsPage = () => {
	return (
		<div className=' h-screen sponsors text-white  snap-start flex flex-col items-center py-12 md:py-24 md:px-48 gap-10'>
			<div className='flex flex-col items-center md:gap-10 gap-6'>
				<h1 className='font-black text-xl md:text-3xl'>ANA SPONSOR</h1>
				<Image src={YapiKrediSponsor} className='md:w-96 w-64' />
			</div>
			<div className='flex flex-col md:flex-row justify-center md:items-start md:justify-around  w-full'>
				<div className='flex flex-col items-center'>
					<h1 className='font-black text-base  break-words md:text-xl md:mb-16 mb-10 text-center'>
						BRONZ
						<br />
						SPONSORLAR
					</h1>

					<Image src={PaloAltoSponsor} className='w-48 md:w-72' />
					<Image src={DestekSponsor} className='w-48 md:w-72' />
				</div>
				<div className='flex md:flex-col md:items-center flex-row justify-center gap-10'>
					<div className='flex flex-col items-center'>
						<h1 className='font-black mb-8 text-center'>
							Ürün <br /> Sponsoru
						</h1>
						<Image src={NescafeSponsor} className={'w-24 md:w-36 '} />
					</div>
					<div className='flex flex-col items-center'>
						<h1 className='font-black mb-8 text-center'>
							Çekiliş <br /> Sponsoru
						</h1>
						<Image src={BritishSponsor} className={'w-24 md:w-36 '} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorsPage;

//  py-20 md:py-32
