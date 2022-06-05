export type Table = "table";

export type Symbols = "symbols";

export type Map = "map";

export type DataValue = Table | Symbols | Map;

export type DataType = {
	value: DataValue;
	option: string;
};
