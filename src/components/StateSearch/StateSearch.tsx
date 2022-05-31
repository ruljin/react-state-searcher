import { useState, useEffect, useRef, useContext, KeyboardEvent } from "react";
import classnames from "classnames";
import { useOnClickOrFocusOutside } from "../../hooks/useOnClickOrFocusOutside";
import { SearchStateContext } from "../../hooks/useSearchState";
import { getSelectedItemOnKey } from "../../utils/getSelectedItemOnKey";
import styles from "./StateSearch.module.css";

export const StateSearch = () => {
	const { query, onSetQuery, list, onPick } = useContext(SearchStateContext);
	const [selected, setSelected] = useState(0);
	const [focused, setFocused] = useState(false);
	const wrapperRef = useRef(null);

	const _onPick = (item: any) => {
		onPick(item);
		setFocused(false);
	};

	const onKeyUp = (event: KeyboardEvent) => {
		const { key } = event;
		setFocused(true);

		const newSelected = getSelectedItemOnKey(key, selected, list.length);
		if (newSelected !== selected) {
			setSelected(newSelected);
		}

		if (key === "Enter") {
			const selectedItem = list[selected];
			if (selectedItem) {
				_onPick(selectedItem);
			}
		}
	};

	useOnClickOrFocusOutside(wrapperRef, () => setFocused(false));

	useEffect(() => {
		setSelected(0);
	}, [query]);

	return (
		<div className="field" ref={wrapperRef}>
			<div className="control">
				<div className={`${styles.fullWidth} dropdown is-active`}>
					<div className={`${styles.fullWidth} dropdown-trigger`}>
						<input
							value={query}
							onChange={({ target }) => onSetQuery(target.value)}
							className="input"
							type="text"
							placeholder="Search..."
							onKeyUp={onKeyUp}
							onFocus={() => setFocused(true)}
						/>
					</div>
					{focused && list.length > 0 && (
						<div className={`${styles.fullWidth} dropdown-menu`}>
							<div className="dropdown-content">
								{list.map((item: any, index: any) => {
									const { state } = item;

									return (
										<a
											key={state}
											className={classnames("dropdown-item", {
												"is-active": selected === index,
											})}
											onMouseEnter={() => setSelected(index)}
											onClick={() => _onPick(item)}>
											{state}
										</a>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
