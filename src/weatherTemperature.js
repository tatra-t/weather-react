import React, {useState} from "react";
import "./App.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius") {
 return (
    <div className = "WeatherTemperature">
    <div className="row "> 
    <div className="col-6 now1">
                <span className="now"> <span id="tempCel"> {props.celsius}</span> ° <span className="celsius">C </span> 
                 |   <a className ="fahrenheit" href = "/" onClick={convertToFahrenheit}>F</a>
                </span>
                 
                <br/>
                <img className="imgMain" src={props.icon} alt="" id="emojiMain"/>

                <br/>
                <small> feels like <span id="feelLike"> {props.temp_feel}</span>°</small>
            </div>
    <div className="col-6 now2">
                <span id="weekDay"> </span>
                <span className="now3"> <span id="tempCurMax">{props.temp_max}</span>° / <span id="tempCurMin">{props.temp_min}</span> ° </span>
                <br /> <hr/> <span id="main"> </span>{props.description} <br /> Wind <span id="wind">{props.wind} </span> m/s <br />
                Humidity <span id="humidity">{props.humidity}</span> %
            </div>
            </div>
            </div>
 )  
    }else{
        return (
            <div className = "WeatherTemperature">
            <div className="row "> 
            <div className="col-6 now1">
                <span className="now"> 
                <span id="tempCel"> {Math.round(props.celsius*9/5+32)}</span> ° <a className= "celsius" href = "/" onClick={convertToCelsius}> C </a> 
                
                |   <span className="fahrenheit"> F</span>
                </span>
                 
                <br/>
                <img className="imgMain" src={props.icon} alt="" id="emojiMain"/>

                <br/>
                <small> feels like <span id="feelLike"> {Math.round(props.temp_feel*9/5+32)}</span>°</small>
            </div>
    <div className="col-6 now2">
                <span id="weekDay"> </span>
                <span className="now3"> <span id="tempCurMax">{Math.round(props.temp_max*9/5+32)}</span>° / <span id="tempCurMin">{Math.round(props.temp_min*9/5+32)}</span> ° </span>
                <br /> <hr/> <span id="main"> </span>{props.description} <br /> Wind <span id="wind">{props.wind} </span> m/s <br />
                Humidity <span id="humidity">{props.humidity}</span> %
            </div>
            </div>
            </div>
 )  
        
    }
}