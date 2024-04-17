import styled from "@emotion/styled";
import InputComponent from "./components/InputComponent";
import CurrentInfoComponent from "./components/CurrentInfoComponent";
import TableComponent from "./components/TableComponent";
import StateTimeComponent from "./components/StateTimeComponent";
import { useWeatherApp } from "./WeatherApp.hooks";

const Main = styled.main`
  border: orange 1px solid;
  display: grid;
  gap: 1.5rem;
  justify-items: center;
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
  } = useWeatherApp();

  return (
    <Main>
      <InputComponent
        cityName={cityName}
        setCityName={setCityName}
        submitHandler={submitHandler}
      />
      <StateTimeComponent
        cityName={renderedCityName}
        time={currentWether.time}
      />
      <CurrentInfoComponent
        temperatur={currentWether.temperature_2m}
        symbol={currentWether.current_units}
        windSpeed={currentWether.wind_speed_10m}
        conditionHandler={conditionHandler}
      />
      <TableComponent weaklyWether={weaklyWether} />
    </Main>
  );
}
