import { useSearchStateContext } from "../context/SearchState";
import styles from "./State.module.css";

export const State = () => {
	const { currentState, dataType } = useSearchStateContext();

	if (!currentState) {
		return null;
	}

	const {
		state,
		admission_date,
		capital_city,
		code,
		population,
		population_rank,
		map_image_url,
		state_flag_url,
		state_seal_url,
	} = currentState;

	return (
		<div className="page__state content">
			<h1 className="title is-1">{state}</h1>

			{dataType === "symbols" && (
				<div className={styles.symbols}>
					<div className={styles.imageWrapper}>
						<img className={styles.map} src={state_flag_url} />
					</div>
					<div className={styles.imageWrapper}>
						<img src={state_seal_url} />
					</div>
				</div>
			)}

			{dataType === "table" && (
				<table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
					<tbody>
						<tr>
							<td>Admission date</td>
							<td>{admission_date}</td>
						</tr>
						<tr>
							<td>Capital city</td>
							<td>{capital_city}</td>
						</tr>
						<tr>
							<td>Code</td>
							<td>{code}</td>
						</tr>
						<tr>
							<td>Population</td>
							<td>{population}</td>
						</tr>
						<tr>
							<td>Population rank</td>
							<td>{population_rank}</td>
						</tr>
					</tbody>
				</table>
			)}

			{dataType === "map" && <img className={styles.map} src={map_image_url} />}
		</div>
	);
};
