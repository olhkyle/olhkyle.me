import React from 'react';
import { SemiColonText } from '../common';

interface CardTitleProps {
	children: React.ReactNode;
}

const CardTitle = ({ children }: CardTitleProps) => {
	return (
		<h2 className="mt-14 text-2xl font-semibold">
			{children} <SemiColonText />
		</h2>
	);
};

export default CardTitle;
