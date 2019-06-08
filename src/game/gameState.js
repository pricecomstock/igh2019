import constants from "../constants";

export class GameState {
  constructor() {
    this.maxHealth = constants.STARTING_HEALTH;
    this.currentHealth = constants.STARTING_HEALTH - 1;
  }
}

export default GameState;
