import React, { useState, useEffect, useRef, useContext } from "react";
import classnames from "classnames";
import { useOnClickOrFocusedOutside } from "../hooks/useOnClickOrFocusedOutside";
import { SearchStateContext } from "../hooks/useSearchState";

const StateSearch = () => {
  const { query, onSetQuery, list, onPick } = useContext(SearchStateContext);
  const [selected, setSelected] = useState(0);
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef(null);

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
    } else if (key === "Enter" && resultsList.length) {
      setPicked(selected);
    }
  };

  useEffect(() => {
    setResultsList(fuse.search(query).slice(0, 6));
  }, [query]);

  useOnClickOrFocusedOutside(wrapperRef, () => setFocused(false));

  if (picked !== null) {
    const currentState = resultsList[picked];
    return (
      <div className="app">
        <StatePage state={currentState.item} onBack={() => setPicked(null)} />
      </div>
    );
  }

  return (
    <div className="field" ref={wrapperRef}>
      <div className="control">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <input
              className="input"
              type="text"
              placeholder="Search..."
              value={query}
              onChange={({ target }) => setQuery(target.value)}
              onKeyUp={onKeyUp}
              onFocus={() => setFocused(true)}
            />
          </div>
          {focused && resultsList.length > 0 && (
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {resultsList.map(({ item: { state, code } }, index) => (
                  <a
                    key={code}
                    className={classnames("dropdown-item", {
                      "is-active": selected === index,
                    })}
                    onMouseEnter={() => setSelected(index)}
                    onClick={() => setPicked(index)}
                  >
                    {state}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StateSearch;

// function useOnClickOrFocusedOutside(ref, handler) {
//   useEffect(() => {
//     const listener = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         handler(event);
//       }
//     };
//     document.addEventListener("click", listener, true);
//     document.addEventListener("focus", listener, true);
//     return () => {
//       document.removeEventListener("click", listener, true);
//       document.removeEventListener("focus", listener, true);
//     };
//   }, [ref, handler]);
// }

// const options = { keys: ["state", "code"] };
// const fuse = new Fuse(states, options);
