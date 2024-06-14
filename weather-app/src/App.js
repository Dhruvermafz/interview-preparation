import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import GlobalStyle from "./globalStyles";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("Current Location");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`
      );
      setWeatherData({
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind_speed: response.data.wind.speed,
        description: response.data.weather[0].description,
      });
      setLocation(response.data.name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header
        location={location}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weatherData={weatherData} />
    </ThemeProvider>
  );
};

export default App;
