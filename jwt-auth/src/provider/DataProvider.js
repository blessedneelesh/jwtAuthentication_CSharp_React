import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const DataContext = createContext();

const API_URL = "https://localhost:7051/api/";

const DataProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const getWeather = () => {
    console.log("heello");
    return axios
      .get(API_URL + "WeatherForecast/Get", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => response.data);
  };

  const contextValue = useMemo(() => ({ getWeather }), []);

  // Provide the authentication context to the children components
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
