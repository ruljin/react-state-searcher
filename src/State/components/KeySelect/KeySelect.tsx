import { useSearchStateContext } from "../../context/SearchState";
import { Select } from "../../../components/Select/Select";
import { SEARCH_KEYS } from "../../constants/search-keys";

export const KeySelect = () => {
	const { setSearchKey, searchKey } = useSearchStateContext();

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
