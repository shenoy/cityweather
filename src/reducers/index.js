import { combineReducers } from 'redux';
import WeatherReducer from './reduce_weather';


export default combineReducers({
  weather: WeatherReducer
});