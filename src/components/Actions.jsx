import React, { Component } from "react";
import NesButton from "./NesButton";
import PropTypes from "prop-types";

class Actions extends Component {
  render() {
    return this.props.options.map(opt => (
      <NesButton key={opt.id} text={opt.text} />
    ));
  }
}

// PropTypes
Actions.propTypes = { options: PropTypes.array.isRequired };

export default Actions;
