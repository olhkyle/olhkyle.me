import React from 'react';
import Recoil from 'recoil';
import { Divider, LanguageSelect, MainTitle } from '../components';
import currentLangState from '../recoil/atom/currentLang';
import { ContactCard, DoubleSubTitle, LinksCard, ProjectTitle, SubTitle } from '../components/Resume';
import Overview from '../components/Resume/Overview';

const Resume = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);

	return (
		<>
			<div className="flex justify-between gap-10">
				<MainTitle>Resume.</MainTitle>
				<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
			</div>
			<Divider />
			<div className="mt-[4rem]">
				<Overview />
				<div className="grid grid-rows-2 sm:grid-cols-2 ">
					<ContactCard />
					<LinksCard />
				</div>
				<div>
					<SubTitle>Projects</SubTitle>
					<div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 mt-[2rem]">
						<div className="row-span-3">
							<ProjectTitle>FineApple</ProjectTitle>
						</div>
						<div className="col-span-2">
							<DoubleSubTitle>Overview</DoubleSubTitle>
						</div>
						<div className="row-span-2 col-span-2">jadlfjlsdjf</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume;
