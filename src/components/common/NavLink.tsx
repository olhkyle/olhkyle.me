import { Link } from 'react-router-dom';
import { BsArrowUpRightSquare } from 'react-icons/bs';

interface NavLinkProps {
  link: string;
  currentPath: string;
}

const NavLink = ({ link, currentPath }: NavLinkProps) => {
  return (
    <div
      className={`relative flex items-center px-2 h-12 text-2xl font-semibold ${
        currentPath === link.toLowerCase()
          ? 'bg-black text-white dark:bg-white dark:text-black'
          : 'bg-white text-black dark:bg-dark dark:text-white'
      } cursor-pointer hover:underline hover:underline-offset-[8px]`}>
      <span className={`absolute -bottom-2.5 -right-2.5 w-5 h-5 bg-white dark:bg-dark rotate-[45deg]`} />
      <Link to={`/${link.toLowerCase()}`} className="w-full p-2">
        {link.toUpperCase()}.
      </Link>
    </div>
  );
};

export default NavLink;
