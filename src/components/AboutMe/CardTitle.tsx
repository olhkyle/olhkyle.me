import React from 'react';
import { EmphasisCircle } from '../common';

interface CardTitleProps {
	children: React.ReactNode;
}

const CardTitle = ({ children }: CardTitleProps) => {
	return (
		<h2 className="text-2xl font-semibold">
			{children} <EmphasisCircle />
		</h2>
	);
};

export default CardTitle;
