import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	// test int
	if (!/^\d+$/.test(param)) return false;
	const num = parseInt(param, 10);
	return num >= 1 && num <= 12;
};
