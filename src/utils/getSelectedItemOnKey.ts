export const getSelectedItemOnKey = (
	key: any,
	current: any,
	listLength: any
) => {
	if (key === "ArrowUp") {
		const newSelected = current - 1;
		if (newSelected < 0) {
			return current;
		}

		return newSelected;
	}

	if (key === "ArrowDown") {
		const newSelected = current + 1;
		if (newSelected >= listLength) {
			return current;
		}

		return current + 1;
	}

	return current;
};
