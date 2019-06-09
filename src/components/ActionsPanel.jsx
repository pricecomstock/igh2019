import React, { Component } from "react";
import NesButton from "./NesButton";
import PropTypes from "prop-types";

class ActionsPanel extends Component {
  render() {
    let buttonStyle = {
      width: "100%",
      marginTop: "20px"
    };
    return (
      <div className="actions nes-container is-rounded with-title">
        <p className="title">Actions</p>
        {this.props.actions.map(action => (
          <div className="actionWrapper">
            <NesButton key={action.id} action={action} style={buttonStyle} />
          </div>
        ))}
      </div>
    );
  }
}

// PropTypes
ActionsPanel.propTypes = { actions: PropTypes.array.isRequired };

export default ActionsPanel;
