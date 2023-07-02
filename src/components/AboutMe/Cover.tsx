import { HighlightText } from '../common';

interface CoverProps {
	currentLang: Lang | string;
}

const Cover = ({ currentLang }: CoverProps) => {
	return (
		<>
			<div className="mt-12 mb-10 p-10 break-keep text-2xl sm:mt-20 lg:text-4xl border-[1px] border-gray-900 rounded-[2rem]">
				{currentLang === 'ENG' ? (
					<p className="flex flex-col gap-4 text-2xl md:text-4xl">
						<span className="font-bold">
							Hello! I'm <HighlightText color="text-blue-200">Kyle</HighlightText> 🖐🏻
						</span>
						<span className="font-bold">Web Front-End Developer based in Seoul, Korea.</span>
					</p>
				) : (
					<p className="flex flex-col gap-4 text-2xl md:text-4xl">
						<span className="font-bold">안녕하세요 🖐🏻</span>
						<span className="font-bold">
							프론트엔드 개발자 <HighlightText color="text-blue-200">권 혁민</HighlightText> 입니다.
						</span>
					</p>
				)}
			</div>
			<div className="break-keep text-base leading-7 responsive-text-gray sm:text-lg">
				{currentLang === 'ENG' ? (
					<>
						<p className="py-2 px-8">I graduated from Kookmin University in 2023 with studying Architecture. </p>
						<p className="py-2 px-8">
							Smoothly got into programming field, because I like to designing and building digital products, such as
							web-app. I study Web FrontEnd Development with a passion, focusing on UI / UX details.
						</p>

						<p className="py-2 px-8">
							Currently, I'm working on personal projects and learning Typescript and algorithms to create habits and
							environments for steady growth. I'm also trying to keep track of my projects and learnings to use them as
							growth indicators and to look back on them later and fill my shortage.
						</p>
					</>
				) : (
					<>
						<p className="py-2 px-8">저는 건축을 공부하였고, 2023년에 대학교를 졸업하였습니다. </p>
						<p className="py-2 px-8">
							웹 어플리케이션과 같은 디지털 제품들을 디자인하고 만들고 싶어, 프로그래밍 필드에 자연스럽게 들어오게
							되었으며, 현재는 UI/UX의 디테일에 집중하면서 열정을 갖고 웹 프론트엔드를 공부하고 있습니다.
						</p>
						<p className="py-2 px-8">
							현재는 꾸준한 성장을 위한 습관과 환경을 만들기 위해 개인 프로젝트를 진행하고, 타입스크립트와 알고리즘
							학습을 하고 있습니다. 또한, 진행한 프로젝트와 공부한 내용을 기록하여 성장 지표로 삼고, 이후에 스스로를
							돌아보며 부족한 부분을 채워 나가려고 노력하고 있습니다.
						</p>
					</>
				)}
			</div>
		</>
	);
};

export default Cover;
