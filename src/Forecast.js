import React, { useState } from "react";

import axios from "axios";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  let city = props.city;
  function DisplayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(city);
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            {" "}
            <WeatherForecastDay info={forecast[0]} />
          </div>
          <div className="col">
            {" "}
            <WeatherForecastDay info={forecast[1]} />
          </div>
          <div className="col">
            {" "}
            <WeatherForecastDay info={forecast[2]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1c9131f04b7fo56320ba61f00b43t4cd";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(DisplayForecast);
    return null;
  }
}
