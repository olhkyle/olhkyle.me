import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiArrowLeft, FiLinkedin } from 'react-icons/fi';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { MdArrowRight } from 'react-icons/md';
import useSideNavActive from '../../hooks/useSideNavActive';
import { NavLink, SocialBadge } from '.';
import links from '../../constants/links';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactElement;
}

const socialLinks: SocialLink[] = [
  { name: 'github', href: 'https://github.com/olhkyle', icon: <AiOutlineGithub size="24" /> },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/hyukmin-kwon-40426415b/',
    icon: <FiLinkedin size="24" />,
  },
  { name: 'blog', href: 'https://velog.io/@defaultkyle', icon: <AiOutlineLink size="24" /> },
];

const Nav = () => {
  const [isActive, toggleActive] = useSideNavActive();
  const { pathname } = useLocation();

  return (
    <nav
      className={`fixed -left-72 w-[350px] border-r-[1px] border-r-gray-200 bg-white h-screen transition-transform ${
        isActive ? 'translate-x-72' : 'translate-x-0'
      } duration-500 z-20 dark:bg-dark`}>
      <div className="flex justify-between items-center w-full h-14 border-b-[1px]">
        <h1 className="ml-4 text-center font-semibold text-xl cursor-pointer">
          <Link to="/" className="py-1 px-2">
            💿 OLHKYLE
          </Link>
        </h1>
        <button className={`p-4`} onClick={toggleActive}>
          {isActive ? <FiArrowLeft size="27" /> : <RxHamburgerMenu size="27" />}
        </button>
      </div>
      <div className="flex">
        <div className="flex flex-col w-full justify-between">
          <ul className="flex flex-col gap-2 p-5 w-full">
            {links.map((link, idx) => (
              <li key={idx}>
                <NavLink link={link} currentPath={pathname.slice(1)} />
              </li>
            ))}
          </ul>
          <div className="mb-[50px] p-5 ">
            <div className="mb-2" onClick={() => {}}>
              <h2 className="font-bold">Hyukmin Kwon (Kyle)</h2>
            </div>
            <div className="mb-6">
              <p className="flex items-center">
                <MdArrowRight size="18" />
                <span>kylekwon.dev@gmail.com</span>
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
          className={`flex justify-center items-center ml-auto pl-10 m w-[60px] h-screen -rotate-90 font-bold text-xl`}>
          {!isActive && (pathname === '/' ? 'Home' : pathname.slice(1)[0].toUpperCase() + pathname.slice(2))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
