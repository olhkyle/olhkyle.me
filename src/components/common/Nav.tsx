import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiArrowLeft, FiLinkedin } from 'react-icons/fi';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { MdArrowRight } from 'react-icons/md';
import useSideNavActive from '../../hooks/useSideNavActive';
import { NavLink, SocialBadge, ThemeButton } from '.';
import links from '../../constants/links';
import { GITHUB, GMAIL, LINKEDIN, VELOG } from '../../constants/url';

interface SocialLink {
	name: string;
	href: string;
	icon: React.ReactElement;
}

const socialLinks: SocialLink[] = [
	{ name: 'github', href: GITHUB, icon: <AiOutlineGithub size="24" /> },
	{
		name: 'linkedin',
		href: LINKEDIN,
		icon: <FiLinkedin size="24" />,
	},
	{ name: 'blog', href: VELOG, icon: <AiOutlineLink size="24" /> },
];

const Nav = () => {
	const [isActive, toggleActive] = useSideNavActive();
	const { pathname } = useLocation();

	return (
		<>
			<nav
				className={`fixed -left-72 w-[350px] border-r-[1px] border-r-gray-200 bg-white h-full transition-transform ${
					isActive ? 'translate-x-72' : 'translate-x-0'
				} duration-500 z-20 dark:bg-dark`}>
				<div className="flex justify-between items-center w-full h-14 border-b-[1px]">
					<h1 className="ml-4 text-center font-semibold text-2xl cursor-pointer" onClick={toggleActive}>
						<Link to="/" className="py-1 px-2">
							💿 LHKYLE
						</Link>
					</h1>
					<button className={`p-4`} onClick={toggleActive}>
						{isActive ? <FiArrowLeft size="27" /> : <RxHamburgerMenu size="27" />}
					</button>
				</div>
				<div className="relative flex h-full">
					<div className="flex flex-col w-full justify-between">
						<ul className="flex flex-col gap-2 p-5 w-[80%] sm:w-full">
							{links.map((link, idx) => (
								<li key={idx}>
									<NavLink link={link} currentPath={pathname.slice(1)} onClick={toggleActive} />
								</li>
							))}
						</ul>
						<div className="mb-[50px] p-5">
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
							<ul className="flex gap-3">
								{socialLinks.map(({ name, href, icon }) => (
									<li key={name}>
										<SocialBadge linkHref={href}>{icon}</SocialBadge>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div
						className={`hidden justify-center items-center ml-auto pl-10 w-[60px] h-full -rotate-90 font-bold text-xl sm:flex`}>
						{!isActive && (pathname === '/' ? 'Home' : pathname.slice(1)[0].toUpperCase() + pathname.slice(2))}
					</div>
					<ThemeButton />
				</div>
			</nav>
			{isActive ? (
				<div
					className="fixed top-0 right-0 left-0 bottom-0 bg-dark opacity-70 z-10 sm:hidden"
					onClick={toggleActive}></div>
			) : null}
		</>
	);
};

export default Nav;
