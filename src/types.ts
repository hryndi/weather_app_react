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

export type TCurrWeatherResult = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
  };
};
