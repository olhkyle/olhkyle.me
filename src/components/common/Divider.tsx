import React from 'react';

interface DividerProps {
	marginTop?: string;
}

const Divider = ({ marginTop = 'mt-8' }: DividerProps) => (
	<div className={`h-[0.5px] ${marginTop} bg-gray-300 dark:bg-gray-600`}></div>
);

export default Divider;
