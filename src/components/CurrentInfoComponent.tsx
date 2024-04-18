import styled from "@emotion/styled";
import WindSpeedImg from "/wind-speed.jpg";
import { FC } from "react";

const MainFlexGroup = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1rem;
`;
const WeatherImg = styled.img`
  width: 80px;
`;
const TemperatureSpan = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;
const WeatherConditionH2 = styled.h2`
  color: hsl(208.69565217391306, 15.032679738562093%, 30%);
  font-size: 1.2rem;
  line-height: 0.8;
  font-weight: 500;
`;
const WindValueWrapper = styled.div`
  margin-top: 1.8rem;
  font-size: 1.1rem;
  font-weight: 500;
`;
const WindH4 = styled.h4`
  font-size: 1rem;
  line-height: 1;
`;
const WindValueP = styled.p`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const WindImg = styled.img`
  width: 40px;
`;

const CurrentInfoComponent: FC<{
  temperatur: number;
  currentWetherCode: number;
  conditionHandler: (conditionCode: number, conditionImg?: boolean) => string;
  windSpeed: number;
  symbol: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
}> = ({
  currentWetherCode,
  temperatur,
  symbol,
  windSpeed,
  conditionHandler,
}) => {
  return (
    <MainFlexGroup>
      <WeatherImg
        src={conditionHandler(currentWetherCode, true)}
        alt="weather-icon"
      />
      <TemperatureSpan>{`${parseInt(`${temperatur}`)}${
        symbol.temperature_2m
      }`}</TemperatureSpan>
      <WeatherConditionH2 className="weather-condition">
        {conditionHandler(currentWetherCode)}
      </WeatherConditionH2>
      <WindValueWrapper className="wind-value-wrapper">
        <WindH4>Wind</WindH4>
        <WindValueP className="wind-value">
          <WindImg src={WindSpeedImg} alt="" />
          {`${windSpeed}${symbol.wind_speed_10m}`}
        </WindValueP>
      </WindValueWrapper>
    </MainFlexGroup>
  );
};

export default CurrentInfoComponent;
