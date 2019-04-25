import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Greetings from './components/Greetings';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Greetings />
        <AboutMe />
        <Portfolio />
        <Technologies />
      </div>
    );
  }
}

export default App;
