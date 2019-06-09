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
    let buttonStyle = {
      width: "100%",
      marginTop: "20px"
    };
    return (
      <div className="stats nes-container is-dark is-rounded with-title">
        <p className="title">Stats</p>

        <p>EARTH</p>

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
            {this.props.stats.temperature}° F
          </span>
        </p>
        <p>
          CO2:{" "}
          <span className={getCo2Classes(this.props.stats.co2)}>
            {this.props.stats.co2} ppm
          </span>
        </p>
      </div>
    );
  }
}

// PropTypes
StatsPanel.propTypes = { stats: PropTypes.object.isRequired };

export default StatsPanel;
