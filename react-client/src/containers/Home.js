import React, { Component } from "react";
import { Button } from "react-bootstrap"
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
        <html>

      <title>Kotoka</title>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous" />


      <link href="css/jumbotron.css" rel="stylesheet" />


      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Kotoka</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="berry-list.html">Berries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="test-latency.html">Test Latency</a>
            </li>
          </ul>
      	<ul className="navbar-nav ml-auto">
      	  <li className="nav-item">
      	    <a className="nav-link" href="https://kotoka.auth.us-east-1.amazoncognito.com/signup?response_type=code&client_id=2u922ia7hq2q1k3mrjptbbo4bs&redirect_uri=https://kotoka.org:4000">Sign Up</a>
      	  </li>
            <li>
                <a className="nav-link" href="https://kotoka.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2u922ia7hq2q1k3mrjptbbo4bs&redirect_uri=https://kotoka.org:4000 ">Login</a>
            </li>
      	</ul>
        </div>

      </nav>

      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Kotoka</h1>
          <p>Strawberry Harvest Solutions</p>
          <p><a className="btn btn-primary btn-lg" href="https://github.com/CPSECapstone/kotoka-webapp-api" role="button">Github</a></p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Automation, enhanced by human intellect</h2>
            <p>Kotoka leverages crowdsourced intellect from people around the world to identify and assess berries in the field.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Complete field conditions tracking</h2>
            <p>Check the conditions of each field, row, and plant, and track them throughout the season.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-md-4">
            <h2>Customizable analysis tools</h2>
            <p>See the information relevant to your field</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        </div>

        <hr />

        <footer>
          <p>&copy; Kotoka 2017</p>
        </footer>
      </div>



      </html>
    );
  }
}