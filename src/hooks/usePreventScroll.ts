import React from 'react';

const usePreventScroll = (dependency: boolean) => {
	React.useEffect(() => {
		if (dependency) {
			document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
			return () => {
				const scrollY = document.body.style.top;
				document.body.style.cssText = '';
				window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
			};
		}
	}, [dependency]);
};

export default usePreventScroll;