import React from 'react';
import Recoil from 'recoil';
import { LanguageSelect, MainTitle, PortfolioProject } from '../components';
import currentLangState from '../recoil/atom/currentLang';
import { projects } from '../data';

const Portfolio = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex flex-col justify-between sm:mt-[2rem]">
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
				<MainTitle>Portfolio.</MainTitle>
			</div>
			<div className="grid grid-cols-4 gap-x-6 mt-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-64">
				{projects.map(project => (
					<PortfolioProject key={project.title} project={project} />
				))}
			</div>
		</>
	);
};

export default Portfolio;
