import React from 'react';
import { RxTriangleRight } from 'react-icons/rx';

interface KindOfDeveloperItemProps {
	kind: { title: string; content: string[] };
}

const KindOfDeveloperItem = ({ kind: { title, content } }: KindOfDeveloperItemProps) => {
	const [isActive, setActive] = React.useState(false);

	return (
		<li key={title} className="flex flex-col gap-2 cursor-pointer">
			<div
				className="flex items-start sm:items-center gap-1 font-medium text-base text-black dark:text-white sm:text-lg"
				onClick={() => setActive(!isActive)}>
				<div className="w-7">
					<RxTriangleRight size="24" className={`transition-transform ${isActive ? 'rotate-90' : ' rotate-0'}`} />
				</div>
				<span className="hover:text-blue-100">{title}</span>
			</div>
			{content.map(item => (
				<p key={item} className={`text-base px-4 ${isActive ? 'block' : 'hidden'}`}>
					{item}
				</p>
			))}
		</li>
	);
};

export default KindOfDeveloperItem;
