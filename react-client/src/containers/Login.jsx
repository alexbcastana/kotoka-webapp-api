import React, { Component } from "react";
import {
   CognitoUserPool,
   AuthenticationDetails,
   CognitoUser
} from "amazon-cognito-identity-js";
import LoaderButton from "../components/LoaderButton";
import config from "../config";

export default class Login extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isLoading: false,
         email: "",
         password: ""
      };
   }

   login(email, password) {
      const userPool = new CognitoUserPool({
         UserPoolId: config.cognito.USER_POOL_ID,
         ClientId: config.cognito.APP_CLIENT_ID
      });
      const user = new CognitoUser({ Username: email, Pool: userPool });
      const authenticationData = { Username: email, Password: password };
      const authenticationDetails = new AuthenticationDetails(authenticationData);

      return new Promise((resolve, reject) =>
         user.authenticateUser(authenticationDetails, {
            onSuccess: result => resolve(),
            onFailure: err => reject(err)
         })
      );
   }

   validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
   }

   changeEmail = (event) => {
      this.setState({ email: event.target.value });
   }

   changePassword = (event) => {
      this.setState({ password: event.target.value });
   }

   handleSubmit = async event => {
      event.preventDefault();
      
      this.setState({ isLoading: true });

      try {
         await this.login(this.state.email, this.state.password);
         this.props.userHasAuthenticated(true);
         this.props.history.push("/");
      } catch (e) {
         alert(e);
         this.setState({ isLoading: false });
      }
   }

   render() {
      return (
         <div className="container">
            <div className="card">
               <div className="card-content">
                  <form>
                     <input
                        placeholder="Email"
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.changeEmail}
                     />
                     <input
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changePassword}
                        type="password"
                     />
                  </form>
               </div>
               <div className="card-action">
                  <LoaderButton
                     disabled={!this.validateForm()}
                     type="submit"
                     isLoading={this.state.isLoading}
                     text="Login"
                     loadingText="Logging in…"
                     onClick={this.handleSubmit}
                  />
               </div>
            </div>
         </div>
      );
   }
}