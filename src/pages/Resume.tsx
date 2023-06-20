import React from 'react';
import Recoil from 'recoil';
import { Divider, HighlightText, LanguageSelect, MainTitle, StyledBullet } from '../components';
import currentLangState from '../recoil/atom/currentLang';
import { ContactCard, DoubleSubTitle, LinksCard, ProjectTitle, SubTitle, ThirdSubTitle } from '../components/Resume';
import Overview from '../components/Resume/Overview';
import { FINEAPPLE_DEPLOY, FINEAPPLE_GITHUB, FINEAPPLE_RETROSPECT } from '../constants/url';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

const Resume = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex flex-col justify-between sm:flex-row sm:gap-10">
				<MainTitle>Resume.</MainTitle>
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
			<Divider marginTop="mt-4" />
			<div className="mt-[4rem]">
				<Overview />
				<div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 ">
					<ContactCard />
					<LinksCard />
				</div>

				<div className="mt-[8rem]">
					<SubTitle>Projects</SubTitle>

					<div className="grid grid-cols-1 sm:grid-flow-col gap-4 mt-[2.5rem] sm:grid-cols-3 sm:grid-rows-[100px_1fr_1.2fr_0.5fr]">
						<div className="row-span-1 sm:row-span-4">
							<ProjectTitle>FineApple</ProjectTitle>
							<p className="mt-2 text-gray-700 dark:text-gray-400">Team Project</p>
							<div className="sm:row-span-1 mt-3">
								<ThirdSubTitle>Links</ThirdSubTitle>
								<ul className="flex flex-row flex-wrap gap-2 sm:flex-col">
									<li className="inline-flex items-center gap-1">
										<AiOutlineGithub size="22" />
										<a href={FINEAPPLE_GITHUB} className="hover-underline">
											Github
										</a>
									</li>
									<li className="inline-flex items-center gap-1">
										<AiOutlineLink size="22" />
										<a href={FINEAPPLE_DEPLOY} className="hover-underline">
											Deployed Link
										</a>
									</li>
									<li className="inline-flex items-center gap-1">
										<AiOutlineLink size="22" />
										<a href={FINEAPPLE_RETROSPECT} className="hover-underline">
											Retrospect
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="row-span-1 sm:col-span-2 sm:h-[300px]">
							<DoubleSubTitle>Overview</DoubleSubTitle>
							<p>Community Web Application related to Computer / IT and Game topics</p>
						</div>

						<div className="row-span-1 sm:col-span-2">
							<DoubleSubTitle>My Tasks</DoubleSubTitle>
							<ul className="flex flex-col gap-2 list-disc ml-6">
								<li>Created UI guidelines for colors, font styles, component styling, and layout</li>
								<li>Designed CRUD for question list & details using Firebase API and React Query</li>
								<li>
									Developed AutoComplete UI Component based on keyword search for titles of selected topics and
									questions in the Select component
								</li>
								<li>Implemented Infinite Scroll to fetch a page unit list of topic-related questions</li>
								<li>Implemented custom styling of Mantine Core components with Emotion</li>
								<li>Deployed Frontend with Firebase and Github Actions</li>
							</ul>
						</div>

						<div className="row-span-1 sm:col-span-2">
							<DoubleSubTitle>Improvement</DoubleSubTitle>
							<ul className="flex flex-col gap-2 list-disc ml-6">
								<li>
									Controlled Routing based on user info and login status, using Higher Order Component(HOC) , such as
									AuthenticationGuard Component
								</li>
								<li>
									Improved code to proactively fetch Data from the Server and quickly show User a UI with server status,
									using Loader in React-Router-Dom
								</li>
								<li>Improved unnecessary Refetch by introducing React Query to manage server state and cache</li>
								<li>
									Introduced Firebase's Auth, Firestore, Storage and refactored it to enable actual service operation
									and deployment, after implementing mock server using Node.js and Express.js
								</li>
							</ul>
						</div>

						<div className="row-span-1 sm:col-span-2">
							<DoubleSubTitle>Tech Stacks</DoubleSubTitle>
							<div className="flex flex-wrap gap-1">
								<HighlightText color="text-blue-200">React</HighlightText>
								<HighlightText color="text-blue-200">JavaScript</HighlightText>
								<HighlightText color="text-blue-200">Recoil</HighlightText>
								<HighlightText color="text-blue-200">React Query</HighlightText>
							</div>
						</div>
					</div>

					<Divider />
				</div>
			</div>
		</>
	);
};

export default Resume;
