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
      foodPercent: C.STARTING_FOOD_PERCENT

      // modifiers: {
      //   foodPercent: null,
      //   temperature: null
      // },
    },
    cooldowns: {
      quake: 0,
      hurricane: 0,
      volcano: 0,
      drought: 0
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

  quake = () => {
    if (this.state.cooldowns.quake > 0) {
      return;
    }
    const nextGameState = this.nextGameState();
    this.tickCooldowns(24, 0, 0, 0);
    this.state.cooldowns.quake = 24;
    this.setState(nextGameState);
  };
  hurricane = () => {
    if (this.state.cooldowns.hurricane > 0) {
      return;
    }
    const nextGameState = this.nextGameState();
    this.tickCooldowns(0, 3, 0, 0);
    this.state.cooldowns.hurricane = 3;
    this.setState(nextGameState);
  };
  volcano = () => {
    if (this.state.cooldowns.volcano > 0) {
      return;
    }
    const nextGameState = this.nextGameState();
    this.tickCooldowns(0, 0, 36, 0);
    this.state.cooldowns.volcano = 36;
    this.setState(nextGameState);
  };
  drought = () => {
    if (this.state.cooldowns.drought > 0) {
      return;
    }
    const nextGameState = this.nextGameState();
    this.tickCooldowns(0, 0, 0, 60);
    this.state.cooldowns.drought = 60;
    this.setState(nextGameState);
  };

  tickCooldowns = (
    quakeChange,
    hurricaneChange,
    volcanoChange,
    droughtChange
  ) => {
    const cooldowns = {
      quake: Math.max(this.state.cooldowns.quake - 1 + quakeChange, 0),
      hurricane: Math.max(
        this.state.cooldowns.hurricane - 1 + hurricaneChange,
        0
      ),
      volcano: Math.max(this.state.cooldowns.volcano - 1 + volcanoChange, 0),
      drought: Math.max(this.state.cooldowns.drought - 1 + droughtChange, 0)
    };

    this.setState({ cooldowns });
  };

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
    this.tickCooldowns(0, 0, 0, 0);
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
