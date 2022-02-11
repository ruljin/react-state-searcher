import { useContext } from 'react';
import { SearchStateContext } from '../../hooks/useSearchState';
import styles from './StatePage.module.css';

export const StatePage = () => {
	const {
		currentState: {
			state,
			admission_date,
			capital_city,
			code,
			population,
			population_rank,
			map_image_url,
			state_flag_url,
			state_seal_url,
		},
		dataType,
	} = useContext(SearchStateContext);

	return (
		<div className='page__state content'>
			<h1 className='title is-1'>{state}</h1>

			{dataType === 'symbols' && (
				<div className={styles.symbols}>
					<div className={styles.image__wrapper}>
						<img className='flag' src={state_flag_url} />
					</div>
					<div className={styles.image__wrapper}>
						<img src={state_seal_url} />
					</div>
				</div>
			)}

			{dataType === 'table' && (
				<table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
					<tbody>
						<tr>
							<td>Data przyłączenia</td>
							<td>{admission_date}</td>
						</tr>
						<tr>
							<td>Stolica</td>
							<td>{capital_city}</td>
						</tr>
						<tr>
							<td>Kod</td>
							<td>{code}</td>
						</tr>
						<tr>
							<td>Mieszkańcy</td>
							<td>{population}</td>
						</tr>
						<tr>
							<td>Ranking mieszkańców</td>
							<td>{population_rank}</td>
						</tr>
					</tbody>
				</table>
			)}

			{dataType === 'map' && <img className={styles.map} src={map_image_url} />}
		</div>
	);
};
