import axios from 'axios';

const API_KEY = '0ac87fba5d8fd8fb44b1bb53ed3bdfce';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`



export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {

  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}

