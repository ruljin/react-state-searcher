import React, { useContext } from "react";
import { SearchStateContext } from "./App";

const StatePage = () => {
  const {
    state: {
      state,
      state_flag_url,
      state_seal_url,
      admission_date,
      capital_city,
      code,
      population,
      population_rank,
      map_image_url,
    },
    dataType,
  } = useContext(SearchStateContext);

  return (
    <div className="page--state content">
      <h1 className="title is-1">{state}</h1>
      {dataType === "symbols" && (
        <div className="symbols">
          <div className="image__wrapper">
            <img className="flag" src={state_flag_url} alt="" />
          </div>
          <div className="image__wrapper">
            <img src={state_seal_url} alt="" />
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
      {dataType === "map" && <img className="map" src={map_image_url} alt="" />}
    </div>
  );
};

export default StatePage;
