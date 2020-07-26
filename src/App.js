import React, { Component } from 'react';
import ResultComponent from './components/Result/ResultComponent';
import KeypadComponent from './components/Keypad/KeypadComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  handleClick = (buttonType) => {
    console.log(buttonType);
    if (buttonType === '=') this.calculateResult();
    else if (buttonType === 'C') this.clearResult();
    else if (buttonType === 'CE') this.backspace();
    else {
      this.setState({
        result: this.state.result + buttonType,
      });
    }
  };

  calculateResult = () => {
    try {
      this.setState({
        result: eval(this.state.result) + '',
      });
    } catch (e) {
      this.setState({
        result: 'error',
      });
    }
  };

  clearResult = () => {
    this.setState({
      result: '0',
    });
  };

  backspace = () => {
    let equation = this.state.result;
    equation.slice(0, 1);
    this.setState({ result: equation });
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <ResultComponent result={this.state.result} />
        <KeypadComponent buttonClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
