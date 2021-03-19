import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");

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
          <a className="dropdown-item">Dropdown item</a>
          <a className="dropdown-item s-active">Other dropdown item</a>
        </div>
      </div>
    </div>
  );
};

export default App;
