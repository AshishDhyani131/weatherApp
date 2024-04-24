import React from "react";
import windIcon from "../assets/icons/icon-wind@c.svg";
import humidIcon from "../assets/icons/icon-humidity@c.svg";
import rainIcon from "../assets/icons/icon-rain@c.svg";
const WeatherItem = ({ data, index, activeIndex, onClick }) => {
  return (
    <li
      className={`accordion--item ${data.weatherType} ${
        index === activeIndex ? "opened" : ""
      }`}
      onClick={() => onClick(index)}
    >
      <ul className="date">
        <li>{data.day}</li>
        <li>{data.date}</li>
      </ul>
      <div className="temp">
        <p>{data.weatherType}</p>
        <ul className="temp--values">
          {data.temperatures.map((temp, index) => (
            <li key={index}>{temp}°</li>
          ))}
        </ul>
      </div>
      <ul className="readings">
        <li>
          <img src={windIcon} alt="Wind" />
          <p>{data.wind} km/h</p>
          <p>Wind</p>
        </li>
        <li>
          <img src={humidIcon} alt="Humidity" />
          <p>{data.humidity}%</p>
          <p>Humidity</p>
        </li>
        <li>
          <img src={rainIcon} alt="Rain" />
          <p>{data.rain}%</p>
          <p>Rain</p>
        </li>
      </ul>
      <ul className="bottom-temp temp--values">
        {data.temperatures.map((temp, index) => (
          <li key={index}>{temp}°</li>
        ))}
      </ul>
    </li>
  );
};

export default WeatherItem;
