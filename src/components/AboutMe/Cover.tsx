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
			<div className="break-keep text-lg leading-7 text-gray-500">
				{currentLang === 'ENG' ? (
					<p className="p-8">
						I graduated from Kookmin University in 2023 with studying Architecture. <br />
						Smoothly got into programming field, because I like to designing and building digital products, such as
						web-app.
						<br />
						And, I study Web FrontEnd Development with a passion, focusing on UI / UX details currently.
					</p>
				) : (
					<p className="p-8">
						저는 건축을 공부하였고, 2023년에 대학교를 졸업하였습니다. <br />
						웹 어플리케이션과 같은 디지털 제품들을 디자인하고 만들고 싶어, 프로그래밍 필드에 자연스럽게 들어오게
						되었습니다.
						<br />
						현재는 UI/UX의 디테일에 집중하면서 열정을 갖고 웹 프론트엔드를 공부하고 있습니다.
					</p>
				)}
			</div>
		</>
	);
};

export default Cover;
