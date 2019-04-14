import React, { Component } from 'react';
import logo from './logo.svg';
import { Adder } from './Adder.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <Adder n1={5} n2={5} />
    );
  }
}

export default App;
