import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
	const [active, setActive] = useState('Home');
	const [toggle, setToggle] = useState(false);

	return (
		/** navigation section start */
		<nav className="navbar flex w-full items-center justify-center py-6">
			{/* logo start */}
			<img src={logo} alt="HooBank Logo" className="h-[32px] w-[124px]" />
			{/* logo end */}

			{/* navigation links start */}
			<ul className="hidden flex-1 list-none items-center justify-end sm:flex">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`cursor-pointer font-poppins text-[16px] font-normal ${active === nav.title ? 'text-white' : 'text-dimWhite'} 
						${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
						`}
						onClick={() => setActive(nav.title)}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>
			{/* navigation links end */}

			{/* hamburger menu start */}
			<div className="flex flex-1 items-center justify-end sm:hidden">
				<img src={toggle ? close : menu} alt="menu" className="h-[28px] w-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />

				<div
					className={`${!toggle ? 'hidden' : 'flex'} bg-black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
				>
					<ul className="flex flex-1 list-none flex-col items-start justify-end">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`cursor-pointer font-poppins text-[16px] font-medium ${active === nav.title ? 'text-white' : 'text-dimWhite'} 
								${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}
								`}
								onClick={() => setActive(nav.title)}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* hamburger menu end */}
		</nav>
		/** navigation section end */
	);
};

export default Navbar;
