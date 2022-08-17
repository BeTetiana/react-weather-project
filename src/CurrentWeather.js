import React from "react";
import FormatTime from "./FormatTime";
import FormatDate from "./FormatDate";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <header>
        <div className="row mt-3 fs-1">
          <div className="col-sm-5">
            <div className="temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-sm-5 text-capitalize">{props.data.city}</div>
          <div className="col-sm-2">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
        <div className="row fs-4">
          <div
            className="col-sm-5 text-capitalize 
                "
          >
            {props.data.description}
          </div>
          <div className="col-sm-5">
            <FormatTime date={props.data.date} />
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row fs-4">
          <div className="col-sm-5">༄{Math.round(props.data.wind)} m/s</div>
          <div className="col-sm-5">
            <FormatDate date={props.data.date} />
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row mb-3 fs-4">
          <div className="col-sm-5 ">💧 {props.data.humidity} %</div>
          <div className="col-sm-5"></div>
          <div className="col-sm-2"></div>
        </div>
      </header>
      <Forecast />
    </div>
  );
}
