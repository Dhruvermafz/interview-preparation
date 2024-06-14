import React from "react";
import styled from "styled-components";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;
  const { temp, humidity, wind_speed, description } = weatherData;
  return (
    <WeatherContainer>
      <Temp>{temp}°C</Temp>
      <Description>{description}</Description>
      <AdditionalInfo>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {wind_speed} m/s</p>
      </AdditionalInfo>
    </WeatherContainer>
  );
};

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.weatherBg};
  color: ${(props) => props.theme.weatherText};
  padding: 20px;
  border-radius: 10px;
`;

const Temp = styled.div`
  font-size: 4rem;
`;

const Description = styled.div`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const AdditionalInfo = styled.div`
  font-size: 1rem;
`;

export default WeatherDisplay;
