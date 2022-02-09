import { useContext } from 'react';
import { SearchStateContext } from '../../hooks/useSearchState';
import { Select } from '..';

export const DataTypeSelect = () => {
	const { setDataType, dataType } = useContext(SearchStateContext);

	return (
		<Select label='Show data' onSelect={setDataType} value={dataType}>
			<option value='table'>Table</option>
			<option value='symbols'>Symbols</option>
			<option value='map'>Map</option>
		</Select>
	);
};
