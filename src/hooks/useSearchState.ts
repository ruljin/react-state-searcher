import { useState, useEffect, createContext } from "react";
import { searchStates, getState } from "../services/state";
import states from "../services/states.json";

import type { State } from "../models/State";

export const SearchStateContext = createContext(null);

export const useSearchState = () => {
	const [query, setQuery] = useState("");
	const [resultsList, setResultsList] = useState<State[]>([]);
	const [pickedStateCode, setPickedStateCode] = useState(null);
	const [searchKey, setSearchKey] = useState("state");
	const [dataType, setDataType] = useState("table");
	const currentState = getState(pickedStateCode, states);

	useEffect(() => {
		setResultsList(searchStates(query, searchKey, states));
		if (currentState && currentState.state !== query) {
			setPickedStateCode(null);
		}
	}, [query]);

	useEffect(() => {
		if (currentState) {
			setQuery(currentState.state);
		}
	}, [pickedStateCode]);

	return {
		query,
		onSetQuery: setQuery,
		list: resultsList,
		onPick: ({ code }: any) => setPickedStateCode(code),
		currentState,
		dataType,
		setSearchKey,
		setDataType,
	};
};
