import React from 'react';
import { Nav, ScrollToTopButton, Footer } from '.';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
	const { pathname } = useLocation();

	React.useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, [pathname]);

	return (
		<>
			<Nav />
			<main className="mx-auto px-[1rem] h-full sm:w-[640px] md:w-[768px] lg:w-[1024px]">
				<Outlet />
			</main>
			<Footer />
			<ScrollToTopButton topPosToStopShowing={300} />
		</>
	);
};

export default Layout;
