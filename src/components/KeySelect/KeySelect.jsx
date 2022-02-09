import { useContext } from 'react';
import { SearchStateContext } from '../../hooks/useSearchState';
import { Select } from '..';

export const KeySelect = () => {
	const { setSearchKey, searchKey } = useContext(SearchStateContext);

	return (
		<Select label='Search by' onSelect={setSearchKey} value={searchKey}>
			<option value='state'>Name</option>
			<option value='code'>State code</option>
			<option value='capital_city'>Capital city</option>
		</Select>
	);
};
