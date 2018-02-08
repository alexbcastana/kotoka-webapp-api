import React, { Component } from "react";
import LandingPage from './LandingPage';
import IdentifyBerry from './IdentifyBerry';

export default class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isLoading: true,
         notes: []
      };
   }

   async componentDidMount() {
      if (!this.props.isAuthenticated) {
         return;
      }

      this.setState({ isLoading: false });
   }

   renderHome() {
      return (
         <IdentifyBerry />
      );
   }

   renderLander() {
      return (
         <LandingPage />
      );
   }

   render() {
      return (
         <div className="Home">
            {this.props.isAuthenticated ? this.renderHome() : this.renderLander()}
         </div>
      );
   }
}