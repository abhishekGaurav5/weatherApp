import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const apiKey = "8c303697db32a5db5d5a54a0621a01fa";
  // [variable , function]
  const [inputCity, setInputCity] = useState(""); //empty string defined.

  const [data, setData] = useState({}); // object value assigned to data

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;

    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    //get request by axios. fetching data from open weather.org

    axios
      .get(apiURL) // http request placing
      .then((res) => {
        // when http request gets successful " then "
        console.log("Response :", res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert("City not found");
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value); // extracted value from the taget event.

    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };
  return (
    <div>
      <div className="col-md-12">
        <div className="wetherBg">
          <h1 className="heading">Weather App</h1>

          <div className="d-grid gap-3 col-4 mt-4 inputt">
            <input
              type="text"
              className="form-control"
              value={inputCity}
              onChange={handleChangeInput}
            />
            <button
              className="btn btn-info bttn"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {Object.keys(data).length > 0 && (
          <div className="col-md-12 text-center mt-5">
            <div className="shadow rounded wetherResultBox">
              <img
                className="weathorIcon"
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="imageloading"
              />

              <h5 className="weathorCity">{data?.name}</h5>
              <h6 className="weathorTemp">
                {(data.main.temp - 273.15).toFixed(0)}°C
                <span className="description">
                  {" "}
                  {data?.weather[0].description}
                </span>
              </h6>

              <div className="weatherMain">
                <div>
                  <b>Max:</b> {(data?.main?.temp_max - 273.15).toFixed(0)}&deg;C
                </div>
                <div>
                  <b>Min:</b> {(data?.main?.temp_min - 273.15).toFixed(0)}&deg;C
                </div>
                <div>
                  <b>Wind Speed:</b> {data.wind.speed}
                </div>
                <div>
                  <b>Humidity:</b> {(data?.main?.humidity).toFixed(0)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
