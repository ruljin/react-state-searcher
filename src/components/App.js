import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import states from "../states.json";

const options = { keys: ["state", "code"] };
const fuse = new Fuse(states, options);

const App = () => {
  const [query, setQuery] = useState("");
  const [resultsList, setResultsList] = useState([]);

  useEffect(() => {
    setResultsList(fuse.search(query));
  }, [query]);

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {resultsList.map(({ item: { state, code } }, index) => (
            <a key={code} className="dropdown-item" tabIndex={index + 1}>
              {state}
              {/* is-active */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
