import React from 'react';

const Props = ({ title, name, desc, url, navLinks }) => {
	return (
		<section className='bg-[#f4f4f4] w-full pt-7'>
			<div className='container flex flex-col items-center justify-center'>
				<h2 className='text-4xl font-bold mb-4'>{title}</h2>
				<ul className='flex gap-10 relative z-10'>
					{navLinks?.map((link, index) => (
						<li key={index} className='text-lg font-semibold'>
							<a href='#'>{link}</a>
						</li>
					))}
				</ul>
				<div className='relative overflow-hidden'>
					<img className='object-cover relative top-[-100px]' src={url} alt='' />
					<div className='flex flex-col items-center absolute bottom-16 bg-[#f4f4f4] w-full'>
						<h2 className='text-5xl font-bold mb-2'>{name}</h2>
						<p className='font-light text-lg mb-1'>{desc}</p>
						<button className='bg-black transition-all duration-300 ease-in-out text-white p-3 px-6 rounded-full text-center text-sm mt-3 font-bold hover:opacity-70'>
							Buy now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Props;
