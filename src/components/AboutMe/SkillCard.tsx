import React from 'react';
import { CardTitle } from '.';

interface Skill {
	category: string;
	techStacks: string[];
}

const skills: Skill[] = [
	{ category: 'html', techStacks: ['HTML'] },
	{ category: 'css', techStacks: ['CSS3', 'SASS', 'Styled-Components', 'Emotion', 'TailwindCSS'] },
	{ category: 'js/ts', techStacks: ['JavaScript[ES6+]', 'TypeScript'] },
	{ category: 'ui library', techStacks: ['React'] },
	{ category: 'global state library', techStacks: ['Recoil', 'Redux Toolkit'] },
	{ category: 'server state library', techStacks: ['React Query'] },
	{ category: 'server side', techStacks: ['Node.js', 'Express.js'] },
	{ category: 'react component library', techStacks: ['Mantine UI'] },
	{ category: 'collaboration tools', techStacks: ['Git', 'Github'] },
	{ category: 'design tools', techStacks: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'] },
];

const SkillCard = () => {
	return (
		<>
			<CardTitle>Skills</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 break-keep text-lg">
				{skills.map(({ category, techStacks }) => (
					<li key={category} className="flex gap-2">
						<p>{techStacks.join(', ')}</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default SkillCard;
