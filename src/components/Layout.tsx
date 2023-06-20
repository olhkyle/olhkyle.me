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
				className={`mx-auto my-[4rem] px-[1rem] h-full transition-transform ${
					isActive ? 'translate-x-[360px]' : 'translate-x-[62px]'
				} duration-500 lg:w-[1024px] md:w-[720px] sm:max-w-3xl md:max-w-4xl lg:max-w-6xl `}>
				<Outlet />
			</main>
			<ScrollToTopButton topPosToStopShowing={300} />
		</div>
	);
};

export default Layout;
