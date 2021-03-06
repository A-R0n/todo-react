import React, { Component } from 'react';
import './App.css';
import List from "./List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      emptyList: [],
      textBox: "",
      people: []
    };
    this.eventHandler = this.eventHandler.bind(this);
    // this.displayText = this.displayText.bind(this);
    this.displayMoreText = this.displayText.bind(this);
  }

  eventHandler(event) {
      this.setState({ textBox: event })
  }

  displayText() {
    let emptyList = this.state.emptyList;
    emptyList.push(this.state.textBox);
    this.setState({ emptyList: emptyList })
  }

  displayMoreText = (e) => {
    this.setState({textBox : e})
  }

  // componentDidMount() {
  //   let promise = axios.get('https://swapi.co/people/');
  // }

  

  render() {
const map = this.state.emptyList.map((val, i) => {
  return <li key={i}>{val}</li>;
});

    return (
      <div className="App">
      <input className="TextField" type="text" value= {this.state.textBox} onChange={(e) => this.eventHandler(e.target.value)}></input>
      <button className="ListOfItems" placeholder="click" onClick={(e) => this.displayText(this.textBox)}></button>
      <ul>{map}</ul>
      <List eventHandler ={(e) => this.displayMoreText(this.e.target.value)} textBox={this.state.textBox}/>
      </div>
    );
  }
}

export default App;
