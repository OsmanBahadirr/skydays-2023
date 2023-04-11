import React from 'react';

const WhatsOnPage = () => {
	return (
		<div className=' h-screen nelervar text-white flex flex-col justify-center items-center font-bold px-10 md:px-40 gap-20 lg:gap-40 snap-start'>
			<div className=' text-5xl md:text-5xl font-extrabold'>NELER VAR?</div>
			<div className=' flex flex-col border-0 md:border-l-2 border-white gap-10 text-base md:text-lg pl-0 md:pl-10'>
				<div className=' flex gap-5 items-center md:pl-10'>
					<div className=' bg-white flex-none border-white w-1 h-1 rounded-full md:hidden'></div>
					<div className=' w-8 h-8 border-2 flex-none border-white rounded-full hidden md:flex justify-center items-center'>
						<div className=' w-3 h-3 rounded-full bg-white'></div>
					</div>
					<div>
						Çeşitli firmaların stantları, ikramlar, SKYSEC ekibinin stand
						sunumları
					</div>
				</div>

				<div className=' flex gap-5 items-center '>
					<div className=' flex-none bg-white border-white w-1 h-1 rounded-full md:hidden'></div>
					<div className=' flex-none w-8 h-8 border-2 border-white rounded-full hidden md:flex justify-center items-center'>
						<div className=' w-3 h-3 rounded-full bg-white'></div>
					</div>
					<div>Siber güvenlik konusunda uzman konuklarımızın sunumları</div>
				</div>

				{/* <div className=' flex gap-5 items-center md:pl-10'>
					<div className=' flex-none bg-white border-white w-1 h-1 rounded-full md:hidden'></div>
					<div className=' flex-none w-8 h-8 border-2 border-white rounded-full hidden md:flex justify-center items-center'>
						<div className=' w-3 h-3 rounded-full bg-white'></div>
					</div>
					<div>
            Çeşitli firmaların stantları, ikramlar, SKYSEC ekibinin stand
            sunumları
          </div>
				</div> */}
			</div>
		</div>
	);
};

export default WhatsOnPage;
