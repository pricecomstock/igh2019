import React, { Component } from "react";
import NesButton from "./NesButton";
import PropTypes from "prop-types";

class ActionsPanel extends Component {
  render() {
    return (
      <div className="actions nes-container is-rounded with-title">
        <p className="title">Actions</p>
        {this.props.actions.map(action => (
          <div className="actionWrapper" key={action.id}>
            <NesButton
              action={action}
              isDisabled={this.props.cooldowns[action.textid] > 0}
            />
          </div>
        ))}
      </div>
    );
  }
}

// PropTypes
ActionsPanel.propTypes = { actions: PropTypes.array.isRequired };

export default ActionsPanel;
