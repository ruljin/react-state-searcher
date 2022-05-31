import type { State } from "../models/State";

export const searchStates = (
	query: string,
	searchKey: string,
	states: State[]
) => {
	if (!query) {
		return [];
	}

	const lowerCaseQuery = query.toLowerCase();

	return states.filter((state) =>
		state[(searchKey = "state")].toLowerCase().startsWith(lowerCaseQuery)
	);
};

export const getState = (codeToFind: string | null, states: State[]) => {
	return states.find(({ code }) => code === codeToFind);
};
