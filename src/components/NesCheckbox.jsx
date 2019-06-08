import React, { Component } from "react";
import PropTypes from "prop-types";

class NesCheckbox extends Component {
  getClass = () => {
    return {
      "is-disabled": this.props.disabled
    };
  };
  render() {
    return (
      <input type="checkbox" name="toggle" id="toggle" onChange={}>
        {this.props.text}
      </input>
    );
  }
}

// PropTypes
NesButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
export default NesCheckbox;
