import './Output.css';
import React from 'react';
import temp from '../images/temp2.png';
import sunset from '../images/sunset2.png';
import sunrise from '../images/sunrise2.png';
import ReactCountryFlag from "react-country-flag";

const Output = (props) => {
      
    function calc(n) {
        let unix_time = n
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_time * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        // Will display time in 12:34:56 format
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    return (
        <div>
            {/* check if the api returns valid data = > if data.cod == 200 then data is valid */}
            {props.data.cod === 200 ?
                <div className="container">
                    <div className="desc">
                        <h1>{props.data.name}, {props.data.sys.country} <ReactCountryFlag countryCode={props.data.sys.country} svg /> </h1>
                        <h2>{props.data.weather[0].description} <br/>
                            <img width="50%" src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="icon"/>
                        </h2>
                    </div>
                    <br/><br/>
                    <table className="outTable">
                        <thead>
                        <tr>
                            <th>Temperature<br/> <img  src={temp} alt="temp"/></th> 
                            <th>Feels Like<br/> <img  src={temp} alt="temp"/></th>
                            <th>Min-Max Temperature<br/> <img  src={temp} alt="temp"/></th>
                            <th>Sunrise<br/> <img  src={sunrise} alt="temp"/></th>
                            <th>Sunset<br/> <img  src={sunset} alt="temp"/></th>
                        </tr>
                        </thead>
                        <tbody>
                        {<tr>
                            <td>{Math.round(props.data.main.temp)}°C</td>
                            <td>{Math.round(props.data.main.feels_like)}°C</td>
                            <td>({Math.round(props.data.main.temp_min)})°C <strong>-</strong> ({Math.round(props.data.main.temp_max)})°C</td>
                            <td>{calc(props.data.sys.sunrise)}</td>
                            <td>{calc(props.data.sys.sunset)}</td>
                        </tr>}
                        </tbody>
                    </table>
                    <br></br>
                </div>
            :
                <div>
                    {props.data !== '' ?
                        <h1 className="desc">{props.data.message}<span>&#129335;</span></h1>
                    : 
                        null
                    }
                </div>
            }            
        </div>
    )
}
export default Output;