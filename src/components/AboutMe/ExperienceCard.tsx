import React from 'react';
import Recoil from 'recoil';
import { CardTitle } from '.';
import { CLASS101, DESIGNTHOU } from '../../constants/url';
import { Link } from 'react-router-dom';
import formattedDate from '../../utils/formattedDate';
import currentLangState from '../../recoil/atom/currentLang';

interface Experience {
	ENRole: string;
	KRRole: string;
	title: string;
	KRTitle?: string;
	ENContent: string;
	KRContent: string;
	startDate: Date;
	endDate: Date | 'Present' | '';
	link?: string;
}

const experience: Experience[] = [
	{
		ENRole: '',
		KRRole: '',
		title: '',
		ENContent: 'Zerobase FE Offline Bootcamp',
		KRContent: '제로베이스 프론트엔드 오프라인 과정',
		startDate: new Date(2023, 1),
		endDate: new Date(2023, 5),
	},
	{
		ENRole: 'Programming Operator',
		KRRole: '개발 및 보안 담당자',
		title: '@DesignThou',
		KRTitle: '디자인도우',
		ENContent: 'Architecture Content Platform Operation',
		KRContent: '건축 컨텐츠 플랫폼 운영',
		startDate: new Date(2022, 2),
		endDate: 'Present',
		link: DESIGNTHOU,
	},
	{
		ENRole: 'Producer of Architecture Online Course',
		KRRole: '건축 온라인 클래스 제작/운영자',
		title: '@Class101',
		KRTitle: '클래스 101',
		ENContent: 'Architecture All in One Class with Sketchup',
		KRContent: '[건축 올인원] 휙, 사로잡는 건축 디자인 클래스',
		startDate: new Date(2021, 6),
		endDate: 'Present',
		link: CLASS101,
	},
	{
		ENRole: 'Certificate',
		KRRole: '자격증',
		title: '@Interior Design Certificate',
		KRTitle: '@실내건축산업기사',
		ENContent: 'HRDK, Korea',
		KRContent: '한국산업인력공단, 대한민국',
		startDate: new Date(2020, 11),
		endDate: '',
	},
	{
		ENRole: 'Exchange Student',
		KRRole: '교환학생',
		title: '@Technische HochSchule Augsburg',
		ENContent: 'Germany',
		KRContent: '독일',
		startDate: new Date(2019, 3),
		endDate: new Date(2019, 9),
	},
];

const ExperienceCard = () => {
	const currentLang = Recoil.useRecoilValue(currentLangState);

	return (
		<div className="mt-8 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Experience</CardTitle>
			<ul className="flex flex-col gap-6 mt-5 break-keep text-lg">
				{experience.map(({ ENRole, KRRole, title, KRTitle, ENContent, KRContent, startDate, endDate, link }) => (
					<li key={title} className="flex flex-col">
						<div className="responsive-text-gray">{formattedDate({ startDate, endDate })}</div>
						<div>
							<span className="text-lg">
								{currentLang === 'ENG' ? ENRole : KRRole} {ENRole ? ' ∙ ' : ''}
							</span>
							<Link
								to={link ? link : '#'}
								target={link ? '_blank' : ''}
								className={link ? 'cursor-pointer' : 'cursor-default'}>
								<span
									className={`${
										link ? 'text-bold underline underline-offset-4 decoration-blue-200 hover:text-blue-200' : ''
									}`}>
									<span>{currentLang === 'ENG' ? title : KRTitle}</span>
								</span>
							</Link>
							<span className="ml-1">{currentLang === 'ENG' ? ENContent : KRContent}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceCard;
