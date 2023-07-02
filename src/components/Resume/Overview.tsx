import React from 'react';

const Overview = () => {
	return (
		<div className="flex justify-between items-center">
			<div>
				<h2 className="text-[3rem] font-bold break-keep sm:text-[2.5rem] md:text-6xl">Hyukmin Kwon</h2>
				<p className="mt-1 ml-1 text-lg md:text-xl break-keep">FrontEnd Developer with background of Architecture</p>
				<ul className="mt-10 ml-6 text-base responsive-text-gray list-disc break-keep">
					<li>Striving for steady growth</li>
					<li>Focusing on the details of UI/UX</li>
					<li>Keeping the basic, no matter what project or work I participate in.</li>
				</ul>
			</div>
			<div className="hidden justify-center items-center mr-2 w-64 border-[1px] border-dark object-cover overflow-hidden rounded-full sm:flex">
				<img src="./resume/mee.png" alt="me" className="block w-full h-full" />
			</div>
		</div>
	);
};

export default Overview;
