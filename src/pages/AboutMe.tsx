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
	GradientSquare,
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
				<GradientSquare />
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
