import React from 'react';
import { EmphasisCircle } from '../../common';

interface SubTitleProps {
	children: React.ReactNode;
}

const SubTitle = ({ children }: SubTitleProps) => {
	return (
		<h2 className="mt-5 text-4xl font-bold">
			{children} <EmphasisCircle />
		</h2>
	);
};

export default SubTitle;
