import { useContext } from "react";
import { SearchStateContext } from "../../hooks/useSearchState";
import { Select } from "..";
import { DATA_TYPES } from "../../constants/options";

export const DataTypeSelect = () => {
	const { setDataType, dataType } = useContext(SearchStateContext);

	return (
		<Select label="Show data" onSelect={setDataType} value={dataType}>
			{DATA_TYPES.map(({ value, option }) => (
				<option key={value} value={value}>
					{option}
				</option>
			))}
		</Select>
	);
};
