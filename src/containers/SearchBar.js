import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions'

class SearchBar extends React.Component {
  state = { term: '' };


  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {

    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });

  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui input">
        <input
          onChange={this.onInputChange}
          type="text"
          placeholder="Search..."
          value={this.state.term}
        />
        <button className="ui button ">Search</button>
      </form>
    );
  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(mapDispatchToProps, { fetchWeather })(SearchBar);




