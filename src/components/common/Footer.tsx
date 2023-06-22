import React from 'react';
import SocialBadge from './SocialBadge';
import { GITHUB, LINKEDIN, VELOG } from '../../constants/url';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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

const Footer = () => {
	const navigate = useNavigate();
	return (
		<footer className="mt-20 px-[1rem]">
			<div className="flex justify-between items-center mx-auto py-5 border-t-[1px] font-medium border-gray-200 md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
				<div className="flex gap-2">
					<span>© 2023</span>
					<span className="font-semibold cursor-pointer" onClick={() => navigate('/')}>
						💿lhkyle.
					</span>
				</div>
				<ul className="flex items-center gap-3">
					{socialLinks.map(({ name, href, icon }) => (
						<li key={name}>
							<SocialBadge linkHref={href}>{icon}</SocialBadge>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
