import React, { Component } from "react";

export class Health extends Component {
  render() {
    const { maxHealth, currentHealth } = this.props;
    const hearts = Array(currentHealth).fill(true);
    const emptyHearts = Array(maxHealth - currentHealth).fill(false);
    const allHearts = hearts.concat(emptyHearts);
    return (
      <div className="icon-list">
        {allHearts.map((isFull, index) => {
          if (isFull) {
            return <i className="nes-icon is-medium heart" key={index} />;
          } else {
            return (
              <i className="nes-icon is-medium heart is-empty" key={index} />
            );
          }
        })}
      </div>
    );
  }
}

export default Health;
