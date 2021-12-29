import "./Weather.css";
import Output from "./Output";
import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");


  function getForecast(e) {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ef4207103ac2dc60095ccf83a0cbf82a`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }
  return (
    <div>
      <h2 className="text">Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          className="inp"
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;
        <button className="big-button" type="submit">
          Get Forecast
        </button>
      </form>
      <br/>
      <Output data={data} />
    </div>
  );
};
export default Weather;
