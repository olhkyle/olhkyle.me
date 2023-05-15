import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';

interface ScrollToTopButtonProps {
	topPosToStopShowing?: number;
}

const ScrollToTopButton = ({ topPosToStopShowing = 300 }: ScrollToTopButtonProps) => {
	const [theme] = useTheme();

	return (
		<>
			{topPosToStopShowing && (
				<button
					className="fixed bottom-5 right-5 p-2 rounded-xl border-[1px] border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
					onClick={() => {}}>
					<FiArrowUp size="24" />
				</button>
			)}
		</>
	);
};

export default ScrollToTopButton;
