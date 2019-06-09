import constants from "../constants";

export class GameState {
  constructor() {
    this.maxHealth = constants.STARTING_HEALTH;
    this.currentHealth = constants.STARTING_HEALTH - 1;
    this.turnNumber = constants.STARTING_TURN;
    this.points = constants.STARTING_POINTS;

    this.turnInterval = setInterval(() => {
      this.turnStep();
    }, constants.TURN_MILLISECONDS);
  }

  turnStep() {
    this.turnNumber += 1;
    this.points += 1;
    console.log("turn step");
  }
}

export default GameState;
