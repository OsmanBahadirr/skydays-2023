import Image from 'next/image';
import React from 'react';
import AlperReha from './images/alper-reha.jpg';
import EgeInan from './images/ege-inan.jpg';
import FuatKilic from './images/fuat-kilic.jpeg';
import MelihKaan from './images/melih-kaan.jpeg';
import OnurDeniz from './images/onur-deniz.jpg';
import CihanOzhan from './images/cihan-ozhan.jpg';

const SpeakersPage = () => {
	return (
		<div className=' min-h-screen konusmacilar text-white flex flex-col items-center justify-evenly  snap-start'>
			<div className=' text-xl md:text-5xl font-extrabold'>KONUŞMACILAR</div>

			<div className=' grid grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-5 md:gap-10'>
				<KonusmaciCard
					photo={EgeInan}
					name={'Ege İnan'}
					title={'Cyber Security Engineer @ Intertech'}
				/>
				<KonusmaciCard
					photo={FuatKilic}
					name={'Fuat Kılıç'}
					title={'SE Team Lead @ Palo Alto Networks'}
				/>
				<KonusmaciCard
					photo={OnurDeniz}
					name={'Onur DENİZ'}
					title={
						'Development Manager, Natural Language Processing @ Yapı Kredi Teknoloji'
					}
				/>
				<KonusmaciCard
					photo={MelihKaan}
					name={'MELİH Kaan Yıldız'}
					title={'Vulnerable Machine Engineer @ OffSec'}
				/>
				<KonusmaciCard
					photo={AlperReha}
					name={'Alper Reha Yazgan'}
					title={'Full Stack Developer @ Türk Telekom via Gantek'}
				/>
				<KonusmaciCard
					photo={CihanOzhan}
					name={'CİHAN Özhan'}
					title={'Offensive AI • Founder @ Safebox & AISecLab'}
				/>
			</div>
		</div>
	);
};

const KonusmaciCard = props => {
	return (
		<div className=' flex flex-col items-start justify-start gap-0 max-w-[5rem] md:max-w-[150px] '>
			<div className='border border-[#7BE9D3] md:w-[150px] md:h-[150px] w-20 h-20 overflow-hidden mb-4'>
				<Image className={'object-cover '} src={props.photo} />
			</div>
			<h1 className='font-bold font-sans uppercase leading-4 mb-2'>
				{props.name}
			</h1>
			<h3 className='font-normal leading-tight font-sans opacity-70 break-words text-xs'>
				{props.title}
			</h3>
		</div>
	);
};

export default SpeakersPage;
