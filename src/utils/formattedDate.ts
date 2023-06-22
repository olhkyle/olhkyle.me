const insertStringZero = (stringifyDate: string) => stringifyDate.padStart(2, '0');
const isString = (date: Date | string) => typeof date === 'string';

const formattedDate = ({ startDate, endDate }: { startDate: Date; endDate: Date | string }) =>
	`${startDate.getFullYear()}.${insertStringZero(startDate.getMonth() + '')} ${
		isString(endDate) && endDate === '' ? '' : '-'
	} ${isString(endDate) ? endDate : (endDate as Date).getFullYear()}${isString(endDate) ? '' : '.'}${
		isString(endDate) ? '' : insertStringZero((endDate as Date).getMonth() + '')
	}`;

export default formattedDate;
