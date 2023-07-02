import React from 'react';
import { CardTitle } from '.';

interface LanguagesCardProps {
	currentLang: Lang;
}

const languages: Record<Lang, string[]> = { KOR: ['한국어', '영어'], ENG: ['Korean (Native)', 'English (Fluent)'] };

const LanguagesCard = ({ currentLang }: LanguagesCardProps) => {
	return (
		<div className="mt-8 px-6 py-2 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Languages</CardTitle>
			<ul className="flex flex-col gap-2 my-5 break-keep text-lg">
				{languages[currentLang].map(language => (
					<li key={language} className="flex gap-2 text-base sm:text-lg">
						{language}
					</li>
				))}
			</ul>
		</div>
	);
};

export default LanguagesCard;
