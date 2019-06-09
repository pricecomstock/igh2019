import React, { Component } from "react";
import "nes.css/css/nes.min.css";
import C from "./constants";

import Actions from "./components/Actions";
import Health from "./components/Health";

class App extends Component {
  state = {
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
    ],

    // GAME STATE
    game: {
      turnNumber: C.STARTING_TURN,
      points: C.STARTING_POINTS,

      maxHealth: C.STARTING_HEALTH,
      currentHealth: C.STARTING_HEALTH
    }
  };

  render() {
    return (
      <div className="App">
        <Actions actions={this.state.actions} />
        <Health
          maxHealth={this.state.game.maxHealth}
          currentHealth={this.state.game.currentHealth}
        />
        {this.state.game.points}
      </div>
    );
  }

  nextGameState = () => {
    const gameState = this.state.game;
    return {
      turnNumber: gameState.turnNumber + 1,
      points: gameState.points + 10,
      maxHealth: gameState.maxHealth,
      currentHealth: gameState.currentHealth
    };
  };

  gameStep = () => {
    this.setState({ game: this.nextGameState() });
  };

  componentDidMount() {
    this.gameInterval = setInterval(this.gameStep, C.TURN_MILLISECONDS);
  }

  componentWillMount() {
    clearInterval(this.gameInterval);
  }
}

export default App;
