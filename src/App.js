import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Greetings from './components/Greetings';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio';
import Development from './components/Development';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Greetings />
        <AboutMe />
        <Portfolio />
        <Development />
        <Contact />
      </div>
    );
  }
}

export default App;
