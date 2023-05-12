import React from 'react';
import { Footer, Nav, ScrollToTopButton } from '.';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
