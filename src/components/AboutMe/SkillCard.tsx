import React from 'react';
import { CardTitle } from '.';
import { HighlightText, SemiColonText } from '../common';

interface Skill {
	category: string;
	techStacks: string[];
}

const skills: Skill[] = [
	{ category: 'html/css', techStacks: ['HTML', 'CSS3', 'SASS', 'Styled-Components', 'Emotion', 'TailwindCSS'] },
	{ category: 'js/ts', techStacks: ['JavaScript[ES6+]', 'TypeScript'] },
	{ category: 'ui library', techStacks: ['React'] },
	{ category: 'global/server state library', techStacks: ['Recoil', 'Redux Toolkit', 'React Query'] },
	{ category: 'server side', techStacks: ['Node.js', 'Express.js'] },
	{ category: 'react component library', techStacks: ['Mantine UI'] },
	{ category: 'collaboration tools', techStacks: ['Git', 'Github'] },
	{ category: 'design tools', techStacks: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'] },
];

const SkillCard = () => {
	return (
		<div className="p-4">
			<CardTitle>Skills</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 break-keep text-md">
				{skills.map(({ category, techStacks }) => (
					<li key={category} className="flex gap-2">
						<p className="flex flex-wrap gap-2">
							{techStacks.map(stack => (
								<HighlightText key={stack} color={'text-blue-200'}>
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
