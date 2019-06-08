import React, { Component } from "react";
import "nes.css/css/nes.min.css";

import Actions from "./components/Actions";

class App extends Component {
  state = {
    options: [
      {
        id: 1,
        text: "Attack",
        available: false
      },
      {
        id: 2,
        text: "Defend",
        available: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Actions options={this.state.options} />
        </header>
      </div>
    );
  }
}

export default App;
