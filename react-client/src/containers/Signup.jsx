import React, { Component } from "react";
import {
   AuthenticationDetails,
   CognitoUserPool
} from "amazon-cognito-identity-js";
import LoaderButton from "../components/LoaderButton";
import config from "../config";

export default class Signup extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isLoading: false,
         email: "",
         password: "",
         confirmPassword: "",
         confirmationCode: "",
         newUser: null
      };
   }

   validateForm() {
      return (
         this.state.email.length > 0 &&
         this.state.password.length > 0 &&
         this.state.password === this.state.confirmPassword
      );
   }

   validateConfirmationForm() {
      return this.state.confirmationCode.length > 0;
   }

   changeEmail = (event) => {
      this.setState({ email: event.target.value });
   }

   changePassword = (event) => {
      this.setState({ password: event.target.value });
   }

   changeConfirmPassword = (event) => {
      this.setState({ confirmPassword: event.target.value });
   }

   changeConfirmationCode = (event) => {
      this.setState({ confirmationCode: event.target.value });
   }

   handleSubmit = async event => {
      event.preventDefault();

      this.setState({ isLoading: true });

      try {
         const newUser = await this.signup(this.state.email, this.state.password);
         this.setState({
            newUser: newUser
         });
      } catch (e) {
         alert(e);
      }

      this.setState({ isLoading: false });
   }

   handleConfirmationSubmit = async event => {
      event.preventDefault();

      this.setState({ isLoading: true });

      try {
         await this.confirm(this.state.newUser, this.state.confirmationCode);
         await this.authenticate(
            this.state.newUser,
            this.state.email,
            this.state.password
         );

         this.props.userHasAuthenticated(true);
         this.props.history.push("/");
      } catch (e) {
         alert(e);
         this.setState({ isLoading: false });
      }
   }

   signup(email, password) {
      const userPool = new CognitoUserPool({
         UserPoolId: config.cognito.USER_POOL_ID,
         ClientId: config.cognito.APP_CLIENT_ID
      });

      return new Promise((resolve, reject) =>
         userPool.signUp(email, password, [], null, (err, result) => {
            if (err) {
               reject(err);
               return;
            }

            resolve(result.user);
         })
      );
   }

   confirm(user, confirmationCode) {
      return new Promise((resolve, reject) =>
         user.confirmRegistration(confirmationCode, true, function (err, result) {
            if (err) {
               reject(err);
               return;
            }
            resolve(result);
         })
      );
   }

   authenticate(user, email, password) {
      const authenticationData = {
         Username: email,
         Password: password
      };
      const authenticationDetails = new AuthenticationDetails(authenticationData);

      return new Promise((resolve, reject) =>
         user.authenticateUser(authenticationDetails, {
            onSuccess: result => resolve(),
            onFailure: err => reject(err)
         })
      );
   }

   renderConfirmationForm() {
      return (
         <form onSubmit={this.handleConfirmationSubmit}>
            <input
               placeholder="Confirmation code"
               autoFocus
               type="tel"
               value={this.state.confirmationCode}
               onChange={this.changeConfirmationCode}
            />
            <LoaderButton
               disabled={!this.validateConfirmationForm()}
               type="submit"
               isLoading={this.state.isLoading}
               text="Verify"
               loadingText="Verifying…"
               onClick={this.handleSubmit}
            />
         </form>
      );
   }

   renderForm() {
      return (
         <form onSubmit={this.handleSubmit}>
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
            <input
               placeholder="Confirm password"
               value={this.state.confirmPassword}
               onChange={this.changeConfirmPassword}
               type="password"
            />
            <LoaderButton
               disabled={!this.validateForm()}
               type="submit"
               isLoading={this.state.isLoading}
               text="Signup"
               loadingText="Signing up…"
               onClick={this.handleSubmit}
            />
         </form>
      );
   }

   render() {
      const width = {
         width: "500px",
         display: "inline-block"
      }

      return (
         <div className="container center">
            <div className="card" style={width}>
               <div className="card-content">
                  <div className="Signup">
                     {this.state.newUser === null
                        ? this.renderForm()
                        : this.renderConfirmationForm()}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}