import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';

interface RedirectButtonProps {
	path: string;
	children: React.ReactNode;
}

const RedirectButton = ({ path, children }: RedirectButtonProps) => {
	const navigate = useNavigate();

	return (
		<button
			className={`flex-center px-2 w-48 h-14 text-xl toggle-dark font-semibold border-[2px] border-black cursor-pointer hover:text-black hover:bg-white hover:border-[2px] hover:border-black dark:hover:bg-black dark:hover:border-white dark:hover:text-white`}
			onClick={() => navigate(`/${path}`)}>
			{children}
			<IoMdArrowForward size="24" className="mr-2 hover:transition-transform translate-x-4" />
		</button>
	);
};

export default RedirectButton;
