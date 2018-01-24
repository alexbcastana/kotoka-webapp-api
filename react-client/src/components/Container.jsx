import React, { Component } from 'react';
import Footer from './Footer';
import brainPower from '../images/brainPower.png';
import strawberry from '../images/strawberry.png';
import macDansgame from '../images/macDansgame.png';

export default class Container extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col s4">
                  <div className="card">
                     <div className="card-image">
                        <img src={brainPower} alt="human" />
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">info_outline</i></a>
                     </div>
                     <div className="card-content">
                     <span className="card-title">Automation, empowered by human intellect</span>
                        <p>Kotoka leverages crowdsourced intellect from people around the world to identify and assess berries in the field.</p>
                     </div>
                  </div>
               </div>
               <div className="col s4">
                  <div className="card">
                     <div className="card-image">
                        <img src={strawberry} alt="strawberry" />
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">info_outline</i></a>
                     </div>
                     <div className="card-content">
                     <span className="card-title">Complete field conditions tracking</span>
                        <p>Check the conditions of each field, row, and plant, and track them throughout the season.</p>
                     </div>
                  </div>
               </div>
               <div className="col s4">
                  <div className="card">
                     <div className="card-image">
                        <img src={macDansgame} alt="tools" />
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">info_outline</i></a>
                     </div>
                     <div className="card-content">
                     <span className="card-title">Customizable analysis tools</span>
                        <p>See the information relevant to your field.</p>
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      )
   }
}
