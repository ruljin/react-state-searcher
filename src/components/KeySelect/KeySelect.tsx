import { useContext } from "react";
import { SearchStateContext } from "../../hooks/useSearchState";
import { Select } from "..";
import { SEARCH_KEYS } from "../../state/constants/search-keys";

export const KeySelect = () => {
	const { setSearchKey, searchKey } = useContext(SearchStateContext);

	return (
		<Select label="Search by" onSelect={setSearchKey} value={searchKey}>
			{SEARCH_KEYS.map(({ value, option }) => (
				<option key={value} value={value}>
					{option}
				</option>
			))}
		</Select>
	);
};
