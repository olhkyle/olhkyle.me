import React from 'react';
import DoubleSubTitle from './titles/DoubleSubTitle';
import { GMAIL } from '../../constants/url';

const ContactCard = () => {
	return (
		<div className="col-span-1 mt-10 ">
			<DoubleSubTitle>Contact</DoubleSubTitle>
			<ul className="flex flex-col gap-1">
				<li className="">+82 10-3614-3373</li>
				<li>{GMAIL}</li>
			</ul>
		</div>
	);
};

export default ContactCard;
