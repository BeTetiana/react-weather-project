import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import { RotatingLines } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    let apiKey = "c50b5a754f93d07aef8211ca2b9025a4";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <CurrentWeather data={weatherData} />
        <form className="weather-search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                type="serch"
                placeholder="Choose your city.."
                autoComplete="off"
                className="form-control fs-5 shadow bg-body rounded"
                onChange={updateCity}
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="form-control fs-5 shadow bg-body rounded"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Location"
                className="form-control fs-5 shadow bg-body rounded"
              />
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <RotatingLines
          strokeColor="lightblue"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
}
