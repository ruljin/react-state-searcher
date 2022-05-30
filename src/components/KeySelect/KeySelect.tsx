import { useContext } from "react";
import { SearchStateContext } from "../../hooks/useSearchState";
import { Select } from "..";
import { SEARCH_KEYS } from "../../constants/options";

export const KeySelect = () => {
	const { setSearchKey, searchKey } = useContext(SearchStateContext);

	return (
		<Select label="Search by" onSelect={setSearchKey} value={searchKey}>
			{SEARCH_KEYS.map((key) => (
				<option key={key.value} value={key.value}>
					{key.option}
				</option>
			))}
		</Select>
	);
};
