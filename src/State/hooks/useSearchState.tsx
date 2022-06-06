import { useEffect, useState } from "react";
import { getStates, getState } from "../services/state";
import states from "../services/states.json";
import type { State } from "../models/State";

export const useSearchState = () => {
	const [resultsList, setResultsList] = useState<State[]>([]);
	const [searchKey, setSearchKey] = useState("state");
	const [stateCode, setStateCode] = useState<string | null>(null);
	const [query, setQuery] = useState("");
	const [dataType, setDataType] = useState("table");
	const currentState = getState(stateCode, states);

	useEffect(() => {
		setResultsList(getStates(query, searchKey, states));

		if (currentState?.state !== query) {
			setStateCode(null);
		}
	}, [query]);

	useEffect(() => {
		if (currentState) {
			setQuery(currentState.state);
		}
	}, [stateCode]);

	return {
		list: resultsList,
		searchKey,
		setSearchKey,
		onPick: ({ code }: { code: string }) => setStateCode(code),
		query,
		onSetQuery: setQuery,
		dataType,
		setDataType,
		currentState,
	};
};
