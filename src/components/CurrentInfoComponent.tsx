import styled from "@emotion/styled";

import { FC } from "react";

const MainFlexGroup = styled.div`
  text-align: center;
`;
const WeatherImg = styled.img`
  width: 80px;
`;
const TemperatureSpan = styled.span`
  font-size: 2rem;
`;
const WeatherConditionH2 = styled.h2`
  font-size: 1.3rem;
  line-height: 0.8;
`;
const WindValueWrapper = styled.div`
  margin-top: 2rem;
`;
const WindH4 = styled.h4`
  font-size: 0.7rem;
`;
const WindValueP = styled.p``;

const CurrentInfoComponent: FC<{
  temperatur: number;
  conditionHandler: (conditionImg?: boolean) => string;
  windSpeed: number;
  symbol: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
}> = ({ temperatur, symbol, windSpeed, conditionHandler }) => {
  return (
    <MainFlexGroup>
      <WeatherImg src={conditionHandler(true)} alt="weather-icon" />
      <TemperatureSpan>{`${temperatur}${symbol.temperature_2m}`}</TemperatureSpan>
      <WeatherConditionH2 className="weather-condition">
        {conditionHandler()}
      </WeatherConditionH2>
      <WindValueWrapper className="wind-value-wrapper">
        <WindH4>Wind</WindH4>
        <WindValueP className="wind-value">{`${windSpeed}${symbol.wind_speed_10m}`}</WindValueP>
      </WindValueWrapper>
    </MainFlexGroup>
  );
};

export default CurrentInfoComponent;
