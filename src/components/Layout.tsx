import React from 'react';
import { Nav, ScrollToTopButton, ThemeButton } from '.';
import { Outlet } from 'react-router-dom';
import useSideNavActive from '../hooks/useSideNavActive';

const Layout = () => {
	const [isActive] = useSideNavActive();

	return (
		<div className="flex">
			<Nav />
			<main
				className={`m-[3rem] pl-[2rem] pt-[2rem] w-full h-full transition-transform ${
					isActive ? 'translate-x-[360px]' : 'translate-x-[72px]'
				} duration-500 lg:max-w-6xl`}>
				<Outlet />
			</main>
			<ScrollToTopButton topPosToStopShowing={300} />
			<ThemeButton />
		</div>
	);
};

export default Layout;
