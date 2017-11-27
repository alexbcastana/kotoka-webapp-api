import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import Navbar from './containers/Navbar';
import Jumbotron from './containers/Jumbotron';
import Container from './containers/Container';
import Footer from './containers/Footer';

class App extends Component {
  render() {
      return (
          <div>
              <Navbar />
              <Jumbotron />
              <Container />
              <Footer />
          </div>
      );
  }
}

export default App;
