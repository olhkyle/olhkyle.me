import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-6xl font-bold lg:text-8xl break-keep">{children}</h1>;
};

export default Title;
