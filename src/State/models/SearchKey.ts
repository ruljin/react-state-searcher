export type State = "state";

export type Code = "code";

export type CapitalCity = "capital_city";

export type SearchKeyValue = State | Code | CapitalCity;

export type SearchKey = {
	value: SearchKeyValue;
	option: string;
};
