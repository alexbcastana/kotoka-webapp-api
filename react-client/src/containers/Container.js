import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return(
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
            </div>
        )
    }
}
