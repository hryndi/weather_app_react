import { useState, useEffect } from "react";
import { TLocationResult, TCurrWeatherResult } from "./types";
type GeoType = {
  long: number;
  lat: number;
};
type CurrWethType = {
  time: string;
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  current_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
};

export const useWeatherApp = () => {
  const [cityName, setCityName] = useState("Weinheim");
  const [geoValue, setGeovalue] = useState<GeoType>({ long: 0, lat: 0 });
  const [currentWether, setCurrentWether] = useState<CurrWethType>({
    time: "",
    temperature_2m: 0,
    relative_humidity_2m: 0,
    wind_speed_10m: 0,
    current_units: {
      time: "",
      temperature_2m: "",
      relative_humidity_2m: "",
      wind_speed_10m: "",
    },
  });

  let weatherUrl: string = `https://api.open-meteo.com/v1/forecast?latitude=${geoValue.lat}&longitude=${geoValue.long}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max&timezone=Europe%2FBerlin`;
  const geoUrl: string = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    fetch(weatherUrl)
      .then((res) => res.json())
      .then((data: TCurrWeatherResult) => {
        console.log(data);
        setCurrentWether({
          time: data.current.time,
          temperature_2m: data.current.temperature_2m,
          relative_humidity_2m: data.current.relative_humidity_2m,
          wind_speed_10m: data.current.wind_speed_10m,
          current_units: data.current_units,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return { geoValue, currentWether, cityName, setCityName };
};
