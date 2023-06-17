import React from 'react';

interface TitleProps {
	children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
	return <h1 className="text-6xl font-bold break-keep lg:text-8xl sm:text-2xl">{children}</h1>;
};

export default Title;
