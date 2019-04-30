import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Greetings from './components/Greetings';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio';
import Development from './components/Development';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/button/FloatingButton';



class App extends Component {

  state = {
    position: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = window.pageYOffset
  
    this.setState({
      position: winScroll,
    })
  }

  render() {

    const { position } = this.state;

    let floatbtn = position > 50 ? <FloatingButton /> : '';

    return (
      <div className="App">
        {floatbtn}
        <Header />
        <Greetings />
        <AboutMe />
        <Portfolio />
        <Development />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
