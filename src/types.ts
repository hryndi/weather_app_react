import { TWeatherResponse } from "./weather_api.types";

export type TLocationResult = {
  results: [
    {
      id: number;
      name: string;
      latitude: number;
      longitude: number;
      elevation: number;
      feature_code: string;
      country_code: string;
      admin1_id: number;
      admin2_id: number;
      admin3_id: number;
      admin4_id: number;
      timezone: string;
      population: number;
      country_id: number;
      country: string;
      admin1: string;
      admin2: string;
      admin3: string;
      admin4: string;
    }
  ];
  generationtime_ms: number;
};

export type TCurrWeatherResult = TWeatherResponse;
