import type { ParamMatcher } from '@sveltejs/kit';

// 1 to 31
// Does not take February into account
export const match: ParamMatcher = (param) => {
	if (!/^\d+$/.test(param)) return false;
	const num = parseInt(param, 10);
	return num >= 1 && num <= 31;
};
