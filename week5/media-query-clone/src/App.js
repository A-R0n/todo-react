import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.js';
import Contact from './Components/Contact';
import Team from './Components/Team';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';

class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="bod">
          <img class="image" src="https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg"></img>
          <body className="words">
            <p id="welcome">Welcome To Our Studio!</p>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button id="b">TELL ME MORE</button>
          </body>
        </div>
        <Contact />
        <Team />
        <About />
        <Portfolio />
        <Services />   
      </div>
    );
  }
}

export default App;
