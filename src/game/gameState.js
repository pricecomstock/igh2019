import constants from "./constants";

export class GameState {
  constructor(updateCallback) {
    this.maxHealth = constants.STARTING_HEALTH;
    this.currentHealth = constants.STARTING_HEALTH - 1;
    this.turnNumber = constants.STARTING_TURN;
    this.points = constants.STARTING_POINTS;

    this.turnInterval = setInterval(() => {
      this.turnStep();
    }, constants.TURN_MILLISECONDS);

    this.updateCallback = updateCallback;
  }

  turnStep() {
    this.turnNumber += 1;
    this.points += 1;
    this.updateCallback();
    console.log("turn step");
  }

  get state() {
    return {
      maxHealth: this.maxHealth,
      currentHealth: this.currentHealth,
      turnNumber: this.turnNumber,
      points: this.points
    };
  }
}

export default GameState;
