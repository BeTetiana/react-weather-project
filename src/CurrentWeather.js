import React from "react";
import FormatTime from "./FormatTime";
import FormatDate from "./FormatDate";
import Forecast from "./Forecast";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <header>
        <div className="row mt-3 fs-2">
          <div className="col-sm-5">
            {Math.round(props.data.temperature)} <span class="unit">℃/°F</span>
          </div>
          <div className="col-sm-5 text-capitalize">{props.data.city}</div>
          <div className="col-sm-2">
            <img src={props.data.icon} alt="Weather icon here" />
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
