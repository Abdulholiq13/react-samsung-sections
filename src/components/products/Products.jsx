import fold from '../../assets/fold6.png';
import flip from '../../assets/flip-6.png';
import buds from '../../assets/galaxy-buds-3.png';
import jet75 from '../../assets/jet-75.png';
import jet60 from '../../assets/jet60.png';
import jetStick from '../../assets/jetstick.png';

const Products = () => {
	const links = ['For You', ' Top Deals', ' Mobile', ' TV & Audio', 'Home Appliances', ' Computing'];
	const products = [
		{
			url: fold,
			title: 'Galaxy Z Fold6, 512GB (Unlocked)',
			price: '1200',
			from: 'From $1899.99 before eligible trade-in.',
		},

		{
			url: buds,
			title: 'Galaxy Buds3 Pro',
			price: '100',
			from: 'From $249.99 before eligible trade-in.',
		},

		{
			url: jet75,
			title: 'Samsung Jet 75 Cordless Stick Vacuum',
			from: 'From $1999',
		},

		{
			url: flip,
			title: 'Galaxy Z Flip6, 512GB (Unlocked)',
			price: '650',
			from: 'From $1219.99 before eligible trade-in.',
		},

		{
			url: jet60,
			title: 'Jet 60 Pet Cordless Stick Vacuum',
			from: 'From $329.99',
		},

		{
			url: jetStick,
			title: 'Bespoke Jet Cordless Stick Vacuum with All in One Clean Station',
			from: 'From $1999.99',
		},
	];
	return (
		<section className='w-full'>
			<div className='container flex flex-col items-center justify-center'>
				<h2 className='text-4xl font-bold mb-4'>Shop all latest offers and innovations</h2>
				<a className='text-lg font-semibold mb-4' href='#'>
					View all offers
					<hr className='h-[2px] bg-black border-0 dark:bg-gray-700' />
				</a>
				<ul className='flex items-center gap-4'>
					{links?.map((link, index) => (
						<li className='text-lg font-semibold' key={index}>
							{link}
						</li>
					))}
				</ul>
				<ul className='mt-5 flex flex-wrap items-center gap-6'>
					{products?.map((product, index) => (
						<li
							key={index}
							className='group relative cursor-pointer p-[30px]  overflow-hidden w-[448px] h-[330px] flex flex-col items-center bg-[#f4f4f4] rounded-2xl'
						>
							<img
								className='mx-auto group-hover:scale-110 transition-all ease-in-out duration-300'
								src={product.url}
								alt=''
								width={201}
								height={151}
							/>
							<h3
								className={
									'w-[298px] text-center text-lg font-semibold mt-5 overflow-hidden webkit-box break-words truncate webkit-box-orient-vertical webkit-line-clamp-3' +
									(product.price ? null : 'hidden')
								}
							>
								{product.title}
							</h3>
							<p className='mt-[10px] text-blue-500 font-semibold text-sm '>
								Save up to ${product.price}
							</p>
							<div className='overflow-hidden h-[20px]'>
								<small className='relative transition-all ease-in-out duration-300 mt-[3px] mb-[10px] group-hover:top-[-25px]'>
									From $1899.99 before eligible trade-in.
								</small>
							</div>

							<button className='bg-black transition-all duration-300 ease-in-out text-white p-3 rounded-full text-center text-xs mt-3 absolute bottom-[-50px] group-hover:bottom-[10px] font-bold'>
								Buy now
							</button>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Products;
