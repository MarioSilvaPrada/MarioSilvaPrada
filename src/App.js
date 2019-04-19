import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Greetings from './components/Greetings'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Greetings/>
      </div>
    );
  }
}

export default App;
