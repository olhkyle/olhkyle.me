import { Link } from 'react-router-dom';

interface NavLinkProps {
	link: string;
	currentPath: string;
	onClick?: () => void;
}

const NavLink = ({ link, currentPath, onClick }: NavLinkProps) => {
	const isNavLinkCurrentPath: string =
		currentPath === link.toLowerCase()
			? 'bg-black text-white dark:bg-white dark:text-black'
			: 'bg-white text-black dark:bg-dark dark:text-white';

	return (
		<div
			className={`relative flex items-center px-2 h-12 text-xl font-semibold ${isNavLinkCurrentPath} cursor-pointer hover:underline hover:underline-offset-[8px] min-w-[110px]`}
			onClick={onClick}>
			<span className={`absolute -bottom-2.5 -right-2.5 w-5 h-5 bg-white dark:bg-dark rotate-[45deg]`} />
			<Link to={`/${link.toLowerCase()}`} className="w-full p-2">
				{link}.
			</Link>
		</div>
	);
};

export default NavLink;
