import React from 'react';
import { Link } from 'react-router-dom';

interface SocialBadgeProps {
  linkHref: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const SocialBadge = ({ linkHref, children, onClick }: SocialBadgeProps) => {
  return (
    <Link to={linkHref} className="">
      <div className="p-1 border-[1px] border-black dark:border-white rounded-lg outline outline-gray-200 hover:outline-blue-200 hover:outline-2 hover:outline-offset-2">
        {children}
      </div>
    </Link>
  );
};

export default SocialBadge;
