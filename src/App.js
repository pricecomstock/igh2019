import React, { Component } from "react";
import "nes.css/css/nes.min.css";
import "./App.css";

import C from "./game/constants";
import actions from "./game/actions";

import ActionsPanel from "./components/ActionsPanel";
import Stats from "./components/Stats";
import Health from "./components/Health";

class App extends Component {
  state = {
    actions: actions,

    // GAME STATE
    game: {
      turnNumber: C.STARTING_TURN,
      points: C.STARTING_POINTS,

      population: C.STARTING_POPULATION,
      co2: C.STARTING_CO2_PPM,
      temperature: C.STARTING_TEMP_C,
      year: C.STARTING_YEAR,

      maxHealth: C.STARTING_HEALTH,
      currentHealth: C.STARTING_HEALTH
    }
  };

  render() {
    let displayStats = {
      year: this.state.game.year,
      co2: this.state.game.co2,
      population: this.state.game.population,
      temperature: this.state.game.temperature
    };
    return (
      <div className="App grid-container">
        {/* <Health
          maxHealth={this.state.game.maxHealth}
          currentHealth={this.state.game.currentHealth}
        />
        {this.state.game.points} */}
        <ActionsPanel actions={this.state.actions} />
        <Stats stats={displayStats} />
      </div>
    );
  }

  nextGameState = () => {
    const gameState = this.state.game;
    return {
      turnNumber: gameState.turnNumber + 1,
      points: gameState.points + 10,
      maxHealth: gameState.maxHealth,
      currentHealth: gameState.currentHealth,

      population: gameState.population,
      co2: gameState.co2,
      temperature: gameState.temperature,
      year: gameState.year
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
