import React from 'react';

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle = ({ children }: CardTitleProps) => {
  return <h2 className="mt-14 text-2xl font-semibold">{children}</h2>;
};

export default CardTitle;
