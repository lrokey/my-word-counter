import React, { Component } from 'react';
import logo from './logo.svg';
import { Adder } from './Adder.js';
import { Counter } from './Counter.js';
import { ProgressBar } from './ProgressBar.js';
import { Editor } from './Editor.js';
import { CountWords } from './helpers.js';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
	      	<Adder n1={5} n2={5} />
	      	<Counter count={2000} />
	      	<ProgressBar completion={.5} />
	      	<Editor text={"hi hi hi hi hi hi hi hi"} />
	    </div>
    );
  }
}

export default App;
