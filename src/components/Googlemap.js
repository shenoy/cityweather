import React from 'react';

class Googlemap extends React.Component {

  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.long
      }
    });
  }
  render() {
    return (
      <div ref="map" />
    );
  }
}

export default Googlemap;