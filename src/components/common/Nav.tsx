import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiArrowLeft } from 'react-icons/fi';
import useSideNavActive from '../../hooks/useSideNavActive';
import { NavLink } from '.';

const links = ['About', 'Blog', 'Resume'];

const Nav = () => {
  const [isActive, toggleActive] = useSideNavActive();
  const { pathname } = useLocation();

  return (
    <nav
      className={`fixed -left-72 w-[350px] border-r-[1px] border-r-gray-200 bg-white h-screen transition-transform ${
        isActive ? 'translate-x-72' : 'translate-x-0'
      } duration-500 z-20 dark:bg-dark`}>
      <div className="flex justify-between items-center w-full h-14 border-b-[1px]">
        <h1 className="ml-4 text-center font-semibold text-lg cursor-pointer">
          <Link to="/" className="py-1 px-2 hover:underline">
            💿 OLHKYLE
          </Link>
        </h1>
        <button className={`p-4 ${isActive ? 'border-l-gray-200 border-l-[1px]' : ''}`} onClick={toggleActive}>
          {isActive ? <FiArrowLeft size="27" /> : <RxHamburgerMenu size="27" />}
        </button>
      </div>
      <div className="flex">
        <ul className="flex flex-col gap-2 p-5 w-full">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink link={link} currentPath={pathname.slice(1)} />
            </li>
          ))}
        </ul>
        <div
          className={`flex justify-center items-center ml-auto pl-10 m w-[60px] h-screen -rotate-90 font-bold text-xl`}>
          {!isActive && (pathname === '/' ? 'HOME' : pathname.slice(1).toUpperCase())}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
