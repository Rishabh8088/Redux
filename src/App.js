import React, { Component } from "react";

import "./App.css";
import Counter from "./Containers/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
