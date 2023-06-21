import React from 'react';
import Recoil from 'recoil';
import { LanguageSelect, MainTitle } from '../components';
import currentLangState from '../recoil/atom/currentLang';

const Portfolio = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex flex-col justify-between mt-[2rem] sm:flex-row sm:gap-10 sm:mt-[4rem]">
				<MainTitle>Portfolio.</MainTitle>
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
		</>
	);
};

export default Portfolio;
