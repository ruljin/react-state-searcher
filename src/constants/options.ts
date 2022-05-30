import type { DataType } from "../models/DataType";
import type { SearchKey } from "../models/SearchKey";

export const DATA_TYPES: DataType[] = [
	{ value: "table", option: "Table" },
	{ value: "symbols", option: "Symbols" },
	{ value: "map", option: "Map" },
];

export const SEARCH_KEYS: SearchKey[] = [
	{ value: "state", option: "Name" },
	{ value: "code", option: "State code" },
	{ value: "capital_city", option: "Capital city" },
];
