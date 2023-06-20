import React from 'react';
import { CardTitle } from '.';
import { CLASS101, DESIGNTHOU } from '../../constants/url';

interface Experience {
	role: string | null;
	title: string;
	content: string | null;
	duration: string;
	link?: string;
}

const experience: Experience[] = [
	{
		role: null,
		title: '',
		content: 'Zerobase FE Offline Bootcamp',
		duration: '2023.01 - 2023.05',
	},
	{
		role: 'Programming Operator',
		title: '@DesignThou',
		content: 'Architecture Content Platform Operation',
		duration: '2022.02 - Present',
		link: DESIGNTHOU,
	},
	{
		role: 'Producer of Architecture Online Course',
		title: '@Class101',
		content: 'Architecture All in One Class(SketchUp)',
		duration: '2021.06 - Present',
		link: CLASS101,
	},
	{
		role: 'Certificate',
		title: '@Interior Design Certificate',
		content: 'HRDK, Korea',
		duration: '2020.11',
	},
	{
		role: 'Exchange Student in Germany',
		title: '@Technische HochSchule Augsburg',
		content: null,
		duration: '2019.03 - 2019.09',
	},
];

const ExperienceCard = () => {
	return (
		<div className="p-4">
			<CardTitle>Experience</CardTitle>
			<ul className="flex flex-col gap-4 mt-5 break-keep text-lg">
				{experience.map(({ role, title, content, duration, link }) => (
					<li key={title} className="flex gap-2">
						<p>
							{role}{' '}
							<a href={link ? link : '#'}>
								<span className="underline underline-offset-4 decoration-blue-300 hover:text-blue-200">{title}</span>
							</a>
							- {content} / <span className="font-grey-100">{duration}</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceCard;
