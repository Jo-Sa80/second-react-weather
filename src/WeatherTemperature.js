import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let celcius = props.celcius;

  return (
    <span className="WeatherTemperature">
      <span className="Temperature">{celcius}</span>{" "}
      <span className="unit">°C</span>
    </span>
  );
}
