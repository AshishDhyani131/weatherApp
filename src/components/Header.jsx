import React, { useContext } from "react";
import { CityContext } from "../store/CityContext";
const Header = () => {
  const { inputCityName, setCityName } = useContext(CityContext);
  function handleSubmit(event) {
    event.preventDefault();
    setCityName(event.target.cityName.value);
  }
  return (
    <>
      <div id="page-title">
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            className="form__input"
            name="cityName"
          />
        </form>
        <p>Explore Weather Forecasts</p>
        <h1>{inputCityName ? inputCityName : "Enter city name"}</h1>
      </div>
    </>
  );
};

export default Header;
