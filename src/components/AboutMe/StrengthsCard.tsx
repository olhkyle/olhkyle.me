import React from 'react';
import { CardTitle } from '.';

interface StrengthsCardProps {
	currentLang: Lang;
}

const strengths: Record<Lang, string[]> = {
	KOR: [
		'무언가에 몰입하는 즐거움을 믿습니다 💡',
		'시각적인 것과 관련된 무언가를 만드는 것을 정말 좋아합니다 🖥️',
		'엔지니어링 관점에서 프로덕트에 UI/UX를 향상시킬 수 있는 방법을 끊임없이 찾습니다 🚀',
	],
	ENG: [
		'I believe in the joy of immersing oneself in something.💡',
		'I like to make something related with visual 🖥️',
		`From an Engineering perspective, I keep finding ways on how to enhance UI/UX on products 🚀`,
	],
};

const StrengthsCard = ({ currentLang }: StrengthsCardProps) => {
	return (
		<div className="mt-16 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Strengths</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 text-base sm:text-lg font-medium break-keep">
				{strengths[currentLang].map(content => (
					<li key={content} className="flex gap-2">
						<span>＞</span>
						<p>{content}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StrengthsCard;
