import React from 'react';
import Recoil from 'recoil';
import { Divider, HighlightText, LanguageSelect, MainTitle } from '../components';
import currentLangState from '../recoil/atom/currentLang';
import {
	ContactCard,
	DoubleSubTitle,
	LinksCard,
	Project,
	ProjectTitle,
	SubTitle,
	ThirdSubTitle,
} from '../components/Resume';
import Overview from '../components/Resume/Overview';
import { FINEAPPLE_DEPLOY, FINEAPPLE_GITHUB, FINEAPPLE_RETROSPECT } from '../constants/url';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import projects from '../data/projects';

const Resume = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex flex-col justify-between mt-[1rem] sm:flex-row sm:gap-10 sm:mt-[2rem]">
				{/* <MainTitle>Resume.</MainTitle> */}
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
			<Divider marginTop="mt-4" />
			<div className="mt-[2rem] sm:mt-[4rem]">
				<Overview />
				<div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 ">
					<ContactCard />
					<LinksCard />
				</div>

				<div className="mt-[8rem]">
					<SubTitle>Projects</SubTitle>
					{projects.map(project => (
						<Project key={project.title} project={project} />
					))}
				</div>

				<div className="mt-[8rem]">
					<SubTitle>Skills</SubTitle>
				</div>
				<div className="mt-[8rem]">
					<SubTitle>Education</SubTitle>
				</div>
				<div className="mt-[8rem]">
					<SubTitle>ETC</SubTitle>
				</div>
			</div>
		</>
	);
};

export default Resume;
