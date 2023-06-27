import React from 'react';
import { Outlet } from 'react-router-dom';

const PortfolioProjectLayout = () => {
	return (
		<>
			<h1>portfolio projects</h1>
			<Outlet />
		</>
	);
};

export default PortfolioProjectLayout;
