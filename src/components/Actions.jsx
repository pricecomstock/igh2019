import React, { Component } from "react";
import NesButton from "./NesButton";
import PropTypes from "prop-types";

class Actions extends Component {
  render() {
    return this.props.actions.map(action => (
      <NesButton key={action.id} action={action} />
    ));
  }
}

// PropTypes
Actions.propTypes = { actions: PropTypes.array.isRequired };

export default Actions;
