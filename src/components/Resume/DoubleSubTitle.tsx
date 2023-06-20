import React from 'react';
import { SemiColonText } from '../common';

interface DoubleSubTitleProps {
	children: React.ReactNode;
}

const DoubleSubTitle = ({ children }: DoubleSubTitleProps) => {
	return (
		<h2 className="mt-10 text-2xl font-semibold">
			{children} <SemiColonText />
		</h2>
	);
};

export default DoubleSubTitle;
