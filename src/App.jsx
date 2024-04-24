import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import CityContextProvider from "./store/CityContext";
function App() {
  return (
    <CityContextProvider>
      <div id="hero">
        <Header></Header>
        <WeatherCard></WeatherCard>
      </div>
    </CityContextProvider>
  );
}

export default App;
