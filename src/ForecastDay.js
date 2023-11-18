import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
    function maxTemperature() {
      let temperature = Math.round(props.data.temp.max);
      return `${temperature}°`;
    }
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }
    function icon( ) {
        let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
        return `${icon}`;
    }
    function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();
  
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[day];
    }
    return (
      <div className="row">
        <div className="col">
          <div className="day">{day()}</div>
          <div className="forecast-icon">
          <img className="imgIcon" src={icon()} alt="" id="emojiMain"/>
          </div>
          <div className="forecast-temps">
            <span className="forecast-high">{maxTemperature()}</span>
            <span className="forecast-min"> | {minTemperature()}</span>
          </div>
        </div>
      </div>
    );
  }