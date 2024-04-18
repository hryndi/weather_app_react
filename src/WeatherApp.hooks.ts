import { useState, useEffect } from "react";
import { TLocationResult, TCurrWeatherResult } from "./types";
import { Root } from "./weather_api.types";

import MainlyClearImg from "/sun.png";
import OvercastImg from "/mostly-cloudy.jpg";
import PartCloudyImg from "/cloudy-sky-with-sun.png";
import DizzyImg from "/dizzy.png";
import RainyImg from "/rainy.png";
import HazeImg from "/haze.png";
import SnowyImg from "/snowfall.png";

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

  const conditionHandler = (condition: number, conditionImg?: boolean) => {
    if (condition === 1) {
      return conditionImg ? MainlyClearImg : "Mainly clear";
    }
    if (condition === 2) {
      return conditionImg ? PartCloudyImg : "Partly cloudy";
    }
    if (condition === 3) {
      return conditionImg ? OvercastImg : "Overcast";
    }
    if (condition === 0) {
      return conditionImg ? MainlyClearImg : "Clear sky";
    }
    if (condition === 45 || condition === 48) {
      return conditionImg ? HazeImg : "Fog";
    }
    if (condition === 51 || condition === 53 || condition === 55) {
      return conditionImg ? DizzyImg : "Drizzle";
    }
    if (condition === 80 || condition === 81 || condition === 82) {
      return conditionImg ? RainyImg : "Rainy";
    }
    if (condition === 71 || condition === 73 || condition === 75) {
      return conditionImg ? SnowyImg : "Snowy";
    }
    if (condition === 85 || condition === 86) {
      return conditionImg ? SnowyImg : "Snowy";
    }
    return "select city";
  };

  const dateHandler = (weaklyWether: string) => {
    const date = new Date(weaklyWether);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear());
    const today = `${mm}/${dd}/${yyyy}`;
    return today;
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
    dateHandler,
  };
};
