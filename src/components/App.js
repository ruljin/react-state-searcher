import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import states from "../states.json";
import classnames from "classnames";
import StatePage from "./StatePage";

const options = { keys: ["state", "code"] };
const fuse = new Fuse(states, options);

const App = () => {
  const [query, setQuery] = useState("");
  const [resultsList, setResultsList] = useState([]);
  const [selected, setSelected] = useState(0);
  const [picked, setPicked] = useState(null);

  const onKeyUp = (event) => {
    const { key } = event;
    if (key === "ArrowUp") {
      const newSelected = selected - 1;
      if (newSelected < 0) {
        return;
      }
      setSelected(newSelected);
    } else if (key === "ArrowDown") {
      const newSelected = selected + 1;
      if (newSelected > resultsList.length - 1) {
        return;
      }
      setSelected(newSelected);
    } else if (key === "Enter") {
      setPicked(selected);
    }
  };

  useEffect(() => {
    setResultsList(fuse.search(query).slice(0, 6));
  }, [query]);

  if (picked !== null) {
    const currentState = resultsList[picked];
    return <StatePage state={currentState} />;
  }

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          onKeyUp={onKeyUp}
        />
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {resultsList.map(({ item: { state, code } }, index) => (
            <a
              key={code}
              className={classnames("dropdown-item", {
                "is-active": selected === index,
              })}
              onMouseEnter={() => setSelected(index)}
            >
              {state}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
