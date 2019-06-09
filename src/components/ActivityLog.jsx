import React, { Component } from "react";
import { link } from "fs";

export class ActivityLog extends Component {
  render() {
    return (
      <div className="nes-container is-dark is-rounded with-title">
        <title>Activity Log</title>
        <ul className="is-disc nes-list">
          {this.props.log.map((activity, index) => {
            return <li key={index}>{activity}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ActivityLog;
