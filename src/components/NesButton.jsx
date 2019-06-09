import React, { Component } from "react";
import PropTypes from "prop-types";

class NesButton extends Component {
  render() {
    let classes = "nes-btn ";
    if (this.props.isDisabled) {
      classes += "is-disabled";
    }
    const { text, clickHandler } = this.props.action;
    return (
      <button onClick={clickHandler} className={classes}>
        {text}
      </button>
    );
  }
}

// PropTypes
NesButton.propTypes = {
  action: PropTypes.object.isRequired
  //   text: PropTypes.string.isRequired,
  //   disabled: PropTypes.bool,
  //   clickHandler: PropTypes.func.isRequired
};
export default NesButton;
