import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
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
