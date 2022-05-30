export const searchStates = (query: any, searchKey: any, states: any) => {
	if (!query) {
		return [];
	}

	const lowerCaseQuery = query.toLowerCase();

	return states
		.filter((state: any) => {
			return state[searchKey].toLowerCase().startsWith(lowerCaseQuery);
		})
		.slice(0, 6);
};

export const getState = (codeToFind: any, states: any) => {
	return states.find(({ code }: any) => code === codeToFind);
};
