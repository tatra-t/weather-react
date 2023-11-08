import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App2.css"

export default function ForecastWeather() {
    return (
        <div className="ForecastWeather">
            <div className="col-12 hourly">Hourly</div>
            <div  id="forecastHour"></div>
            
            <div className="col-12 days">Daily</div>
            <div id= "forecastDay"> </div>
            <br />
        </div>

    )}