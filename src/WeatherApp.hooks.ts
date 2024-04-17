import { useState, useEffect } from "react";
import { TLocationResult, TCurrWeatherResult } from "./types";
import MainlyClearImg from "/mainly-clear.png";
import OvercastImg from "/overcast.png";
import PartCloudyImg from "/partly-cloudy.png";
import { Root } from "./weather_api.types";

type GeoType = {
  long: number;
  lat: number;
};
type CurrWethType = {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  weather_code: number;
  current_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
};

export interface WeaklyWether {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  daily_units: {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
}

export const useWeatherApp = () => {
  const [cityName, setCityName] = useState("Weinheim");
  const [geoValue, setGeovalue] = useState<GeoType>({ long: 0, lat: 0 });

  const [renderedCityName, setRenderedCityName] = useState<string>(cityName);

  const [currentWether, setCurrentWether] = useState<CurrWethType>({
    time: "",
    temperature_2m: 0,
    relative_humidity_2m: 0,
    wind_speed_10m: 0,
    weather_code: 0,
    current_units: {
      time: "",
      temperature_2m: "",
      relative_humidity_2m: "",
      wind_speed_10m: "",
    },
  });
  const [weaklyWether, setWeaklyWether] = useState<WeaklyWether>({
    time: [],
    weather_code: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
    daily_units: {
      time: "",
      weather_code: "",
      temperature_2m_max: "",
      temperature_2m_min: "",
    },
  });

  const currWeatherUrl: string = `https://api.open-meteo.com/v1/forecast?latitude=${geoValue.lat}&longitude=${geoValue.long}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=Europe%2FBerlin`;
  const weatherForecastUrl: string = `https://api.open-meteo.com/v1/forecast?latitude=${geoValue.lat}&longitude=${geoValue.long}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`;
  const geoUrl: string = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;

  function fetchWeather() {
    fetch(currWeatherUrl)
      .then((res) => res.json())
      .then((data: TCurrWeatherResult) => {
        setCurrentWether({
          time: data.current.time,
          temperature_2m: data.current.temperature_2m,
          relative_humidity_2m: data.current.relative_humidity_2m,
          wind_speed_10m: data.current.wind_speed_10m,
          weather_code: data.current.weather_code,
          current_units: data.current_units,
        });
      })
      .catch((err) => console.error(err));

    fetch(weatherForecastUrl)
      .then((res) => res.json())
      .then((data: Root) => {
        setWeaklyWether({
          time: data.daily.time,
          weather_code: data.daily.weather_code,
          temperature_2m_max: data.daily.temperature_2m_max,
          temperature_2m_min: data.daily.temperature_2m_min,
          daily_units: {
            time: data.daily_units.time,
            weather_code: data.daily_units.weather_code,
            temperature_2m_max: data.daily_units.temperature_2m_max,
            temperature_2m_min: data.daily_units.temperature_2m_min,
          },
        });
      });
  }

  const fetchGeo = () =>
    fetch(geoUrl)
      .then((res) => res.json())
      .then((data: TLocationResult) => {
        console.log(data);
        setGeovalue({
          long: data.results[0].longitude,
          lat: data.results[0].latitude,
        });
      })
      .catch((err) => console.error(err));

  useEffect(() => {
    fetchWeather();
  }, [geoValue]);

  useEffect(() => {
    fetchGeo();
  }, []);

  const submitHandler = () => {
    fetchGeo();
    const sanitizedCity = cityName
      .split(" ")
      .map(
        (cityString) =>
          cityString[0].toUpperCase() + cityString.slice(1).toLowerCase()
      )
      .join(" ");
    setRenderedCityName(sanitizedCity);
    setCityName(sanitizedCity);
  };

  const conditionHandler = (conditionImg?: boolean) => {
    const condition = currentWether.weather_code;

    if (condition === 1) {
      return conditionImg ? MainlyClearImg : "Mainly clear";
    }
    if (condition === 2) {
      return conditionImg ? PartCloudyImg : "partly cloudy";
    }
    if (condition === 3) {
      return conditionImg ? OvercastImg : "overcast";
    }
    return "select city";
  };

  return {
    geoValue,
    renderedCityName,
    currentWether,
    cityName,
    setCityName,
    submitHandler,
    conditionHandler,
    weaklyWether,
  };
};
