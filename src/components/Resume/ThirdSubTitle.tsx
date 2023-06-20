import React from 'react';
import { EmphasisCircle } from '../common';

interface DoubleSubTitleProps {
	children: React.ReactNode;
}

const ThirdSubTitle = ({ children }: DoubleSubTitleProps) => {
	return (
		<h2 className="mb-2 text-xl font-semibold">
			{children} <EmphasisCircle />
		</h2>
	);
};

export default ThirdSubTitle;
