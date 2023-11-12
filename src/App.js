import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import axios from "axios";
import FormattedDate from "./FormattedDate";



export default function App() {

        let [city, setCity] = useState("");
        let [temperature, setTemperature] = useState("");
        let [temperatureFeel, setTemperatureFeel] = useState("");
        let [temperatureMin, setTemperatureMin] = useState("");
        let [temperatureMax, setTemperatureMax] = useState("");
        let [humidity, setHumidity] = useState("");
        let [wind, setWind] = useState("");
        let [description, setDescription] = useState("");
        let [icon, setIcon] = useState("");
        let [nameCity, setNameCity] = useState("");
        let [dateNow, setDateNow] = useState("");

        function showWeather(response) {
          setTemperature(Math.round(response.data.main.temp));
          setTemperatureFeel(Math.round(response.data.main.feels_like));
          setTemperatureMin(Math.round(response.data.main.temp_min));
          setTemperatureMax(Math.round(response.data.main.temp_max));
          setNameCity(response.data.name);
          setHumidity(response.data.main.humidity);
          setDescription(response.data.weather[0].description);
          setWind(response.data.wind.speed);
          setIcon(
            `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
          );
          setDateNow(response.data.dt);
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
        console.log({dateNow});
    return (
    <div className = "code">
        <div className="container">
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Weather in World</a>
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search city" aria-label="Search" onChange={updateCity}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="col-8"></div>
            <div className="col-4 curLoc">
            </div> 
        </nav>

<div className="today">
                <h1>{nameCity}</h1>
                <h2 id="dateNow">
                  <FormattedDate date={dateNow}/>
                </h2>
                <h2 id="time"> </h2>
        </div>

        <div className="row ">
            <div className="col-6 now1">
                <span className="now"> <span id="tempCel"> {temperature}</span> ° <span class="celsius">C</span> 
                 | <span className="fahrenheit"> <a href="">F</a> </span>
                </span>
                <br/>
                <img className="imgMain" src={icon} alt="" id="emojiMain"/>

                <br/>
                <small> feels like <span id="feelLike"> {temperatureFeel}</span>°</small>
            </div>
            <div className="col-6 now2">
                <span id="weekDay"> </span>
                <span className="now3"> <span id="tempCurMax">{temperatureMax}</span>° / <span id="tempCurMin">{temperatureMin}</span> ° </span>
                <br /> <hr/> <span id="main"> </span>{description} <br /> Wind <span id="wind">{wind} </span> m/s <br />
                Humidity <span id="humidity">{humidity}</span> %
            </div>
        </div>
          <div className="ForecastWeather">
          <div className="col-12 hourly">Hourly</div>
          <div  id="forecastHour"></div>
          
          <div className="col-12 days">Daily</div>
          <div id= "forecastDay"> </div>
          <br />
      </div>
      </div>
        <a href="">Open-source code</a> by Tetiana Dushenko
    </div>

    )
}