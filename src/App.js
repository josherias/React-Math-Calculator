import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends React.Component {
  state = {
    input: "",
  };

  handleInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  handleClear = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button updateInput={this.handleInput}>7</Button>
            <Button updateInput={this.handleInput}>8</Button>
            <Button updateInput={this.handleInput}>9</Button>
            <Button updateInput={this.handleInput}>/</Button>
          </div>

          <div className="row">
            <Button updateInput={this.handleInput}>4</Button>
            <Button updateInput={this.handleInput}>5</Button>
            <Button updateInput={this.handleInput}>6</Button>
            <Button updateInput={this.handleInput}>X</Button>
          </div>

          <div className="row">
            <Button updateInput={this.handleInput}>1</Button>
            <Button updateInput={this.handleInput}>2</Button>
            <Button updateInput={this.handleInput}>3</Button>
            <Button updateInput={this.handleInput}>+</Button>
          </div>

          <div className="row">
            <Button updateInput={this.handleInput}>.</Button>
            <Button updateInput={this.handleInput}>0</Button>
            <Button updateInput={this.handleEqual}>=</Button>
            <Button updateInput={this.handleInput}>-</Button>
          </div>
          <ClearButton clearItems={this.handleClear}>Clear</ClearButton>
        </div>
      </div>
    );
  }
}

export default App;
