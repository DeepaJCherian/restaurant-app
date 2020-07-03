import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getDetails} from './actions';

class App extends Component {
    state ={
      city : "toronto",
      secondParameter: ""
    }

componentDidMount() {
  this.onSearch(this.state.city);
}

// Function called when search button is clicked.
onSearch = (city, secondParameter) => {
  this.props.getDetails(city,secondParameter);
}

render() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="sub-container-one">
          <input
            className="search-field-first"
            type="text"
            onChange={ev => this.setState({ city: ev.target.value })}
            placeholder="Enter the City"
            value={this.state.city}
          />
          <input
            className="search-field-second"
            type="text"
            onChange={ev => this.setState({ secondParameter: ev.target.value })}
            placeholder="Enter restaurant name"
            value={this.state.secondParameter}
          />
          <button
            className="search-button"
            type="button"
            onClick= {() => this.onSearch(this.state.city, this.state.secondParameter)}
          >Search</button>
        </div>
        <div className="sub-container-two">
          { 
            this.props.details.show &&
            <div className="flex-container">
              {this.props.details.data.restaurants.map((repo, index) => (
                <div className="restaurant-container" key={index}>
                  <a href={repo.reserve_url}>
                    <h3>{repo.name}</h3>
                  </a>
                  <h5>{repo.address}</h5>
                  <h5>{repo.area}</h5>
                  <h6>Price: {repo.price}</h6>
                  <h6>Dining </h6><span> <h6>Rating: 4.5</h6></span>
                </div>
              ))}
            </div>
          }  
        </div>
      </div>   
    </div>
  );
 }
}

const mapStatetoProps = (state, ownProps) => ({ details: state.details });
const mapDispatchtoProps = { getDetails };
export default connect(mapStatetoProps, mapDispatchtoProps)(App);
