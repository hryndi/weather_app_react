// import styled from "@emotion/styled/macro";
import { useWeatherApp } from "./WeatherApp.hooks";
import InputComponent from "./components/InputComponent";
import DataComponent from "./components/DataComponent";
function App() {
  const { geoValue, currentWether } = useWeatherApp();
  return (
    <main>
      <InputComponent />
      <div>
        <div className="d-flex">
          <DataComponent value={currentWether.time} textValue="Request time" />
          <DataComponent
            className="mg-top"
            value={currentWether.temperature_2m}
            units={currentWether.current_units.temperature_2m}
            textValue="Current temperatur"
          />
        </div>
        <div className="d-flex">
          <DataComponent
            value={currentWether.relative_humidity_2m}
            units={currentWether.current_units.relative_humidity_2m}
            textValue="Current humidity value"
          />
          <DataComponent
            className="mg-top mg-left"
            value={currentWether.wind_speed_10m}
            units={currentWether.current_units.wind_speed_10m}
            textValue="Current text speed value"
          />
        </div>
      </div>
    </main>
  );
}

export default App;

{
  /* <p>Weather Coordinats: {`${geoValue.lat} || ${geoValue.long}`}</p> */
}
{
  /* <p>
        Current Weather:{" "}
        {`${currentWether.interval} || ${currentWether.relative_humidity_2m} || ${currentWether.temperature_2m} || ${currentWether.time} || ${currentWether.wind_speed_10m}`}
      </p> */
}
