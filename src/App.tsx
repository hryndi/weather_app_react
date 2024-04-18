import styled from "@emotion/styled";
import InputComponent from "./components/InputComponent";
import CurrentInfoComponent from "./components/CurrentInfoComponent";
import TableComponent from "./components/TableComponent";
import StateTimeComponent from "./components/StateTimeComponent";
import { useWeatherApp } from "./WeatherApp.hooks";

const Main = styled.main`
  padding: 1.5rem;
  /* border: orange 1px solid; */
  display: grid;
  gap: 2.5rem;
  justify-items: center;
  /* max-width: 100svh; */
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
