import React from 'react';
import { CardTitle } from '.';

interface LanguagesCardProps {
	currentLang: Lang;
}

const languages: Record<Lang, string[]> = { KOR: ['한국어', '영어'], ENG: ['Korean', 'English'] };

const LanguagesCard = ({ currentLang }: LanguagesCardProps) => {
	return (
		<>
			<CardTitle>Languages</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 mb-10 break-keep text-lg">
				{languages[currentLang].map(language => (
					<li key={language} className="flex gap-2">
						{language}
					</li>
				))}
			</ul>
		</>
	);
};

export default LanguagesCard;