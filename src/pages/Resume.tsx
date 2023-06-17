import React from 'react';
import Recoil from 'recoil';
import { LanguageSelect, MainTitle } from '../components';
import currentLangState from '../recoil/atom/currentLang';

const Resume = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex justify-between gap-10">
				<MainTitle>Resume.</MainTitle>
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
		</>
	);
};

export default Resume;
