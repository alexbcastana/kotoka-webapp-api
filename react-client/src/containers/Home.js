import React, { Component } from "react";
import { Button } from "react-bootstrap"
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Kotoka</h1>
          <p>Strawberry Harvest Solutions</p>
          <Button bsStyle="primary" href="https://github.com/CPSECapstone/kotoka-webapp-api">GitHub</Button>
        </div>
      </div>
    );
  }
}
