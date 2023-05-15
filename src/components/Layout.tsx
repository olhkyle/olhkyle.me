import React from 'react';
import { Nav, ScrollToTopButton, ThemeButton } from '.';
import { Outlet } from 'react-router-dom';
import useSideNavActive from '../hooks/useSideNavActive';

const Layout = () => {
	const [isActive] = useSideNavActive();

	return (
		<div className="flex w-screen h-screen">
			<Nav />
			<main
				className={`ml-[40px] mr-[80px] mt-[1rem] p-[3rem] w-full h-full transition-transform overflow-scroll hide-scrollbar hide-scrollbar::-webkit-scrollbar ${
					isActive ? 'translate-x-[360px]' : 'translate-x-[72px]'
				} duration-500 lg:max-w-6xl lg:mx-[120px] md:min-w-[600px] sm:min-w-[300px]`}>
				<Outlet />
			</main>
			<ScrollToTopButton />
			<ThemeButton />
		</div>
	);
};

export default Layout;
