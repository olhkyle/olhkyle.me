import React from 'react';

interface ScrollToTopButtonProps {
  topPosToStopShowing?: number;
}

const ScrollToTopButton = ({ topPosToStopShowing = 300 }: ScrollToTopButtonProps) => {
  return <>{topPosToStopShowing && <button onClick={() => {}}>Go</button>}</>;
};

export default ScrollToTopButton;
