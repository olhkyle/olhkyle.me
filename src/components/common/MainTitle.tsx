import React from 'react';

interface TitleProps {
	children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
	return <h1 className="mt-6 text-6xl font-bold break-keep sm:text-8xl sm:mt-0">{children}</h1>;
};

export default Title;
