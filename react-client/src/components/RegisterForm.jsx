import React, { Component } from 'react'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from '../../public/aws-cognito-identity.min.js'
import { AWSCognito } from 'aws-sdk'

export default class RegisterForm extends Component {
   signup() {
		var poolData = {
			UserPoolId : 'us-east-1_bpAnoXGkR',
			ClientId : '4mu6gaakir506i83a6e4hrqi3l'
		}
		var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData)
		var attributeList = []
		var dataEmail = {
			Name : 'Derek Lance',
			Value : 'email@domain.com'
		}
		var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail)
		
		attributeList.push(attributeEmail)

		userPool.signUp('username', 'password', attributeList, null, (err, result) => {
			if (err) {
				alert(err)
				return
			}
			var cognitoUser = result.userPool
			console.log('user name is ' + cognitoUser.getUsername())
		})
   }

   componentDidMount() {
      this.signup()
   }
   
   render() {
      return (
         <div>
            <p>This is the registration page</p>
         </div>
      )
   }
}
