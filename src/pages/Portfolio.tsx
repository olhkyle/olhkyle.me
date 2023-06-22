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
			<div className="flex flex-col gap-10 mx-auto my-10 py-10 px-5 rounded-[2rem] bg-gray-50 dark:bg-gray-900 text-center sm:rounded-full">
				<div className="text-xl sm:text-2xl underline decoration-blue-200">
					{currentLang === 'ENG' ? `Currently, this page being prepared 👷🏻‍♂️` : `현재 이 페이지는 준비중 입니다 👷🏻‍♂️`}
				</div>
				<div className="text-xl sm:text-2xl">Coming Soon...</div>
			</div>
		</>
	);
};

export default Portfolio;
