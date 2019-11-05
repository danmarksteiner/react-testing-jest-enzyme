import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false
    };
    this.decrementCounter = this.decrementCounter.bind(this)
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter () {
    this.setState({ 
      counter: this.state.counter + 1,
      error: false
    })
  }
  
  decrementCounter () {
    this.state.counter <= 0 ? 
    this.setState({ error: true })
    :
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
          data-test="increment-button"
          onClick={this.incrementCounter}
        >
        Increment counter</button>
        <button
          data-test="decrement-button"
          onClick={this.decrementCounter}
        >
        Decrement Counter</button>
        <h2 data-test="counter-error" className={`errormessage-${this.state.error}`}>The counter cannot go below zero</h2>
      </div>
    );
  }
}

export default App;
