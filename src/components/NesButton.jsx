import React, { Component } from "react";
import PropTypes from "prop-types";

class NesButton extends Component {
  render() {
    return <button className="nes-btn">{this.props.text}</button>;
  }
}

// PropTypes
NesButton.propTypes = { text: PropTypes.string.isRequired };
export default NesButton;
