import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App2.css"
import Navigate from "./Navigate";
import Today from "./Today";
import WeatherToday from "./WeatherToday";
import ForecastWeather from "./ForecastWeather";

export default function App2() {
    return (
    <div className = "code">
        <div className="container">
            <Navigate/>
            <Today/>
            <WeatherToday/>
            <ForecastWeather/>
        </div>
        <a href="">Open-source code</a> by Tetiana Dushenko
    </div>

    )
}