import React from 'react';

const SeminarsPage = () => {
	return (
		<div className=' min-h-screen bg-black text-white flex flex-col justify-evenly items-center gap-8 md:gap-40 px-5 md:px-20 lg:px-40 text-sm sm:text-2xl font-semibold md:font-bold py-20 snap-start'>
			<div className=' text-2xl md:text-7xl font-extrabold'>SEMİNERLER</div>

			<ul className=' flex flex-col w-full gap-5'>
				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>1</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>1</div>
						<div>ÇOK YAKINDA</div>
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
						<div>ÇOK YAKINDA</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>12:00 - 12:30</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>3</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>3</div>
						<div>ÇOK YAKINDA</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>12:00 - 12:30</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>4</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>4</div>
						<div>ÇOK YAKINDA</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>12:00 - 12:30</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>5</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>5</div>
						<div>ÇOK YAKINDA</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>12:00 - 12:30</div>
					</div>
				</li>

				<li className=' flex flex-col'>
					<div className=' flex sm:hidden items-center gap-5'>
						<div className=' text-[#7BE9D3]'>6</div>
						<div className=' h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
					</div>

					<div className=' flex justify-between px-4 sm:px-0 items-center gap-5'>
						<div className=' hidden sm:block'>6</div>
						<div>ÇOK YAKINDA</div>
						<div className=' hidden sm:block h-[2px] bg-[#7BE9D3] flex-1  rounded-full'></div>
						<div className=' shrink-0'>12:00 - 12:30</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SeminarsPage;
