import React from 'react';
import formattedDate from '../../utils/formattedDate';

interface EducationProps {
	education: Education;
}

const Education = ({ education: { title, subTitle, description, startDate, endDate } }: EducationProps) => {
	return (
		<li className="flex flex-col">
			<span className="text-gray-500 dark:text-gray-300">{formattedDate({ startDate, endDate })}</span>
			<h4 className="text-lg font-medium sm:text-xl sm:font-semibold">{title}</h4>
			<p>{subTitle}</p>
			<ul>
				{description?.map(desc => (
					<li key={desc} className="text-gray-500 dark:text-gray-300">
						- {desc}
					</li>
				))}
			</ul>
		</li>
	);
};

export default Education;
