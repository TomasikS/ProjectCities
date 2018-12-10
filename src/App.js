import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cities from './CITY/Cities';

class App extends Component {
	
	state={cities:[{city:'Kosice', country: 'SK'}, {city:'Praha', country: 'CZ'},
	{city:'Brno', country: 'CZ'}
	]
};
	
	
	
	
	
	
  render() {
    return (
     < Cities list= {this.state.cities} />
    );
  }
}

export default App;
