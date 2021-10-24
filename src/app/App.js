
import './styles.css'
import React, { Component } from "react";
import { Button } from "./components/Button";
import { Output } from "./components/Output";
import { ClearButton } from "./components/ClearButton";
// import * as math from "math.js";
import * as math from "mathjs";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToOutput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  isClear = () =>{
    this.setState({input: ""});
  }

  render() {
    console.log(math)
    
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Output input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToOutput}>7</Button>
            <Button handleClick={this.addToOutput}>8</Button>
            <Button handleClick={this.addToOutput}>9</Button>
            <Button handleClick={this.addToOutput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToOutput}>4</Button>
            <Button handleClick={this.addToOutput}>5</Button>
            <Button handleClick={this.addToOutput}>6</Button>
            <Button handleClick={this.addToOutput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToOutput}>1</Button>
            <Button handleClick={this.addToOutput}>2</Button>
            <Button handleClick={this.addToOutput}>3</Button>
            <Button handleClick={this.addToOutput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToOutput}>.</Button>
            <Button handleClick={this.addToOutput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToOutput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.isClear}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;