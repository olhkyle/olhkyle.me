import React from 'react';
import { CardTitle } from '.';

interface StrengthsCardProps {
	currentLang: Lang;
}

const strengths: Record<Lang, string[]> = {
	KOR: [
		'어떤 프로젝트 및 작업에 참여하더라도, 기본기를 지키는 강점이 있습니다💡',
		'시각적인 것과 관련된 무언가를 만드는 것을 정말 좋아합니다 🖥️',
		'프로덕트에 UI/UX를 향상시킬 수 있는 방법을 끊임없이 찾습니다. 웹 프론트엔드 개발자로서, UX는 일순위로 고려되어야 한다고 단언합니다 🚀',
	],
	ENG: [
		'I have the strength to keep the basic, no matter what project or work I participate in💡',
		'I like to make something related with visual 🖥️',
		` I keep finding ways on how to enhance UI/UX on products. As a FE Developer, I reckon UX should be considered
     the best 🚀`,
	],
};

const StrengthsCard = ({ currentLang }: StrengthsCardProps) => {
	return (
		<div className="mt-16 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>Strengths</CardTitle>
			<ul className="flex flex-col gap-2 mt-5 break-keep text-lg">
				{strengths[currentLang as Lang].map(content => (
					<li key={content} className="flex gap-2">
						<span>💿</span>
						<p>{content}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StrengthsCard;
