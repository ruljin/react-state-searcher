import React from 'react';
import StateSearch from '../components/StateSearch';
import StatePage from '../components/StatePage';
import KeySelect from '../components/KeySelect';
import DataTypeSelect from '../components/DataTypeSelect';
import { useSearchState, SearchStateContext } from '../hooks/useSearchState';

const App = () => {
	const searchState = useSearchState();
	const { currentState } = searchState;

	return (
		<div className='app'>
			<SearchStateContext.Provider value={searchState}>
				<KeySelect />
				<StateSearch />
				<DataTypeSelect />
				{currentState && <StatePage />}
			</SearchStateContext.Provider>
		</div>
	);
};

export default App;
