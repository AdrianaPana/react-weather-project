import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-4 mb-5">
        <div className="col-7 pe-0">
          <div className="d-flex flex-start">
            <span className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </span>
            <span className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </span>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}