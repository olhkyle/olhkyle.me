import React from 'react';
import Recoil from 'recoil';
import { Outlet, useParams } from 'react-router-dom';
import { LanguageSelect, MainTitle } from '../components';
import currentLangState from '../recoil/atom/currentLang';
import useGoBack from '../hooks/useGoBack';
import { FiArrowLeft } from 'react-icons/fi';

const ProjectContent = () => {
	const [currentLang, setCurrentLang] = Recoil.useRecoilState(currentLangState);
	const { title } = useParams();
	const goBack = useGoBack();

	return (
		<>
			<div className="flex flex-col justify-between sm:mt-[2rem]">
				<div className="flex justify-between items-center">
					<LanguageSelect currentLang={currentLang} setCurrentLang={setCurrentLang} />
					<button
						type="button"
						className="inline-flex justify-center items-center mr-3 w-8 h-8 rounded-full border-[1px] border-black dark:border-white"
						onClick={goBack}>
						<FiArrowLeft size="24" />
					</button>
				</div>
				<MainTitle>{title}</MainTitle>
			</div>
			<Outlet />
		</>
	);
};

export default ProjectContent;
