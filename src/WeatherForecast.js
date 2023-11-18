import React, {useState, useEffect} from  "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    useEffect( () => {
        setLoaded(false);
    }, [props.lat, props.lon]);
    function handleResponse(response) {
        setLoaded(true);
        setForecast(response.data.daily);
        console.log(response.data.daily);
    }

    if (loaded) {

    return (
        <div className = "row">
            
                {forecast.map(function(dailyForest, index) {
                    if  (index<6) {
                        return(
                            <div className ="col" key={index}>
                              <ForecastDay data={dailyForest}/>  
                            </div>
                        );
                    } else{
                        return null;
                    }
                })}
                </div>
    );
    }else{
        let  url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=5bd8dd5876af31be7dd1dd4666c7f2a5&units=metric`;
        console.log(url);
        axios.get(url).then(handleResponse);
        return "Loading... "

    }
}