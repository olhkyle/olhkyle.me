import React from 'react';

interface TitleProps {
	children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
	return <h2 className="mt-6 text-[57px] font-bold break-keep sm:text-8xl sm:mt-0">{children}</h2>;
};

export default Title;
