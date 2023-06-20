import React from 'react';

interface CalloutProps {
	content: string;
}

const Callout = ({ content }: CalloutProps) => {
	return (
		<div className="border-[1px] border-gray-300 rounded-lg">
			<span>💿</span>
			<p>{content}</p>
		</div>
	);
};

export default Callout;
