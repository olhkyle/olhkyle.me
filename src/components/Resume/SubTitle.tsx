import React from 'react';
import { SemiColonText } from '../common';

interface SubTitleProps {
	children: React.ReactNode;
}

const SubTitle = ({ children }: SubTitleProps) => {
	return (
		<h2 className="mt-5 text-4xl font-bold">
			{children} <SemiColonText />
		</h2>
	);
};

export default SubTitle;
