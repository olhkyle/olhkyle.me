import React from 'react';
import { CardTitle } from '.';

interface Experience {
	role: string | null;
	title: string;
	content: string | null;
	duration: string;
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
	},
	{
		role: 'Producer of Architecture Online Course',
		title: '@Class101',
		content: 'Architecture All in One Class(SketchUp)',
		duration: '2021.06 - Present',
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
		<>
			<CardTitle>Experience</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 mb-10 break-keep text-lg">
				{experience.map(({ role, title, content, duration }) => (
					<li key={title} className="flex gap-2">
						<p>
							{role} <span className="underline decoration-green-500/[.8]">{title}</span> - {content} /{' '}
							<span className="font-grey-100">{duration}</span>
						</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default ExperienceCard;
