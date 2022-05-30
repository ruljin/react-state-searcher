import { ReactNode } from "react";

type SelectProps = {
	label: any;
	value: any;
	onSelect: any;
	children: ReactNode;
};

export const Select = ({ label, value, onSelect, children }: SelectProps) => (
	<div className="field">
		<label className="label">{label}</label>
		<div className="control">
			<div className="select">
				<select value={value} onChange={({ target }) => onSelect(target.value)}>
					{children}
				</select>
			</div>
		</div>
	</div>
);
