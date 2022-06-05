import { useContext } from "react";
import { SearchStateContext } from "../../context/useSearchState";
import { Select } from "../../../components/Select/Select";
import { DATA_TYPES } from "../../constants/data-type";

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