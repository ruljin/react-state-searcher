import type { State } from "../models/State";

type SearchKeyValue = "state" | "code" | "capital_city";

export const getStates = (
	query: string,
	searchKey: SearchKeyValue,
	states: State[]
) => {
	if (!query) {
		return [];
	}

	const lowerCaseQuery = query.toLowerCase();

	return states.filter((state) =>
		state[searchKey].toLowerCase().startsWith(lowerCaseQuery)
	);
};

export const getState = (codeToFind: string | null, states: State[]) => {
	return states.find(({ code }) => code === codeToFind);
};
