import React, { Component } from "react";

export default class Navbar extends Component {
   componentDidMount() {
      
   }

   render() {
      const signup = '/register';
      const login = 'https://kotoka.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2u922ia7hq2q1k3mrjptbbo4bs&redirect_uri=https://localhost:3001';
      const identifyBerry = '/identifyBerry';

      return (
         <nav>
            <div className="nav-wrapper">
               <a className="brand-logo center" href="/">Kotoka</a>
               <ul id="nav-mobile" className="left hide-on-med-and-down">
                  <li><a href={identifyBerry}>Berries</a></li>
               </ul>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href={signup}>Sign Up</a></li>
                  <li><a href={login}>Login</a></li>
               </ul>

               <a href="#" data-activates="mobile-collapse" className="button-collapse">
                     <i className="material-icons">menu</i>
               </a>
               <ul className="side-nav" id="mobile-collapse">
                     <li><a href={identifyBerry}>Berries</a></li>
                     <li><a href={signup}>Sign Up</a></li>
                     <li><a href={login}>Login</a></li>
               </ul>
            </div>
         </nav>
      )
   }
}
