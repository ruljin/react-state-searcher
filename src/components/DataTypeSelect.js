import React, { useContext } from "react";
import Select from "./Select";
import { SearchStateContext } from "./App";

const DataTypeSelect = () => {
  const { setDataType, dataType } = useContext(SearchStateContext);
  return (
    <Select label="Search after" onSelect={setDataType} value={dataType}>
      <option value="table">Table</option>
      <option value="symbols">Symbols</option>
      <option value="map">Map</option>
    </Select>
  );
};

export default DataTypeSelect;
