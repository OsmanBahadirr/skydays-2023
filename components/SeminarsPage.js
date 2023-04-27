import React from 'react';

const SeminarsPage = () => {
	return (
		<div className=' min-h-screen bg-black text-white  flex flex-col justify-evenly items-center gap-8 md:gap-40 px-5 md:px-20 lg:px-40 text-sm sm:text-2xl font-semibold md:font-bold py-20 snap-start'>
			<div className=' text-2xl md:text-7xl font-black '>PROGRAM</div>

			<ul className=' flex flex-col w-full gap-5'>
				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>1</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>1</div>
						<div>Ege İnan</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>12:00 - 12:30</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>2</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>2</div>
						<div>Fuat Kılıç</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>12:45 - 13:15</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>3</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>3</div>
						<div>Onur Deniz</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>13:30 - 14:00</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>4</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>4</div>
						<div>Melih Kaan Yıldız</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>14:30 - 15:00</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>5</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>5</div>
						<div>Alper Reha Yazgan</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>15:15 - 15:45</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>6</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>6</div>
						<div>Cihan Özhan</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>16:00 - 16:30</div>
					</div>
				</li>
				{/* <li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>7</div>
						<div className=' h-[2px] bg-[#7be9d3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:invisible'>7</div>
						<div>
							<span className='text-[#7be9d3]'>Workshop</span> Cihan Özhan - AI
							Security <span className='text-[#7be9d3]'>&</span> Alper Reha
							Yazgan - Bulut Bilişimciler - 3 Security Concept Hands-on Lab
						</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>17:00 - 18:00</div>
					</div>
				</li> */}
			</ul>
		</div>
	);
};

export default SeminarsPage;
