import React from 'react';
import { LanguageSelect, MainTitle } from '../components';

const Blog = () => {
	const [currentLang, setCurrentLang] = React.useState<Lang>('ENG');

	return (
		<>
			<div className="flex flex-col justify-between gap-10">
				<MainTitle>Blog.</MainTitle>
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
		</>
	);
};

export default Blog;
