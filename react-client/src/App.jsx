import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import { authUser, signOutUser } from "./libs/awsLib";

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isAuthenticated: false,
         isAuthenticating: true
      };
   }

   async componentDidMount() {
      try {
         if (await authUser()) {
            this.userHasAuthenticated(true);
         }
      }
      catch (e) {
         alert(e);
      }

      this.setState({ isAuthenticating: false });
   }

   userHasAuthenticated = authenticated => {
      this.setState({ isAuthenticated: authenticated });
   }

   handleLogout = event => {
      signOutUser();

      this.userHasAuthenticated(false);

      this.props.history.push("/login");
   }

   render() {
      const childProps = {
         isAuthenticated: this.state.isAuthenticated,
         userHasAuthenticated: this.userHasAuthenticated
      };

      return (
         !this.state.isAuthenticating &&
         <div>
            <nav>
               <div className="nav-wrapper">
                  <a className="brand-logo center" href="#">Kotoka</a>
                  {this.state.isAuthenticated
                     ?
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="" onClick={this.handleLogout}>Logout</a></li>
                     </ul>
                     :
                     <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href='/signup'>Sign Up</a></li>
                        <li><a href='/login'>Login</a></li>
                     </ul>}
               </div>
            </nav>
            <Routes childProps={childProps} />
         </div>
      );
   }
}

export default withRouter(App);