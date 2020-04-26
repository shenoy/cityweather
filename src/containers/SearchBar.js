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
      <div>
        <h2>Weather forecast for next 3 days in the USA</h2>
        <h4>Search from below or any city</h4>
        <p>
          {" "}
          Alabama (AL) - Montgomery Alaska (AK) - Juneau Arizona (AZ) - Phoenix
          Arkansas (AR) - Little Rock California (CA) - Sacramento Colorado (CO)
          - Denver Connecticut (CT) - Hartford Delaware (DE) - Dover Florida
          (FL) - Tallahassee Georgia (GA) - Atlanta Hawaii (HI) - Honolulu Idaho
          (ID) - Boise Illinois (IL) - Springfield Indiana (IN) - Indianapolis
          Iowa (IA) - Des Moines Kansas (KS) - Topeka Kentucky (KY) - Frankfort
          Louisiana (LA) - Baton Rouge Maine (ME) - Augusta Maryland (MD) -
          Annapolis Massachusetts (MA) - Boston Michigan (MI) - Lansing
          Minnesota (MN) - St. Paul Mississippi (MS) - Jackson Missouri (MO) -
          Jefferson City Montana (MT) - Helena Nebraska (NE) - Lincoln Nevada
          (NV) - Carson City New Hampshire (NH) - Concord New Jersey (NJ) -
          Trenton New Mexico (NM) - Santa Fe New York (NY) - Albany North
          Carolina (NC) - Raleigh North Dakota (ND) - Bismarck Ohio (OH) -
          Columbus Oklahoma (OK) - Oklahoma City Oregon (OR) - Salem
          Pennsylvania (PA) - Harrisburg Rhode Island (RI) - Providence South
          Carolina (SC) - Columbia South Dakota (SD) - Pierre Tennessee (TN) -
          Nashville Texas (TX) - Austin Utah (UT) - Salt Lake City Vermont (VT)
          - Montpelier Virginia (VA) - Richmond Washington (WA) - Olympia West
          Virginia (WV) - Charleston Wisconsin (WI) - Madison Wyoming (WY) -
          Cheyenne{" "}
        </p>
        <form onSubmit={this.onFormSubmit} className="ui input">
          <input
            onChange={this.onInputChange}
            type="text"
            placeholder="Search..."
            value={this.state.term}
          />
          <button className="ui button ">Search</button>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(mapDispatchToProps, { fetchWeather })(SearchBar);




