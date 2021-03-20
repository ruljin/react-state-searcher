import React, { useContext } from "react";
import Select from "./Select";
import { SearchStateContext } from "../hooks/useSearchState";

const KeySelect = () => {
  const { setSearchKey, searchKey } = useContext(SearchStateContext);
  return (
    <Select label="Search after" onSelect={setSearchKey} value={searchKey}>
      <option value="state">State</option>
      <option value="code">Code</option>
      <option value="capital_city">Capital city</option>
    </Select>
  );
};

export default KeySelect;
