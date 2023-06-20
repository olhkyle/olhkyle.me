import React from 'react';
import DoubleSubTitle from './DoubleSubTitle';
import { GMAIL } from '../../constants/url';

const ContactCard = () => {
	return (
		<div className="col-span-1 mt-10 ">
			<DoubleSubTitle>Contact</DoubleSubTitle>
			<ul>
				<li className="">+82 10-3614-3373</li>
				<li>{GMAIL}</li>
			</ul>
		</div>
	);
};

export default ContactCard;
