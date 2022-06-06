import { ReactNode } from "react";
import styles from "./Select.module.css";

type SelectProps = {
	label: string;
	value: string;
	onSelect: (value: string) => void;
	children: ReactNode;
};

export const Select = ({ label, value, onSelect, children }: SelectProps) => (
	<div className="field">
		<label className="label">{label}</label>
		<div className="control">
			<div className="select">
				<select
					value={value}
					onChange={({ target }) => onSelect(target.value)}
					className={styles.option}>
					{children}
				</select>
			</div>
		</div>
	</div>
);
