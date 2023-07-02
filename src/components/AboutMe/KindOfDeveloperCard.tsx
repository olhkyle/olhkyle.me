import React from 'react';
import { CardTitle, KindOfDeveloperItem } from '.';

interface KindOfDeveloperCardProps {
	currentLang: Lang;
}

const kindOfDeveloper: Record<Lang, { title: string; content: string[] }[]> = {
	KOR: [
		{
			title: '기본을 지키는 개발자',
			content: [
				`저는 어떤 일에 참여하더라도 기본을 지키는 것을 우선시 합니다. 해야할 일을 당연하게 해내며, 이를 체화시키는 것은 상당히 어려운 일입니다. 저는 꼼꼼하고 차분한 성격 덕에 기본적으로 지켜야할 것들에 대해서 목록화하고, 빠져서 안될 요소들을 놓치지 않으려 계속해서 인지하려고 노력합니다.`,
				`팀 프로젝트를 진행하는 과정에서, 팀원들이 사용자 경험에 영향을 미치는 UI 조작이나, 웹 어플리케이션이라면 당연히 있어야 할 요소들을 놓치고 있을 때, 이를 인지하고, 메모하고, 팀원들에게 지속적으로 상기시키며 프로젝트를 진행하였습니다.`,
			],
		},
		{
			title: '꾸준한 학습을 지향하는 개발자',
			content: [
				`저는 꾸준한 학습을 지향합니다. 개발 교육 프로그램에서 하루 12시간 동안 모던 자바스크립트 딥다이브 책 1회독, 바닐라 자바스크립트와 리액트로 페어 프로그래밍을 통해 협업 경험을 하였으며, 2번의 팀 프로젝트를 경험하여 개발 역량을 쌓아왔습니다.`,
				`제한된 시간과 공간에서의 강제적인 공부 뿐만 아니라, 자발적으로 매일 알고리즘 2문제, 책을 활용한 바닐라 자바스크립트 공부, 리액트를 활용한 개인 프로젝트, 그리고 책과 공식 문서를 활용하여 타입스크립트 공부를 꾸준히 하고 있습니다.`,
			],
		},
		{
			title: '사용자 경험을 중시하는 개발자',
			content: [
				'견고하게 설계된 사용자 경험(UX)과 인터페이스(UI)는 제품을 사용하는 사용자들에게 긍정적인 인상을 주곤 합니다. 프론트엔드 개발자로서 사용자 경험은 1순위로 여겨야 한다고 생각합니다. 간단한 UI 컴포넌트 하나라도 이용할 사용자 입장에서 한 번 더 생각하고, 불편함을 느끼지 않도록 개선하려고 노력합니다.',
			],
		},
	],
	ENG: [
		{
			title: 'A developer who maintains the fundamentals',
			content: [
				`I prioritize adhering to the fundamentals in any task I participate in. Accomplishing what needs to be done as a matter of course and internalizing it can be quite challenging. Due to my meticulous and calm nature, I tend to create a checklist of essential aspects that must be upheld and strive to constantly be aware of crucial elements that should not be overlooked.`,
				`During the process of working on a team project, when team members overlooked elements that are crucial for user experience, such as UI interactions or essential components for a web application, I made sure to recognize, document, and consistently remind team members of these aspects as we progressed with the project.`,
			],
		},
		{
			title: 'A developer who learned constantly',
			content: [
				`I'm a constant learner. In a development education program, I dedicated 12 hours a day to reading the book "Modern JavaScript Deep Dive" and gained collaborative experience through pair programming with vanilla JavaScript and React. I have also accumulated my development skills through two team projects and personal projects.`,
				`In addition to forced studying within limited time and space, I voluntarily engage in daily practice, such as solving two algorithm problems, studying vanilla JavaScript using books, working on personal projects with React, and continuously studying TypeScript using books and official documentation.`,
			],
		},
		{
			title: 'A developer who values user experience',
			content: [
				`A solidly designed UI and UX often leaves a positive impression on the people who use your product. As a FrontEnd developer, I believe that UX should be a priority, and even with a simple UI component, I try to put myself in the shoes of the user who will be using it and improve it so that they don't feel frustrated.`,
			],
		},
	],
};

const KindOfDeveloperCard = ({ currentLang }: KindOfDeveloperCardProps) => {
	return (
		<div className="mt-8 p-4 px-6 pb-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 sm:bg-none">
			<CardTitle>What kind of Developer</CardTitle>
			<ul className="flex flex-col gap-4 mt-5 text-lg font-medium break-keep responsive-text-gray">
				{kindOfDeveloper[currentLang].map(kind => (
					<KindOfDeveloperItem key={kind.title} kind={kind} />
				))}
			</ul>
		</div>
	);
};

export default KindOfDeveloperCard;
