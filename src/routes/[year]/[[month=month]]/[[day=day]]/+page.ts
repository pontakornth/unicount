import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// This should never run on the server.
// I want to use local time and does not want to deal with timezone.
export const ssr = false;
export const load: PageLoad = ({ params }) => {
	// If month and days were both unspecified, it is basically a new year countdown.
	const year = parseInt(params.year, 10);
	// For a weird reason, month is 0-indexed.
	const month = parseInt(params.month ?? '1', 10) - 1;
	const day = parseInt(params.day ?? '1', 10);

	const targetDate = new Date(year, month, day);
	if (
		targetDate.getDate() != day ||
		targetDate.getMonth() != month ||
		targetDate.getFullYear() != year
	) {
		throw error(401, 'Invalid Date');
	}

	return {
		targetDate
	};
};
