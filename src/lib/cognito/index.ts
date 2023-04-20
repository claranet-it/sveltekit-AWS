import {
	AuthenticationDetails,
	CognitoUser,
	CognitoUserAttribute,
	CognitoUserPool
} from 'amazon-cognito-identity-js';

const poolData = {
	UserPoolId: 'eu-central-1_5BR44MzE3',
	ClientId: 'mps7na95gtaacficrqg7nopv5'
};
const userPool = new CognitoUserPool(poolData);

export async function signUp(email: string, name: string, password: string): Promise<void> {
	return new Promise((resolve, reject) => {
		userPool.signUp(
			email,
			password,
			[
				new CognitoUserAttribute({
					Name: 'name',
					Value: name
				})
			],
			[],
			(err, result) => {
				if (!result) {
					reject(err);
				} else {
					resolve();
				}
			}
		);
	});
}

export async function confirm(email: string, code: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const userData = {
			Username: email,
			Pool: userPool
		};
		const cognitoUser = new CognitoUser(userData);
		cognitoUser.confirmRegistration(code, true, (err, result) => {
			if (!result) {
				reject(err);
			} else {
				resolve(result);
			}
		});
	});
}

export async function signIn(email: string, password: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const authenticationDetails = new AuthenticationDetails({
			Username: email,
			Password: password
		});
		const userData = {
			Username: email,
			Pool: userPool
		};
		const cognitoUser = new CognitoUser(userData);
		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: (result) => {
				console.log('Sign in success: ', result);
				resolve();
			},
			onFailure: (err) => {
				reject(err);
			}
		});
	});
}
