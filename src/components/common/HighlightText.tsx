import React from 'react';

interface HighlightTextProps {
	children: React.ReactNode;
	color: string;
}

const HighlightText = ({ color, children }: HighlightTextProps) => {
	return <span className={`px-[6px] py-[2px] bg-gray-200 ${color} rounded-[10px] dark:bg-gray-300`}>{children}</span>;
};

export default HighlightText;
