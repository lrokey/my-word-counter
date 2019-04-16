import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		howManyWords: "",
  		secondValue: "",
  		needWords: "",
  		wordCount: "",
  		limWords: null
  	}
  	this.firstHandle = this.firstHandle.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  	this.secondHandle = this.secondHandle.bind(this);
  }

  firstHandle(e) {
  	this.setState({
  		howManyWords: e.target.value
  	});
  }

  handleSubmit(e) {
  	e.preventDefault();
  	this.setState ({
  		needWords: this.state.howManyWords,
  		secondValue: ""
  	});
  }

  secondHandle(event) {
  	console.log("pp", this.state.needWords, this.state.wordCount);
  	const wordCount = event.target.value === "" ? 0 : event.target.value.split(" ").length;
  	this.setState({
  		secondValue: event.target.value,
  		wordCount: wordCount,
  		limWords: this.state.needWords - wordCount < 0 ? this.state.secondValue.length : null
  	});
  }

  render() {
  	let result = this.state.needWords - this.state.wordCount;
  	let tooManyWords;
  	if (result < 0) {
  		const tooManyWordsStyle = {
  			color: "red"
  		};
  		tooManyWords = (
  			<p style={tooManyWordsStyle}>
  				You exceeded the maximum number of words!
  			</p>
  		);
  	}
    return (
    	<div>
    		<form onSubmit={this.handleSubmit}>
    			<p>How many words do you have to write?</p>
    			<input
    				type="text"
    				value={this.state.howManyWords}
    				onChange={this.firstHandle}
    			/>
    			<button type="submit">Go</button>
    		</form>
    		<form>
    			<p>You still have to write {result} words!</p>
    			<textarea
    				type="text"
    				value={this.state.secondValue}
    				onChange={this.secondHandle}
    				maxLength={this.state.limWords}
    			/>
    			{tooManyWords}
    		</form>
	    </div>
    );
  }
}

export default App;
