import React from "react";

export default function FormattedDate(props) {
   
    let dateNow  = new Date(props.date*1000);
    let days = [
        "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let day = days[dateNow.getDay()];
    let hour = dateNow.getHours();
    let min = dateNow.getMinutes();
    if (min<10) {
        min =`0${min}`;
    }
    let mounths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" 
    ];
    let month  = mounths[dateNow.getMonth()];
    let year = dateNow.getFullYear();
    let date = dateNow.getDate();
    console.log(dateNow.getFullYear());
    return <div className="FormattedDate">{date} {month} {year} <br/>{day}, {hour}:{min}</div>
}