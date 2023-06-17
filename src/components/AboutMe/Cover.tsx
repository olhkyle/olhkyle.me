interface CoverProps {
	currentLang: Lang | string;
}

const Cover = ({ currentLang }: CoverProps) => {
	return (
		<>
			<div className="mt-20 mb-10 break-keep text-2xl lg:text-4xl">
				{currentLang === 'ENG' ? (
					<p>
						Hi! I'm <b>Kyle</b>, a <b>FrontEnd Developer</b> based in Seoul, Korea.
					</p>
				) : (
					<p className="text-5xl">
						<b>안녕하세요. 프론트엔드 개발자 "권 혁민"입니다.</b>
					</p>
				)}
			</div>
			<div className="break-keep text-lg leading-7">
				{currentLang === 'ENG' ? (
					<p>
						I graduated from Kookmin University in 2023 with studying Architecture. <br />
						Smoothly got into programming field, because I like to designing and building digital products, such as
						web-app.
						<br />I study Web FrontEnd Development with a passion, focusing on UI / UX details currently.
					</p>
				) : (
					<p>
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
