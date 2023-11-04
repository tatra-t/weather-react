import "./App.css";
import axios from "axios";
import React, { useState } from "react";



export default function App() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5bd8dd5876af31be7dd1dd4666c7f2a5&units=metric`;
    axios.get(url).then(showWeather);
  }
 
  return (
    
    <div className="App">
      <h1>Weather Search Engine </h1>
      <form onSubmit={handleSubmit}>
        <input type="Search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
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
      <a href="https://github.com/tatra-t/weather-react/tree/master/src">My github</a>
    </div>
  )
  }

