import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-8xl font-bold">{children}</h1>;
};

export default Title;
