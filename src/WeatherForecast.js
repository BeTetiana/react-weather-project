import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

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
          <div className="col-sm-5">Sunday 18:50</div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row fs-4">
          <div className="col-sm-5">{Math.round(props.data.wind)} m/s</div>
          <div className="col-sm-5">14.08.2022</div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row mb-3 fs-4">
          <div className="col-sm-5 ">💧 {props.data.humidity} %</div>
          <div className="col-sm-5"></div>
          <div className="col-sm-2"></div>
        </div>
      </header>
      <div className="card">
        <div className="card-body">
          <div className="row fs-5 text-black text-opacity-50">
            <div className="col-sm-2">Tue</div>
            <div className="col-sm-2">Wed</div>
            <div className="col-sm-2">Thu</div>
            <div className="col-sm-2">Fri</div>
            <div className="col-sm-2">Sat</div>
            <div className="col-sm-2">Sun</div>
          </div>
          <div className="row fs-5">
            <div className="col-sm-2 ">
              <ReactAnimatedWeather
                icon={"CLEAR_DAY"}
                color={"white"}
                size={40}
                animate={true}
              />
            </div>
            <div className="col-sm-2">
              <ReactAnimatedWeather
                icon={"PARTLY_CLOUDY_DAY"}
                color={"white"}
                size={40}
                animate={true}
              />
            </div>
            <div className="col-sm-2">
              <ReactAnimatedWeather
                icon={"CLOUDY"}
                color={"white"}
                size={40}
                animate={true}
              />
            </div>
            <div className="col-sm-2 ">
              <ReactAnimatedWeather
                icon={"RAIN"}
                color={"white"}
                size={40}
                animate={true}
              />
            </div>
            <div className="col-sm-2">
              <ReactAnimatedWeather
                icon={"SLEET"}
                color={"white"}
                size={40}
                animate={true}
              />
            </div>
            <div className="col-sm-2">
              <ReactAnimatedWeather
                icon={"FOG"}
                color={"white"}
                size={40}
                animate={true}
              />
            </div>
          </div>
          <div className="row fs-5 text-black text-opacity-50">
            <div className="col-sm-2 ">25°/30°</div>
            <div className="col-sm-2">25°/30°</div>
            <div className="col-sm-2">25°/30°</div>
            <div className="col-sm-2 ">25°/30°</div>
            <div className="col-sm-2">25°/30°</div>
            <div className="col-sm-2">25°/30°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
