import React, { Component } from "react";
import "nes.css/css/nes.min.css";

import GameState from "./game/gameState";

import Actions from "./components/Actions";
import Health from "./components/Health";

class App extends Component {
  state = {
    gameState: new GameState(),
    actions: [
      {
        id: 1,
        text: "Attack",
        disabled: false,
        clickHandler: () => alert("Attack")
      },
      {
        id: 2,
        text: "Defend",
        disabled: false,
        clickHandler: () => alert("Defend")
      },
      {
        id: 3,
        text: "Run",
        disabled: false,
        clickHandler: () => alert("Run")
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Actions actions={this.state.actions} />
        <Health
          maxHealth={this.state.gameState.maxHealth}
          currentHealth={this.state.gameState.currentHealth}
        />
        {this.state.gameState.points}
      </div>
    );
  }
}

export default App;
