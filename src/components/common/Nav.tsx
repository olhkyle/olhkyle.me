import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import useSideNavActive from '../../hooks/useSideNavActive';
import { NavLink, SideNav, ThemeButton } from '.';
import links from '../../constants/links';
import usePreventScroll from '../../hooks/usePreventScroll';

const Nav = () => {
	const [isActive, toggleActive] = useSideNavActive();
	const { pathname } = useLocation();

	usePreventScroll(isActive);

	return (
		<>
			<nav className="sticky top-0 px-[1rem] h-[80px] bg-white dark:bg-dark ">
				<div className="flex justify-between mx-auto md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
					<h1 className="flex-center ml-1 min-w-[130px] min-h-[80px] text-center font-semibold text-2xl cursor-pointer">
						<Link to="/">💿 LHKYLE</Link>
					</h1>

					<div className="hidden justify-between items-center gap-6 ml-10 px-2 min-w-[440px] sm:flex">
						<ul className="flex gap-2 items-center">
							{links.map((link, idx) => (
								<li key={idx}>
									<NavLink link={link} currentPath={pathname.slice(1)} />
								</li>
							))}
						</ul>
						<ThemeButton position="in" />
					</div>
					<button className="p-4 sm:hidden" onClick={toggleActive}>
						<RxHamburgerMenu size="27" />
					</button>
				</div>
			</nav>
			<SideNav isActive={isActive} toggleActive={toggleActive} />
			{isActive && (
				<div
					className="fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm z-10 sm:hidden"
					onClick={toggleActive}></div>
			)}
		</>
	);
};

export default Nav;
