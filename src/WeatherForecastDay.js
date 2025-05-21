import React from "react";

export default function WeatherForecastDay(props) {
  function tempMin() {
    return Math.round(props.info.temperature.minimum);
  }
  function tempMax() {
    Math.round(props.info.temperature.maximum);
  }

  function day() {
    let date = new Date(props.info.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>{" "}
      <img
        src={props.info.condition.icon_url}
        alt={props.info.condition.description}
      />{" "}
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">{tempMax()}°</span>{" "}
        <span className="Forecast-temperature-min">{tempMin()}°</span>
      </div>
    </div>
  );
}
