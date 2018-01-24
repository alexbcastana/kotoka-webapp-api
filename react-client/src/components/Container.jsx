import React, { Component } from 'react';
import Footer from './Footer';

export default class Container extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col s4">
                  <div className="card">
                     <div className="card-image">
                        <img src="https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-0.3.5&s=2b01cc95401a996955b11750c96c34ef&auto=format&fit=crop&w=1950&q=80" alt="human" />
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
                        <img src="https://static.pexels.com/photos/298696/pexels-photo-298696.jpeg" alt="strawberry" />
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
                        <img src="https://static.pexels.com/photos/572056/pexels-photo-572056.jpeg" alt="tools" />
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
