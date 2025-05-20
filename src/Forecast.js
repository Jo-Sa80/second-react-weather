import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          {" "}
          <div className="Forecast-day">Thu</div>{" "}
          <img src={props.data.icon} alt={props.data.description} />{" "}
          <div className="Forecast-temperature">
            <span className="Forecast-temperature-max">19°</span>{" "}
            <span className="Forecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
