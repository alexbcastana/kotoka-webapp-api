import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Container from './Container';

class Home extends Component {
   
   displayUsername() {

   }


   render() {
      return (
         <div>
            {this.displayUsername()}
            <Navbar />
            <Jumbotron />
            <Container />
         </div>
      );
   }
}

export default Home;
