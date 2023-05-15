interface CoverProps {
	currentLang: Lang;
}

const Cover = ({ currentLang }: CoverProps) => {
	return (
		<>
			<div className="mt-20 mb-10 break-keep text-2xl lg:text-4xl">
				{currentLang === 'ENG' ? (
					<p>
						Hi! I'm <b>Kyle</b>, a Junior <b>FrontEnd Developer</b> based in Seoul, Korea.
					</p>
				) : (
					<p className="text-5xl">
						<b>안녕하세요. 주니어 프론트엔드 개발자 권혁민입니다.</b>
					</p>
				)}
			</div>
			<div className="break-keep text-lg leading-7">
				{currentLang === 'ENG' ? (
					<p>
						Orignially, I major in Architecture, specialized in Architectural design and system. <br />
						Currently, I'm trying to be a FrontEnd Developer and get a job. <br /> I smoothly got into programming
						field, because I like to designing and building digital products, such as web-app.
					</p>
				) : (
					<p>
						원래 저는 건축을 전공하였습니다. <br />
						현재는 프론트엔드 개발자가 되기 위해 노력하고 있습니다. <br />웹 어플리케이션과 같은 디지털 제품들을
						디자인하고 만들고 싶어, 프로그래밍 필드에 자연스럽게 들어오게 되었습니다.
					</p>
				)}
			</div>
		</>
	);
};

export default Cover;
