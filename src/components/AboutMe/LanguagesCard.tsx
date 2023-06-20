import React from 'react';
import { CardTitle } from '.';
import { SemiColonText } from '../common';

interface LanguagesCardProps {
	currentLang: Lang;
}

const languages: Record<Lang, string[]> = { KOR: ['한국어', '영어'], ENG: ['Korean (Native)', 'English (Fluent)'] };

const LanguagesCard = ({ currentLang }: LanguagesCardProps) => {
	return (
		<div className="p-4">
			<CardTitle>Languages</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 mb-10 break-keep text-lg">
				{languages[currentLang].map(language => (
					<li key={language} className="flex gap-2">
						{language}
					</li>
				))}
			</ul>
		</div>
	);
};

export default LanguagesCard;
