import React, { Component } from 'react';

export default class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron">
              <div className="container">
                <h1 className="display-3">Kotoka</h1>
                <p>Strawberry Harvest Solutions</p>
                <p><a className="btn btn-primary btn-lg" href="https://github.com/CPSECapstone/kotoka-webapp-api" role="button">Github</a></p>
              </div>
            </div>
        )
    }
}