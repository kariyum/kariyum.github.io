export function formatDate(date: Date) {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
	return new Date(date).toLocaleDateString('en-US', options);
}

export function projectDates(start: Date, end: Date) {
	const startDate = formatDate(start);
	const endDate = formatDate(end);
	if (startDate === endDate) {
		return startDate;
	}
	return `${startDate} → ${endDate}`;
}
