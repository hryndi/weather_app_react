import { useWeatherApp } from "../WeatherApp.hooks";

const InputComponent = () => {
  const { setCityName, cityName } = useWeatherApp();
  console.log(cityName);
  return (
    <form action="">
      <input
        type="text"
        onChange={(item) => setCityName(item.target.value)}
        value={cityName}
      />
    </form>
  );
};

export default InputComponent;
