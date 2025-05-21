import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let celcius = props.celcius;
  let fahrenheit = Math.round(celcius * 1.8 + 32);
  console.log(fahrenheit);

  const [unit, setUnit] = useState(celcius);

  function changetoFahrenheit(event) {
    event.preventDefault();
    setUnit(fahrenheit);
  }
  function changetoCelcius(event) {
    event.preventDefault();
    setUnit(celcius);
  }

  if (unit === celcius) {
    return (
      <span className="WeatherTemperature">
        <span className="Temperature">{celcius}</span>{" "}
        <span className="unit">
          °C |
          <a href="/" onClick={changetoFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="Temperature">{fahrenheit}</span>{" "}
        <span className="unit">
          <a href="/" onClick={changetoCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
