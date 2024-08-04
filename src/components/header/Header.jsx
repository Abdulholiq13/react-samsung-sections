import React from 'react';
import logo from '../../assets/logo.svg';
import { IoSearchSharp } from 'react-icons/io5';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa6';

const Header = () => {
	const navLinks = [
		'Shop',
		'AI',
		'Mobile',
		'TV & Audio',
		'Appliances',
		'Computing',
		'Displays',
		'Accessories',
		'SmartThings',
	];

	const additionalServices = ['Explore', 'Support', 'For Business'];

	return (
		<header>
			<div className='container py-8 flex justify-between'>
				<a href='#'>
					<img src={logo} alt='Samsung logo img' />
				</a>
				<ul className='flex items-center gap-[15px] text-sm'>
					{navLinks?.map((link, index) => (
						<li key={index}>
							<a className='font-bold' href='#'>
								{link}
							</a>
						</li>
					))}
				</ul>

				<div className='flex gap-5 ml-5'>
					<ul className='flex items-center text-[14px] font-bold gap-[15px]'>
						{additionalServices?.map((service, index) => (
							<li key={index}>
								<a href='#'>{service}</a>
							</li>
						))}
					</ul>

					<div className='flex items-center'>
						<button className='p-2'>
							<IoSearchSharp className='text-2xl' />
						</button>
						<button className='p-2'>
							<AiOutlineShoppingCart className='text-2xl' />
						</button>
						<button className='p-2'>
							<FaRegUser className='text-2xl' />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
