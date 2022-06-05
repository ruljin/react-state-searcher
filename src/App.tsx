import { DataTypeSelect } from "./state/components/DataTypeSelect/DataTypeSelect";
import { KeySelect } from "./state/components/KeySelect/KeySelect";
import { StateSearch } from "./state/components/StateSearch/StateSearch";
import { State } from "./state";
import {
	useSearchState,
	SearchStateContext,
} from "./state/context/useSearchState";
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
