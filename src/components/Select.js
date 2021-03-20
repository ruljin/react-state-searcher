import React from "react";

const Select = ({ label, value, onSelect, children }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select
            value={value}
            onChange={({ target }) => onSelect(target.value)}
          >
            {children}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
