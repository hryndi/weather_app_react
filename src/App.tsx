import styled from "@emotion/styled";
import InputComponent from "./components/InputComponent";
import CurrentInfoComponent from "./components/CurrentInfoComponent";
import TableComponent from "./components/TableComponent";
import StateTimeComponent from "./components/StateTimeComponent";
import { useWeatherApp } from "./WeatherApp.hooks";

const Main = styled.main`
  justify-items: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1.5rem;
  /* background-color: #667989; */
  @media (min-width: 600px) and (min-height: 700px) {
    justify-content: center;
  }
  @media (max-width: 600px) or (max-height: 700px) {
    padding: 20px;
  }
`;

export default function App() {
  const {
    currentWether,
    submitHandler,
    cityName,
    setCityName,
    renderedCityName,
    conditionHandler,
    weaklyWether,
    dateHandler,
  } = useWeatherApp();

  return (
    <Main>
      <InputComponent
        cityName={cityName}
        setCityName={setCityName}
        submitHandler={submitHandler}
      />
      <StateTimeComponent
        dateHandler={dateHandler}
        cityName={renderedCityName}
        time={currentWether.time}
      />
      <CurrentInfoComponent
        temperatur={currentWether.temperature_2m}
        symbol={currentWether.current_units}
        windSpeed={currentWether.wind_speed_10m}
        currentWetherCode={currentWether.weather_code}
        conditionHandler={conditionHandler}
      />
      <TableComponent
        conditionHandler={conditionHandler}
        weaklyWether={weaklyWether}
        dateHandler={dateHandler}
      />
    </Main>
  );
}
