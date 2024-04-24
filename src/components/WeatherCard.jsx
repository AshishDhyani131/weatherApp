import React, { useState, useContext, useEffect } from "react";
import WeatherItem from "./WeatherItem.jsx";
import { CityContext } from "../store/CityContext.jsx";
import getCoordinates from "../utilities/getCoordinates.js";
import getWeatherDetails from "../utilities/getWeatherDetails.js";
const WeatherCard = () => {
  const { inputCityName } = useContext(CityContext);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [weatherDataArr, setWeatherDataArr] = useState([]);
  function handleActiveIndex(index) {
    setActiveIndex(index);
  }
  useEffect(() => {
    (async function getWeatherData() {
      if (inputCityName === "") return;
      const coordsObj = await getCoordinates(inputCityName);
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const { dailyWeather } = await getWeatherDetails(coordsObj, timezone);
      setWeatherDataArr(dailyWeather);
    })();
  }, [inputCityName]);

  return (
    <ul className="accordion">
      {inputCityName ? (
        weatherDataArr.map((weather, index) => {
          return (
            <WeatherItem
              data={weather}
              index={index}
              activeIndex={activeIndex}
              onClick={handleActiveIndex}
              key={index}
            ></WeatherItem>
          );
        })
      ) : (
        <li className="accordion--item"></li>
      )}
    </ul>
  );
};

export default WeatherCard;
