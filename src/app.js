import Auth from '@aws-amplify/auth';

import awsconfig from './aws-exports';
import manualConfig from './manual-exports';

Auth.configure(manualConfig);

// sign up code
const signUp = () => {
	// declare username, password here

    //const form = document.getElementById('signUpForm');
	Auth.signUp({
    username: 'test',
    password: 'password',
    attributes: {
        //email: 'email10@gmail.com',          // optional
        'custom:latitude': '012345', //latitudeVal.value
        'custom:longitude': '67890'  //longitudeVal.value
        /*this works, next need to change fields to variables + add additional attributes*/
        // other custom attributes 
    },
    validationData: []  //optional
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const signUpButton = document.getElementById('signUpButton');
signUpButton.addEventListener('click', signUp);