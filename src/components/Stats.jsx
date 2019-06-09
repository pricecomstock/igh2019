import React, { Component } from "react";
import PropTypes from "prop-types";

class Stats extends Component {
  render() {
    let buttonStyle = {
      width: "100%",
      marginTop: "20px"
    };
    return (
      <div className="stats nes-container is-rounded with-title">
        <p className="title">Stats</p>
        <p>Average Global Temperature: {this.props.stats.temperature}C</p>
      </div>
    );
  }
}

// PropTypes
Stats.propTypes = { stats: PropTypes.array.isRequired };

export default Stats;
