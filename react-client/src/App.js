import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import Home from './containers/Home';

class App extends Component {
  render() {
      return (
          <div>
              <Routes />
          </div>
      );
  }
}

export default App;
