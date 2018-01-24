import React, { Component } from "react";

export default class Navbar extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Kotoka</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <a className="nav-link" href="/identifyBerry">Berries</a>
                  </li>
               </ul>
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <a className="nav-link" href="https://kotoka.auth.us-east-1.amazoncognito.com/signup?response_type=code&client_id=2u922ia7hq2q1k3mrjptbbo4bs&redirect_uri=https://localhost:3001">Sign Up</a>
                  </li>
                  <li>
                     <a className="nav-link" href="https://kotoka.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2u922ia7hq2q1k3mrjptbbo4bs&redirect_uri=https://localhost:3001">Login</a>
                  </li>
               </ul>
            </div>

         </nav>
      )
   }
}
