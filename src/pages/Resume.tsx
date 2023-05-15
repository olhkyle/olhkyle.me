import React from 'react';
import { LanguageSelect, MainTitle } from '../components';

const Resume = () => {
	const [currentLang, setCurrentLang] = React.useState<Lang>('ENG');

	return (
		<>
			<div className="flex flex-col justify-between gap-10">
				<MainTitle>Resume.</MainTitle>
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
		</>
	);
};

export default Resume;
