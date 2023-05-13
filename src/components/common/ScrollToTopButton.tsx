import React from 'react';
import clsx from 'clsx';
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
          className={clsx(
            `fixed bottom-5 right-5 p-2 rounded-xl border-[1px]`,
            { 'hover:bg-gray-100': theme === 'light' },
            { 'hover:bg-gray-900': theme === 'dark' }
          )}
          onClick={() => {}}>
          <FiArrowUp size="24" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
