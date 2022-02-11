export const getSelectedItemOnKey = (key, current, listLength) => {
	if (key === 'ArrowUp') {
		const newSelected = current - 1;
		if (newSelected < 0) {
			return current;
		}

		return newSelected;
	}

	if (key === 'ArrowDown') {
		const newSelected = current + 1;
		if (newSelected >= listLength) {
			return current;
		}

		return current + 1;
	}

	return current;
};
