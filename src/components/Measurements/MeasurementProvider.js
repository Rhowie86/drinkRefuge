//This component fetches all of the measurements from the API

import React, { useState, createContext } from "react";

export const MeasurementContext = createContext();

export const MeasurementProvider = (props) => {
  const [measurement, setMeasurement] = useState([]);

  const getMeasurements = () => {
    return fetch("http://localhost:8088/measurements")
      .then((res) => res.json())
      .then(setMeasurement);
  };

  return (
    <MeasurementContext.Provider
      value={{
        measurement,
        getMeasurements,
      }}
    >
      {props.children}
    </MeasurementContext.Provider>
  );
};
