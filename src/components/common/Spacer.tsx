import React from 'react';

const Spacer = ({ width }: { width: string }) => {
	console.log(width);
	return <span className={width}></span>;
};

export default Spacer;
