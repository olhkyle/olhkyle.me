import React from 'react';

interface HighlightTextProps {
	children: React.ReactNode;
	color: string;
}

const HighlightText = ({ color, children }: HighlightTextProps) => {
	return <span className={`px-[5px] py-[2.5px] bg-gray-200 ${color} rounded-[10px] dark:bg-gray-300`}>{children}</span>;
};

export default HighlightText;
