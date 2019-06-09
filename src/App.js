import React, { Component } from "react";
import "nes.css/css/nes.min.css";
import "./App.css";

import C from "./game/constants";
import { quake, hurricane, volcano, drought } from "./game/actions";

import {
  getMonth,
  calculatePopulation,
  calculateBirthrate,
  calculateDeathrate,
  calculateFoodPercent,
  calculateCo2,
  calculateTemperature
} from "./game/calculations";

import ActionsPanel from "./components/ActionsPanel";
import ActivityLog from "./components/ActivityLog";
import StatsPanel from "./components/StatsPanel";
import EarthView from "./components/EarthView";

class App extends Component {
  state = {
    actions: [quake, hurricane, volcano, drought],
    activityLog: [],

    // GAME STATE
    game: {
      turnNumber: C.STARTING_TURN,
      points: C.STARTING_POINTS,

      population: C.STARTING_POPULATION,
      co2: C.STARTING_CO2_PPM,
      temperature: C.STARTING_TEMP_C,
      year: C.STARTING_YEAR,

      maxHealth: C.STARTING_HEALTH,
      currentHealth: C.STARTING_HEALTH,

      birthRate: C.STARTING_BIRTHRATE_1000,
      deathRate: C.STARTING_DEATHRATE_1000,
      foodPercent: C.STARTING_FOOD_PERCENT,

      modifiers: {
        foodPercent: null,
        temperature: null
      },

      nextTick: []
    }
  };

  addActions = () => {
    quake.clickHandler = this.quake;
    hurricane.clickHandler = this.hurricane;
    volcano.clickHandler = this.volcano;
    drought.clickHandler = this.drought;
    this.setState({
      actions: [quake, hurricane, volcano, drought]
    });
  };

  componentWillMount() {
    this.addActions();
  }

  render() {
    let displayStats = {
      year: this.state.game.year,
      co2: this.state.game.co2,
      population: this.state.game.population,
      temperature: this.state.game.temperature,
      month: this.state.game.month,

      rates: {
        birthRate: this.state.game.birthRate,
        deathRate: this.state.game.deathRate,
        foodPercent: this.state.game.foodPercent
      }
    };

    let health = {
      maxHealth: this.state.game.maxHealth,
      currentHealth: this.state.game.currentHealth
    };

    return (
      <div className="App grid-container">
        {/* <Health
          maxHealth={this.state.game.maxHealth}
          currentHealth={this.state.game.currentHealth}
        />
        {this.state.game.points} */}
        <EarthView />
        <ActionsPanel actions={this.state.actions} />
        <StatsPanel stats={displayStats} health={health} />
        <ActivityLog log={this.state.activityLog} />
      </div>
    );
  }

  quake = () => {};
  hurricane = () => {};
  volcano = () => {};
  drought = () => {};

  nextGameState = () => {
    const gameState = this.state.game;
    return {
      turnNumber: gameState.turnNumber + 1,
      points: gameState.points + 10,
      maxHealth: gameState.maxHealth,
      currentHealth: gameState.currentHealth,

      population: calculatePopulation(
        gameState.population,
        gameState.birthRate,
        gameState.deathRate
      ),
      co2: calculateCo2(gameState.co2, gameState.population),
      temperature: calculateTemperature(gameState.temperature, gameState.co2),
      year: C.STARTING_YEAR + Math.floor(gameState.turnNumber / 12),
      month: getMonth(gameState.turnNumber % 12),

      birthRate: calculateBirthrate(gameState.birthRate, gameState.foodPercent),
      deathRate: calculateDeathrate(gameState.deathRate, gameState.foodPercent),
      foodPercent: calculateFoodPercent(
        gameState.foodPercent,
        gameState.temperature
      )
    };
  };

  gameStep = () => {
    this.setState({ game: this.nextGameState() });
  };

  componentDidMount() {
    this.gameInterval = setInterval(this.gameStep, C.TURN_MILLISECONDS);
  }

  componentWillUnmount() {
    clearInterval(this.gameInterval);
  }
}

export default App;
