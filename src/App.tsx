import {
	State,
	DataTypeSelect,
	KeySelect,
	StateSearch,
	SearchStateContextProvider,
} from "./State";
import styles from "./App.module.css";

const App = () => (
	<div className={styles.app}>
		<SearchStateContextProvider>
			<KeySelect />
			<StateSearch />
			<DataTypeSelect />
			<State />
		</SearchStateContextProvider>
	</div>
);

export default App;
