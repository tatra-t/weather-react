import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function HandleSubmit(event) {
    event.preventDefault();
    setText(
      <div>
        It is in {city}
        <ul>
          <li>Temperatura: {Math.round(temperature)} °C</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {Math.round(wind)} km/h</li>
          <li>Description: {description}</li>
          <li>
            <img src={icon} alt="" />
          </li>
        </ul>
      </div>
    );
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bd8dd5876af31be7dd1dd4666c7f2a5&units=metric`;
  axios.get(url).then(showWeather);
  console.log(url);
  return (
    <div className="App">
      <h1>Weather Search Engine </h1>
      <form onSubmit={HandleSubmit}>
        <input type="Search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {text}
    </div>
  );
}
