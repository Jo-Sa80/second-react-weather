import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let celcius = props.celcius;
  let fahrenheit = Math.round(props.celcius * 1.8 + 32);
  const [unit, setUnit] = useState(celcius);

  function changetoFahrenheit(event) {
    event.preventDefault();
    setUnit(fahrenheit);
  }
  function changetoCelcius(event) {
    event.preventDefault();
    setUnit(celcius);
  }

  return (
    <span className="WeatherTemperature">
      <span className="Temperature">{unit}</span>{" "}
      <span className="unit">
        <a href="/" onClick={changetoCelcius}>
          °C
        </a>{" "}
        |
        <a href="/" onClick={changetoFahrenheit}>
          °F
        </a>
      </span>
    </span>
  );
}
