import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import useScroll from '../../hooks/useScroll';

interface ScrollToTopButtonProps {
	topPosToStopShowing?: number;
}

const ScrollToTopButton = ({ topPosToStopShowing = 300 }: ScrollToTopButtonProps) => {
	const yOffset = useScroll();

	return (
		<>
			{yOffset >= topPosToStopShowing && (
				<button
					className="fixed bottom-5 right-5 p-2 rounded-xl border-[1px] border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 sm:animate-bounce"
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
					}}>
					<FiArrowUp size="24" />
				</button>
			)}
		</>
	);
};

export default ScrollToTopButton;
