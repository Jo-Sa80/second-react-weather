import React from "react";

import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function DisplayForecast(response) {
    console.log(response.data);
  }
  let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}`;

  axios.get(apiUrl).then(DisplayForecast);

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
