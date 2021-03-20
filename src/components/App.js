import React from "react";
import StateSearch from "./StateSearch";
import StatePage from "./StatePage";
import KeySelect from "./KeySelect";
import DataTypeSelect from "./DataTypeSelect";
import { useSearchState, SearchStateContext } from "../hooks/useSearchState";

const App = () => {
  const searchState = useSearchState();
  const { currentState } = searchState;

  return (
    <div className="app">
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
