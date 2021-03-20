import { useState, useEffect, createContext } from "react";
import { searchStates, getState } from "../services/state";

export const SearchStateContext = createContext(null);

export const useSearchState = () => {
  const [query, setQuery] = useState("");
  const [resultsList, setResultsList] = useState([]);
  const [pickedStateCode, setPickedStateCode] = useState(null);
  const [searchKey, setSearchKey] = useState("state");
  const [dataType, setDataType] = useState("table");
  const currentState = getState(pickedStateCode);

  useEffect(() => {
    setResultsList(searchStates(query, searchKey));
  }, [query]);

  return {
    query,
    onSetQuery: setQuery,
    list: resultsList,
    onPick: ({ code }) => setPickedStateCode(code),
    currentState,
    searchKey,
    setSearchKey,
    dataType,
    setDataType,
  };
};
