import React, { Component } from 'react';

const cardData = [
   {
      img: 'images/brainPower.png',
      alt: 'human',
      title: 'Automation, empowered by human intellect',
      text: 'Kotoka leverages crowdsourced intellect from people around the world to identify and assess berries in the field.'
   },
   {
      img: 'images/strawberry.png',
      alt: 'strawberry',
      title: 'Complete field conditions tracking',
      text: 'Check the conditions of each field, row, and plant, and track them throughout the season.'
   },
   {
      img: 'images/macDansgame.png',
      alt: 'mac',
      title: 'Customizable analysis tools',
      text: 'See the information relevant to your field.'
   }
];

export default class LandingPage extends Component {
   render() {
      return (
         <div>
            <div className="container">
               <h1>Kotoka</h1>
               <p className="flow-text">Strawberry Harvest Solutions</p>
               <div className="row">
                  {cardData.map((card) => (
                     <div className="col s4" key={card.alt}>
                        <div className="card">
                           <div className="card-image">
                              <img src={card.img} alt={card.alt} />
                              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">info_outline</i></a>
                           </div>
                           <div className="card-content">
                              <span className="card-title">{card.title}</span>
                              <p>{card.text}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      )
   }
}
