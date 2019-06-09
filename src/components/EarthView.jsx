import React, { Component } from "react";
import Particles from "react-particles-js";

import snowParticles from "../particles/snow";

export class EarthView extends Component {
  render() {
    return (
      <div className="view">
        {/* <img
          className="earth-photo"
          src="assets/earth.jpg"
          alt="it's a planet that looks like earth"
        /> */}
        <Particles className="earth-particles" params={snowParticles} />
      </div>
    );
  }
}

export default EarthView;
