import React, { Component } from "react";
import PropTypes from "prop-types";

class NesButton extends Component {
  //   getClass = () => {
  //     return {
  //       "is-disabled": this.props.disabled
  //     };
  //   };
  render() {
    const { text, clickHandler } = this.props.action;
    return (
      <button onClick={clickHandler} className="nes-btn">
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
