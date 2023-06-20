import React from 'react';

interface TitleProps {
	children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
	return <h1 className="text-6xl font-bold break-keep sm:text-8xl">{children}</h1>;
};

export default Title;
