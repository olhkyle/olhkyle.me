import React from 'react';
import { Link } from 'react-router-dom';

interface SocialBadgeProps {
	linkHref: string;
	children: React.ReactElement;
	onClick?: () => void;
}

const SocialBadge = ({ linkHref, children }: SocialBadgeProps) => {
	return (
		<Link to={linkHref} target="_blank">
			<div className="p-1">{children}</div>
		</Link>
	);
};

export default SocialBadge;
