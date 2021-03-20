import React from "react";
import StateSearch from "./StateSearch";

const App = () => {
  return (
    <div className="app">
      <div className="field">
        <label className="label">Search after</label>
        <div className="control">
          <div className="select">
            <select>
              <option>State</option>
              <option>Code</option>
              <option>Capital city</option>
            </select>
          </div>
        </div>
      </div>
      <StateSearch />
      <div className="field">
        <label className="label">Show data</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Table</option>
              <option>Symbols</option>
              <option>Map</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
