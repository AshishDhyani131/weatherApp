import { createContext, useState } from "react";

export const CityContext = createContext({
  inputCityName: "",
  setCityName: null,
});
function CityContextProvider({ children }) {
  const [cityInput, setCityInput] = useState("");

  const cityCtx = {
    inputCityName: cityInput,
    setCityName: setCityInput,
  };
  return (
    <CityContext.Provider value={cityCtx}>{children}</CityContext.Provider>
  );
}
export default CityContextProvider;
