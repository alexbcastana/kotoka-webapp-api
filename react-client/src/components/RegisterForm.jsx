import React, { Component } from 'react'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from '../../public/aws-cognito-identity.min.js'
import AWSCognito from 'aws-sdk'
import Navbar from './Navbar'

export default class RegisterForm extends Component {

   register() {
		var poolData = {
			UserPoolId: 'us-east-1_u1wTbNMft',
			ClientId: '7jafpfh2ikcj8p15qqstlr1ves'
		}
		var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData)
		var attributeList = []
		var dataEmail = {
			Name: 'derekwarnerlance',
			Value: 'derekwarnerlance@yahoo.com'
		}
		var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail)
		
		attributeList.push(attributeEmail)

		userPool.signUp('dlance', 'Password1!!', attributeList, null, (err, result) => {
			if (err) {
				alert(err)
         }
         else {
			   var cognitoUser = result.userPool
            console.log('user name is ' + cognitoUser.getUsername())
         }
		})
   }

   componentDidMount() {
      
   }
   
   render() {
      this.register()
      return (
         <div>
            <Navbar />
            <h1>Register for Kotoka</h1>
         </div>
      )
   }
}
