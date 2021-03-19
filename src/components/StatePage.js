import React from "react";

const StatePage = ({
  state: {
    state,
    nickname,
    admission_date,
    capital_city,
    code,
    population,
    population_rank,
    map_image_url,
    state_flag_url,
    state_seal_url,
  },
  onBack,
}) => {
  return (
    <div className="page--state content">
      <button className="button" onClick={onBack}>
        Go back
      </button>
      <h1 className="title is-1">{state}</h1>
      <p className="title is-3">{nickname}</p>
      <div className="symbols">
        <div className="image__wrapper">
          <img className="flag" src={state_flag_url} alt="" />
        </div>
        <div className="image__wrapper">
          <img src={state_seal_url} alt="" />
        </div>
      </div>
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
      <img className="map" src={map_image_url} alt="" />
    </div>
  );
};

export default StatePage;
