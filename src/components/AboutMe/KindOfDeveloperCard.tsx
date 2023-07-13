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
			title: '뛰어난 UI / UX를 구현하는 개발자',
			content: [
				`개발자가 되기 이전에 건축, 인테리어 분야에서 오랜 기간 공부와 일을 하며 시각적으로 뛰어난 것을 구현하는 능력을 길러 왔습니다. 기능적이면서 시각적으로도 뛰어난 공간을 구현해야 하는 분야를 경험하면서, 시각적인 구성과 기능에 대한 중요성을 누구보다 잘 알고 있습니다.`,
				`하드웨어 만이 아닌 소프트웨어에도 훌륭한 구성과 기능을 구현하는 것에 관심이 많아졌고, 자연스럽게 프론트엔드 개발에 빠져들게 되어, 이전의 경험을 바탕으로 유려한 UI / UX에 집중하며 몰입하여 프로젝트를 완성한 경험이 있습니다.`,
				`예를 들어, 팀 프로젝트 FineApple은 첫 기획 단계에서 Apple 커뮤니티 기능의 UI / UX 면에서 부족함을 느껴, 보완하는 클론 프로젝트로 기획하고 진행하였습니다. 하지만, 클론에 그치지 않고 팀원들이 생각하는 좋은 UI / UX를 반영한 커뮤니티 프로젝트로 만들고자, 계획된 기간보다 연장 후, 기획의 방향을 변경하여 개발 그리고 배포까지 진행한 경험이 있습니다.`,
			],
		},
		{
			title: '꾸준한 학습 능력을 지닌 개발자',
			content: [
				'자바스크립트에 대한 이해도를 높이기 위해 모던 자바스크립트 딥다이브를 활용해 기본기를 쌓아 왔습니다. 쌓아온 기본기를 바탕으로 협업 경험과 동시에, 개발 역량을 늘리기 위해 팀 프로젝트와 개인 프로젝트를 진행하였습니다.',
				`스스로 공부한 기술에 대해 notion과 개인 블로그를 활용하여 기록하고, 프로젝트를 진행하면서 회고를 작성하는 습관을 통해 스스로를 돌아보며 부족한 부분을 채워나가며 꾸준히 공부하고 있습니다.
				`,
				`많은 여행과 교환학생 경험 덕에 영어로 글을 작성하고, 읽고, 말하는 것에 익숙합니다. 영문으로 작성된 많은 개발 문서를 활용하여 새로운 기술을 익히고, 프로젝트에 적극적으로 활용하며 학습하고 있습니다.`,
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
			title: 'A developer who implement great UI/UX',
			content: [
				`Before becoming a developer, I spent a long time studying and working in the fields of architecture and interior design, honing my ability to implement visually stunning creations. Through my experience in a field that requires both functionality and visual appeal, I have gained a deep understanding of the importance of visual composition and functionality.`,
				`I have developed a keen interest in implementing excellent design and functionality not only in hardware but also in software. This naturally led me to delve into FrontEnd Development, where I could leverage my previous experiences to focus on creating great UI/UX and immerse myself in projects.`,
				`For example, in a team project called FineApple, I recognized the lack of UI/UX quality in the initial planning phase of an Apple community feature. To address this, we planned and carried out a clone project aimed at improving the UI/UX. However, we didn't stop at cloning; instead, we extended the project timeline, changed the direction of the planning, and proceeded with development and deployment, incorporating the team's ideas for a better UI/UX community project.
				`,
			],
		},
		{
			title: 'A developer with consistent learning ability.',
			content: [
				`To enhance my understanding of JavaScript, I have utilized resources like "Modern JavaScript Deep Dive" to build a strong foundation. Building upon this foundation, I have engaged in team projects and personal projects to not only gain collaboration experience but also to expand my development skills.`,
				`I have a habit of documenting the technologies I have self-studied using platforms like Notion and maintaining a personal blog. Through this practice, as well as writing reflections during project work, I continuously reflect on myself and fill in any knowledge gaps, consistently striving to learn and improve.`,
				`Thanks to my extensive travel and experience as an exchange student, I am comfortable writing, reading, and speaking in English. I frequently utilize English-written development documentation to learn new technologies actively and apply them in projects as part of my learning process.`,
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
