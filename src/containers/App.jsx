import {
	DataTypeSelect,
	KeySelect,
	StatePage,
	StateSearch,
} from '../components';
import { useSearchState, SearchStateContext } from '../hooks/useSearchState';
import styles from './App.module.css';

const App = () => {
	const searchState = useSearchState();
	const { currentState } = searchState;

	return (
		<div className={styles.app}>
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
