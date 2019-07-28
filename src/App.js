import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Greetings from "./components/Greetings/Greetings";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Development from "./components/Development/Development";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingButton from "./styles/button/FloatingButton";

class App extends Component {
  state = {
    position: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = window.pageYOffset;

    this.setState({
      position: winScroll
    });
  };

  render() {
    const { position } = this.state;

    let floatbtn = position > 50 ? <FloatingButton /> : "";

    return (
      <div className="App">
        {floatbtn}
        <Header />
        <Greetings />
        <AboutMe />
        <Development />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
