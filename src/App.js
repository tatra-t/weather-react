import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./weatherTemperature";


export default function App(props) {
        let [city, setCity] = useState(props.defaultCity);
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
                <a href="/" className="navbar-brand">Weather in World</a>
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
                
        </div>
        <WeatherTemperature celsius= {temperature} temp_feel = {temperatureFeel} temp_max = {temperatureMax}
         temp_min = {temperatureMin} icon ={icon} description = {description} wind = {wind} 
         humidity = {humidity} />
        <div className="row ">   
        </div>
          <div className="ForecastWeather">
          <div className="col-12 hourly">Hourly</div>
          <div  id="forecastHour"></div>
          
          <div className="col-12 days">Daily</div>
          <div id= "forecastDay"> </div>
          <br />
      </div>
      </div>
        <a href="https://github.com/tatra-t/weather-react">Open-source code</a> by Tetiana Dushenko
    </div>

    )
}