import React from 'react';
import Recoil from 'recoil';
import { LanguageSelect, MainTitle } from '../components';
import currentLangState from '../recoil/atom/currentLang';

const Portfolio = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex justify-between gap-10">
				<MainTitle>Portfolio.</MainTitle>
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
		</>
	);
};

export default Portfolio;
