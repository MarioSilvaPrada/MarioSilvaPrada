import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Greetings from './components/Greetings';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Greetings/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
