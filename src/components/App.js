import React from 'react';

import SearchBar from '../containers/SearchBar'

import WeatherList from '../containers/weather_list'



class App extends React.Component {
  render() {

    return (
      <div className="ui container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}



export default App; 