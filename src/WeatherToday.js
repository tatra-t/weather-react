import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App2.css"

export default function WeatherToday() {
    return (
        <div className="row ">
            <div className="col-6 now1">
                <span className="now"> <span id="tempCel"> </span> ° <span class="celsius">C</span> 
                 | <span className="fahrenheit"> <a href="">F</a> </span>
                </span>
                <br/>
                <img className="imgMain" src="" alt="" id="emojiMain"/>

                <br/>
                <small> feels like <span id="feelLike"> </span>°</small>
            </div>
            <div className="col-6 now2">
                <span id="weekDay"> </span>
                <br />
                <span className="now3"> <span id="tempCurMax"></span>° / <span id="tempCurMin"></span> ° </span>
                <br /> <hr/> <span id="main"> </span>, <br /> Wind <span id="wind"> </span> m/s <br />
                Humidity <span id="humidity"></span> %
            </div>
        </div>


    )}