import React, { Component } from 'react';
import '../styles/jumbotron.css';

export default class Jumbotron extends Component {
   render() {
      return (
         <div className="jumbotron">
            <div className="container">
               <h1>Kotoka</h1>
               <p className="flow-text">Strawberry Harvest Solutions</p>
            </div>
         </div>
      )
   }
}
