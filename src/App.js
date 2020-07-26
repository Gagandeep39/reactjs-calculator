import React, { Component } from 'react';
import ResultComponent from './components/Result/ResultComponent';
import KeypadComponent from './components/Keypad/KeypadComponent';
import './App.css';

class App extends Component {

  handleClick = (buttonType) => {
    console.log(buttonType);
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <ResultComponent />
        <KeypadComponent buttonClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
