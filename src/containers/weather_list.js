import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Googlemap from '../components/Googlemap'


class WeatherList extends React.Component {


  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((x) => x.main.temp);
    const pressures = cityData.list.map((x) => x.main.pressure);
    const humidities = cityData.list.map((x) => x.main.humidity);
    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={name}>
        <td><Googlemap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="red" units="K" /> </td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {

  return { weather };

}

export default connect(mapStateToProps)(WeatherList)