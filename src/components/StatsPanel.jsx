import React, { Component } from "react";
import PropTypes from "prop-types";

import Health from "./Health";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getCo2Classes(co2) {
  let baseClasses = "nes-text";
  if (co2 < 350) {
    return baseClasses + " is-primary";
  } else if (co2 < 375) {
    return baseClasses + " is-success";
  } else if (co2 < 425) {
    return baseClasses + " is-warning";
  } else {
    return baseClasses + " is-error";
  }
}

function getTemperatureClasses(t) {
  let baseClasses = "nes-text";
  if (t < 57) {
    return baseClasses + " is-primary";
  } else if (t < 59) {
    return baseClasses + " is-success";
  } else if (t < 61) {
    return baseClasses + " is-warning";
  } else {
    return baseClasses + " is-error";
  }
}

class StatsPanel extends Component {
  render() {
    return (
      <div className="stats nes-container is-dark is-rounded with-title">
        <p className="title">Stats</p>

        <p>
          EARTH | {this.props.stats.year} - {this.props.stats.month}
        </p>

        <Health
          maxHealth={this.props.health.maxHealth}
          currentHealth={this.props.health.currentHealth}
        />
        <br />
        <p>
          Population: {numberWithCommas(this.props.stats.population)} humans
        </p>
        <p>
          Average Global Temperature:{" "}
          <span className={getTemperatureClasses(this.props.stats.temperature)}>
            {this.props.stats.temperature.toFixed(2)}° F
          </span>
        </p>
        <p>
          CO2:{" "}
          <span className={getCo2Classes(this.props.stats.co2)}>
            {this.props.stats.co2.toFixed(2)} ppm
          </span>
        </p>
        <p>
          <span className="nes-badge">
            BR: {this.props.stats.rates.birthRate.toFixed(1)}
          </span>
          <span className="nes-badge">
            DR: {this.props.stats.rates.deathRate.toFixed(1)}
          </span>
          <span className="nes-badge">
            Food: {(this.props.stats.rates.foodPercent * 100).toFixed(2)}%
          </span>
        </p>
      </div>
    );
  }
}

// PropTypes
StatsPanel.propTypes = { stats: PropTypes.object.isRequired };

export default StatsPanel;
