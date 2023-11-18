import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Weather from "./Weather";


export default function App() {
       
    return (
    <div className = "code">
        <Weather/>
        <p><a href="https://github.com/tatra-t/weather-react">Open-source code</a> by Tetiana Dushenko</p>
    </div>
    )
}