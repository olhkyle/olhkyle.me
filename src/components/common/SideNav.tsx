import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdArrowRight } from 'react-icons/md';
import links from '../../constants/links';
import { NavLink, ThemeButton } from '.';
import { GMAIL } from '../../constants/url';

interface SideNavProps {
	isActive: boolean;
	toggleActive: () => void;
}

const SideNav = ({ isActive, toggleActive }: SideNavProps) => {
	const { pathname } = useLocation();

	return (
		<div
			className={`fixed right-0 top-0 w-[280px] border-l-[1px] border-r-gray-900 bg-white h-screen h-[calc(var(--vh) * 100)] transition-transform ${
				isActive ? 'translate-x-0' : 'translate-x-[280px]'
			} duration-500 z-50 dark:bg-dark sm:hidden`}>
			<div className="flex justify-between items-center w-full h-[80px] border-b-[1px]">
				<button className="p-4" onClick={toggleActive}>
					<FiArrowLeft size="27" />
				</button>
				<h1 className="mr-4 text-xl text-center font-semibold cursor-pointer" onClick={toggleActive}>
					<Link to="/" className="py-1 px-2">
						💿 LHKYLE
					</Link>
				</h1>
				<ThemeButton position="out" />
			</div>

			<div className="flex h-full">
				<div className="flex flex-col justify-between w-full h-full">
					<ul className="flex flex-col gap-2 p-5">
						{links.map((link, idx) => (
							<li key={idx}>
								<NavLink link={link} currentPath={pathname.slice(1)} onClick={toggleActive} />
							</li>
						))}
					</ul>
					<div className="mb-[60px] p-5">
						<div className="mb-2" onClick={() => {}}>
							<h2 className="font-bold">Hyukmin Kwon (Kyle)</h2>
						</div>
						<div className="mb-6">
							<p className="flex items-center">
								<MdArrowRight size="18" />
								<span>{GMAIL}</span>
							</p>
							<p className="flex items-center">
								<MdArrowRight size="18" />
								<span>Seoul, Korea</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
