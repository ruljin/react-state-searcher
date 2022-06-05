import {
	State,
	DataTypeSelect,
	KeySelect,
	StateSearch,
	useSearchState,
	SearchStateContext,
} from "./state";
import styles from "./App.module.css";

const App = () => {
	const searchState = useSearchState();
	const { currentState } = searchState;

	return (
		<div className={styles.app}>
			<SearchStateContext.Provider value={searchState}>
				<KeySelect />
				<StateSearch />
				<DataTypeSelect />
				{currentState && <State />}
			</SearchStateContext.Provider>
		</div>
	);
};

export default App;
