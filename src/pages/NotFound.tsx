import React from 'react';

import useGoBack from '../hooks/useGoBack';

const NotFound = () => {
	const goBack = useGoBack();

	return (
		<div className="text-center">
			<p className="font-bold text-2xl">Sorry, page's not found ☕️</p>
			<button type="button" className="mx-auto mt-4 px-4 py-2 bg-blue-100 font-bold rounded-xl" onClick={goBack}>
				Go Home
			</button>
		</div>
	);
};

export default NotFound;
