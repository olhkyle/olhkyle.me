import React from 'react';
import { CardTitle } from '.';
import { HighlightText } from '../common';
import manageColorScheme from '../../utils/manageColorScheme';

interface Skill {
	category: string;
	techStacks: string[];
}

const skills: Skill[] = [
	{ category: 'html/css', techStacks: ['HTML', 'CSS3', 'SASS', 'Styled-Components', 'Emotion', 'TailwindCSS'] },
	{ category: 'js/ts', techStacks: ['JavaScript[ES6+]', 'TypeScript'] },
	{ category: 'ui library', techStacks: ['React'] },
	{ category: 'global/server state library', techStacks: ['Recoil', 'Redux Toolkit', 'React Query'] },
	{ category: 'react component library', techStacks: ['Mantine UI'] },
	{ category: 'server side', techStacks: ['Node.js', 'Express.js'] },
	{ category: 'collaboration tools', techStacks: ['Git', 'Github'] },
	{ category: 'design tools', techStacks: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'] },
];

const SkillCard = () => {
	return (
		<div className="mt-8 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Skills</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 break-keep text-md">
				{skills.map(({ category, techStacks }) => (
					<li key={category} className="flex gap-2">
						<p className="flex flex-wrap gap-2">
							{techStacks.map(stack => (
								<HighlightText key={stack} color={manageColorScheme(stack)}>
									{stack}
								</HighlightText>
							))}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkillCard;
