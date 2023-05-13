import React from 'react';
import { Nav, ScrollToTopButton, ThemeButton } from '.';
import { Outlet } from 'react-router-dom';
import useSideNavActive from '../hooks/useSideNavActive';

const Layout = () => {
  const [isActive] = useSideNavActive();

  return (
    <div className="flex w-screen h-screen">
      <Nav />
      <main
        className={`mx-[100px] p-[3rem] transition-transform ${
          isActive ? 'translate-x-[360px]' : 'translate-x-[72px]'
        } duration-500 lg:max-w-5xl`}>
        <Outlet />
      </main>
      <ScrollToTopButton />
      <ThemeButton />
    </div>
  );
};

export default Layout;
