import React, { useState, useEffect, createContext } from "react";
import StateSearch from "./StateSearch";
import StatePage from "./StatePage";
import KeySelect from "./KeySelect";
import DataTypeSelect from "./DataTypeSelect";
import { searchStates, getState } from "../services/state";

export const SearchStateContext = createContext(null);

const App = () => {
  const [query, setQuery] = useState("");
  const [resultsList, setResultsList] = useState([]);
  const [pickedStateCode, setPickedStateCode] = useState(null);
  const [searchKey, setSearchKey] = useState("state");
  const [dataType, setDataType] = useStatE("table");
  const currentState = getState(pickedStateCode);

  useEffect(() => {
    setResultsList(searchStates(query, searchKey));
  }, [query]);

  return (
    <div className="app">
      <SearchStateContext.Provider
        value={{
          query,
          onSetQuery: setQuery,
          list: resultsList,
          onPick: ({ code }) => setPickedStateCode(code),
          state: currentState,
          searchKey,
          setSearchKey,
          dataType,
          setDataType,
        }}
      >
        <KeySelect />
        <StateSearch />
        <DataTypeSelect />
        {currentState && <StatePage />}
      </SearchStateContext.Provider>
    </div>
  );
};

export default App;
{
  /* <div className="field">
        <label className="label">Show data</label>
        <div className="control">
          <div className="select">
            <select>

            </select>
          </div>
        </div>
      </div> */
}
