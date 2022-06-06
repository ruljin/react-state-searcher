import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
} from "react";
import { useSearchState } from "../hooks/useSearchState";
import type { State } from "../models/State";

const INITIAL_SEARCH_STATE_VALUE = {
	list: [],
	searchKey: "state",
	setSearchKey: () => {},
	onPick: ({ code }: { code: string }) => {},
	query: "",
	onSetQuery: () => {},
	dataType: "",
	setDataType: () => {},
	currentState: undefined,
};

type SearchStateContextProps = {
	list: State[];
	searchKey: string;
	setSearchKey: Dispatch<SetStateAction<string>>;
	onPick: ({ code }: { code: string }) => void;
	query: string;
	onSetQuery: Dispatch<SetStateAction<string>>;
	dataType: string;
	setDataType: Dispatch<SetStateAction<string>>;
	currentState?: State;
};

type SearchStateContextProviderProps = { children: ReactNode };

export const SearchStateContext = createContext<SearchStateContextProps>(
	INITIAL_SEARCH_STATE_VALUE
);

export const SearchStateContextProvider = ({
	children,
}: SearchStateContextProviderProps) => {
	const searchState = useSearchState();

	return (
		<SearchStateContext.Provider value={searchState}>
			{children}
		</SearchStateContext.Provider>
	);
};

export const useSearchStateContext = () => {
	const context = useContext(SearchStateContext);

	if (context === undefined) {
		throw new Error(
			"useSearchStateContext must be used within a SearchStateContextProvider"
		);
	}

	return context;
};
