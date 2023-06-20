import React from 'react';
import { EmphasisCircle } from '../common';

interface DoubleSubTitleProps {
	children: React.ReactNode;
}

const DoubleSubTitle = ({ children }: DoubleSubTitleProps) => {
	return (
		<h2 className="mb-2 text-2xl font-semibold">
			{children} <EmphasisCircle />
		</h2>
	);
};

export default DoubleSubTitle;
