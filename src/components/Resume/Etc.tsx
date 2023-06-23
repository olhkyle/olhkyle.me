import React from 'react';
import formattedDate from '../../utils/formattedDate';
import { AiOutlineLink } from 'react-icons/ai';

interface EtcProps {
	_etc: Etc;
}

const Etc = ({ _etc: { title, department, description, startDate, endDate, link } }: EtcProps) => {
	return (
		<li>
			<span className="responsive-text-gray">{formattedDate({ startDate, endDate })}</span>
			<h4 className="text-lg font-medium sm:text-xl sm:font-semibold">{title}</h4>
			<p className="text-base">
				{link === '' ? (
					<span>{department}</span>
				) : (
					<a href={link} target="_blank">
						<span className="inline-flex items-center gap-1 underline underline-offset-4 decoration-blue-200 hover:text-blue-200 cursor-pointer">
							<AiOutlineLink size="21" />
							<span>{department}</span>
						</span>
					</a>
				)}
			</p>
			<p className="mt-1 responsive-text-gray">
				{description ? '-' : ''} {description}
			</p>
		</li>
	);
};

export default Etc;
