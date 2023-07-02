import React from 'react';
import Recoil from 'recoil';
import {
	Cover,
	LanguageSelect,
	MainTitle,
	StrengthsCard,
	SkillCard,
	Divider,
	LanguagesCard,
	ExperienceCard,
	KindOfDeveloperCard,
} from '../components';
import currentLangState from '../recoil/atom/currentLang';

const AboutMe = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex justify-between items-center w-full sm:mt-[2rem]">
				<div className="flex flex-col justify-between">
					<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
					<MainTitle>About Me.</MainTitle>
				</div>
				<div className="relative hidden w-48 h-48 bg-gradient-to-r from-blue-100 to-white md:block">
					<span className={`absolute w-32 h-32 bg-white dark:bg-dark rotate-[45deg] z-10`} />
				</div>
			</div>

			<Cover currentLang={currentLang} />
			<Divider />

			<StrengthsCard currentLang={currentLang} />
			<KindOfDeveloperCard currentLang={currentLang} />
			<SkillCard />
			<LanguagesCard currentLang={currentLang} />
			<ExperienceCard />
		</>
	);
};

export default AboutMe;
