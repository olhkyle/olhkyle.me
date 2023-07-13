import React from 'react';
import { Link } from 'react-router-dom';
import { HighlightText } from '../common';
import manageColorScheme from '../../utils/manageColorScheme';

const PortfolioProject = ({
	project: { title, techStacks, overviewEN, overviewKR },
	currentLang,
}: {
	project: Project;
	currentLang: Lang;
}) => {
	return (
		<div className="col-span-4 mb-12">
			<Link to={`/project/${title.replace(/\s/g, '-')}`}>
				<figure className="aspect-h-4 aspect-w-3 rounded-[2rem]  hover-ring">
					<img src="/portfolio/2.jpg" alt="mee" className="rounded-[2rem] object-cover object-center w-full" />
				</figure>
				<div className="flex flex-col gap-4 mt-6">
					<ul className="flex flex-wrap gap-2">
						{techStacks.slice(0, 3).map(stack => (
							<li key={stack}>
								<HighlightText color={manageColorScheme(stack)}>{stack}</HighlightText>
							</li>
						))}
					</ul>
					<h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
					<p>{currentLang === 'ENG' ? overviewEN : overviewKR}</p>
				</div>
			</Link>
		</div>
	);
};

export default PortfolioProject;
