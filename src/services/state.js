export const searchStates = (query, searchKey, states) => {
  if (!query) {
    return [];
  }

  const lowerCaseQuery = query.toLowerCase();

  return states
    .filter((state) => {
      return state[searchKey].toLowerCase().startsWith(lowerCaseQuery);
    })
    .slice(0, 6);
};

export const getState = (codeToFind, states) => {
  return states.find(({ code }) => code === codeToFind);
};
