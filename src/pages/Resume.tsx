import React from 'react';
import Recoil from 'recoil';
import { Divider, LanguageSelect } from '../components';
import currentLangState from '../recoil/atom/currentLang';
import { ContactCard, LinksCard, Project, SubTitle, Overview, SkillStack, Education, Etc } from '../components/Resume';
import { education, etc, skills, projects } from '../data';

const Resume = () => {
	return (
		<>
			<div className="mt-[2rem] sm:mt-[4rem]">
				<Overview />
				<div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 ">
					<ContactCard />
					<LinksCard />
				</div>

				<div className="mt-[6rem] sm:mt-[8rem]">
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
		</>
	);
};

export default Resume;
