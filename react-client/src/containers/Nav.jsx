import React, { Component } from "react";

export default class Nav extends Component {
   render() {
      const signup = '/signup';
      const login = '/login';
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
