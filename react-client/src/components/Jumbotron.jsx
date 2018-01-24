import React, { Component } from 'react';
import '../styles/Jumbotron.css'

export default class Jumbotron extends Component {
   render() {
      return (
         <div className="jumbotron">
            <div className="container">
               <h1 className="display-3">Kotoka</h1>
               <p>Strawberry Harvest Solutions</p>
            </div>
         </div>
      )
   }
}
