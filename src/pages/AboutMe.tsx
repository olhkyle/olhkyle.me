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
} from '../components';
import currentLangState from '../recoil/atom/currentLang';

const AboutMe = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex justify-between w-full">
				<div className="flex flex-col justify-between">
					<MainTitle>About Me.</MainTitle>
					<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
				</div>
				<div className="flex justify-center items-center p-4 w-64 border-[1px] border-dark dark:border-gray-800 rounded-full">
					<img src="./own-furnitures.png" alt="furnitures" className="block w-full h-full bg-transparent`" />
				</div>
			</div>

			<Cover currentLang={currentLang} />
			<Divider />

			<StrengthsCard currentLang={currentLang} />
			<SkillCard />
			<LanguagesCard currentLang={currentLang} />
			<ExperienceCard />
		</>
	);
};

export default AboutMe;
