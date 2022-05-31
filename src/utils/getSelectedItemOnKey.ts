export const getSelectedItemOnKey = (
	key: string,
	current: number,
	listLength: number
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

		return newSelected;
	}

	return current;
};
