import React from 'react';
import DoubleSubTitle from './titles/DoubleSubTitle';
import { GITHUB, LINKEDIN } from '../../constants/url';

const SLICE_INDEX_OF_STRING = 8;

const LinksCard = () => {
	return (
		<div className="col-span-1 mt-10">
			<DoubleSubTitle>Links</DoubleSubTitle>
			<ul>
				<li className="underline underline-offset-4 decoration-blue-200 hover:text-blue-200 cursor-pointer">
					<a href={GITHUB} target="_blank">
						{GITHUB.slice(SLICE_INDEX_OF_STRING)}
					</a>
				</li>
				<li className="underline underline-offset-4 decoration-blue-200 hover:text-blue-200 cursor-pointer">
					<a href={LINKEDIN} target="_blank">
						{LINKEDIN.slice(SLICE_INDEX_OF_STRING)}
					</a>
				</li>
			</ul>
		</div>
	);
};

export default LinksCard;
