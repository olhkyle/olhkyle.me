import React from 'react';
import Recoil from 'recoil';
import { Divider, LanguageSelect } from '../components';
import currentLangState from '../recoil/atom/currentLang';
import { ContactCard, LinksCard, Project, SubTitle, Overview, SkillStack, Education, Etc } from '../components/Resume';
import projects from '../data/projects';
import { education, etc, skills } from '../data';

const Resume = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex flex-col justify-between mt-[1rem] sm:flex-row sm:gap-10 sm:mt-[2rem]">
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
			<Divider marginTop="mt-4" />
			{currentLang === 'ENG' ? (
				<div className="mt-[2rem] sm:mt-[4rem]">
					<Overview />
					<div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 ">
						<ContactCard />
						<LinksCard />
					</div>

					<div className="mt-[8rem]">
						<SubTitle>Projects</SubTitle>
						<ul>
							{projects.map(project => (
								<React.Fragment key={project.title}>
									<Project project={project} />
									<Divider />
								</React.Fragment>
							))}
						</ul>
					</div>

					<div className="mt-[6rem]">
						<SubTitle>Skills</SubTitle>
						<ul className="flex flex-col gap-6 mt-[2.5rem]">
							{skills.map(skill => (
								<SkillStack key={skill.description} _skill={skill} />
							))}
						</ul>
					</div>
					<div className="mt-[6rem]">
						<SubTitle>Education</SubTitle>
						<ul className="flex flex-col gap-10 mt-[2.5rem]">
							{education.map(item => (
								<Education key={item.title} education={item} />
							))}
						</ul>
					</div>
					<div className="mt-[6rem]">
						<SubTitle>ETC</SubTitle>
						<ul className="flex flex-col gap-10 mt-[2.5rem]">
							{etc.map(item => (
								<Etc key={item.title} _etc={item} />
							))}
						</ul>
					</div>
				</div>
			) : (
				<div className="my-20 text-xl text-center underline decoration-blue-200"> "현재 번역 준비중입니다 👷🏻‍♂️"</div>
			)}
		</>
	);
};

export default Resume;
