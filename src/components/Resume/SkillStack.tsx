import React from 'react';
import { HighlightText } from '../common';
import manageColorScheme from '../../utils/manageColorScheme';

interface SkillStackProps {
	_skill: SkillStack;
}

const SkillStack = ({ _skill: { skill, description } }: SkillStackProps) => {
	return (
		<li className="flex flex-col">
			<div className="flex flex-wrap gap-2">
				{skill.map((s, idx) => (
					<HighlightText key={idx} color={manageColorScheme(s)}>
						{s}
					</HighlightText>
				))}
			</div>
			<p className="ml-1 responsive-text-gray">- {description}</p>
		</li>
	);
};

export default SkillStack;
