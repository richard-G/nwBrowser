import Auth from '@aws-amplify/auth';

import awsconfig from './aws-exports';
import manualConfig from './manual-exports';

Auth.configure(manualConfig);


/*
const initializeIndex = () => {
    document.addEventListener('deviceready', onDeviceReady, false);
} */

//init for index.html
const onDeviceReady = () => {
    const utilLower = document.getElementById('utilLower');
    const utilUpper = document.getElementById('utilUpper');
    //const logoutButton = document.getElementById('logoutButton'); //already used
    getObject();
    /*
    if (await isAuthenticated()) {
        conditionalTest.style.display = "block";
    } else {
        conditionalTest.style.display = "hidden";
    }*/
    refreshView();
}



//init for breakInService.html
const onDeviceReadyBreak = async () => {

    const ifLoggedIn = async () => {
        if (await isAuthenticated()) {
            
        } else {
            const buttons = document.getElementById('buttons');
            const notLoggedIn = document.getElementById('notLoggedIn');
            const visibleText = document.getElementById('visibleText');
            buttons.style.display = "none";
            visibleText.innerHTML = "<br><br>You are not logged in, please log in to continue."
        }
    }

    const WRForm = document.getElementById('WRForm');
    if (WRForm) {
        WRForm.addEventListener('submit', evt => {
            evt.preventDefault();
            formSubmit(event, 'WRForm', 'modalWR', 'cbWR', 'sendWR');
        });
    }
    const WGForm = document.getElementById('WGForm');
    if (WGForm) {
        WGForm.addEventListener('submit', evt => {
            evt.preventDefault();
            formSubmit(event, 'WGForm', 'modalWG', 'cbWG', 'sendWG');
            console.log('you got to here');
        });
    }


    //converts data collected from the form
    async function formSubmit(event, formID, modalID, sucCB, sendB) {
        event.preventDefault();

        /*
        Auth.currentAuthenticatedUser({
            bypassCache: false
        })
        .then(user => {
            console.log(user);
            const latitude = user.attributes['custom:latitude'];
            const longitude = user.attributes['custom:longitude'];
        })
        */

        const user = await Auth.currentAuthenticatedUser({
            bypassCache: false
        });

        console.log(user);
        
        var form = $('#'+formID);
        var id = document.getElementById(formID).ID;
        id.value = Math.floor((Math.random() * 100000000) + 1);
        var timestamp = document.getElementById(formID).timestamp;
        timestamp.value = Date();
        const latitude = document.getElementById(formID).latitude;
        const longitude = document.getElementById(formID).longitude;
        const username = document.getElementById(formID).username;

        latitude.value = user.attributes['custom:latitude'];
        longitude.value = user.attributes['custom:longitude'];
        username.value = user.username;


        //remove all inputs with no values
        form.find(":input").filter(function(){ return !this.value; }).attr("disabled", "disabled");

        formSend(form); //added for web

        var sucCB = document.getElementById(sucCB);
            sendB = document.getElementById(sendB);
        sendB.style.display = "none";
        sucCB.style.display = "block";
    }

    //sends converted data to server through ajax
    function formSend(form) {
        $.ajax({
         type: "POST",
         url: "https://xdfz4o3cjk.execute-api.eu-west-2.amazonaws.com/live/networkingwater",
         data: form.serialize(),
         dataType: 'x-www-form-urlencoded',
         contentType: 'application/x-www-form-urlencoded',
         success: function(data)
         {
             alert("Data Submitted!");
             console.log('submit successful')
         }
     });
    }


    ifLoggedIn();
}

//boolean depending on whether the user is logged in
const isAuthenticated = async () => {
    try {
        await Auth.currentAuthenticatedUser({
            bypassCache: false
        });
        return true
    } catch (e) {
        return false
    };
};


//handles what buttons will be visible depending on whether user is logged in
const refreshView = async () => {
    if (await isAuthenticated()) {
        utilLower.style.display = "flex";
        utilUpper.style.display = "none";
        logoutButton.style.display = "inline-block";


    } else {
        utilLower.style.display = "none";
        utilUpper.style.display = "flex"; //block here changes the formatting
        logoutButton.style.display = "none";
    }
}


//signup functionality
const signUp = event => {
	// declare username, password here
    event.preventDefault();
    //const form = document.getElementById('signUpForm');

    const popup = document.getElementById('popup');
    const dialogue = document.getElementById('dialogue');
    const behindMap = document.getElementById('behindMap');
    const behindMap2 = document.getElementById('behindMap2');
    const closePopup = document.getElementById('closePopup');
    //const signUpForm = document.getElementById('signUpForm');

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        behindMap.style.opacity = 1;
        behindMap2.style.opacity = 1;
        signUpForm.style.opacity = 1;
    })

    if (signUpForm.latitudeVal.value && signUpForm.longitudeVal.value) {
        Auth.signUp({
            username: signUpForm.usernameField.value,
            password: signUpForm.passwordField.value,
            attributes: {
                //email: signUpForm.emailField.value,          // optional
                'custom:latitude': signUpForm.latitudeVal.value,
                'custom:longitude': signUpForm.longitudeVal.value 
            },
            validationData: []  //optional
            })
            .then(data => {
                console.log(data);
                const cbCreate = document.getElementById('cbCreate');
                const createSubmit = document.getElementById('createSubmit');
                cbCreate.style.display = "block";
                createSubmit.style.display = "none";

            })
            .catch(err => {
                console.log(err);
                behindMap.style.opacity = 0.5;
                behindMap2.style.opacity = 0.5;
                signUpForm.style.opacity = 0.5;
                popup.style.display = "block";

                if (err.code === "UsernameExistsException") {
                    dialogue.innerHTML = "Username taken, please choose another";
                } else if (err.code === "InvalidParameterException") {
                    dialogue.innerHTML = "Please ensure your password is greater than 6 characters, and you have not used any spaces";
                } else if (err.code = "InvalidPasswordException") {
                    dialogue.innerHTML = "Please ensure your password is greater than 6 characters";
                }
            });
    } else {
        popup.style.display = "block";
        behindMap.style.opacity = 0.5;
        behindMap2.style.opacity = 0.5;
        signUpForm.style.opacity = 0.5;

        dialogue.innerHTML = "Error: Please ensure you have located yourself";
    }
	
}



//login functionality
const login = async event => {
    event.preventDefault();
    const cbLogin = document.getElementById('cbLogin');
    const loginSubmit = document.getElementById('loginSubmit');
    const popupLogin = document.getElementById('popupLogin');
    const dialogueLogin = document.getElementById('dialogueLogin');
    const closePopupLogin = document.getElementById('closePopupLogin');

    closePopupLogin.addEventListener('click', () => {
        popupLogin.style.display = "none";
        loginForm.style.opacity = 1;
    })

    try {
        //provisional hardcoded values
        const username = loginForm.usernameField.value;
        const password = loginForm.passwordField.value;
        const user = await Auth.signIn(username, password);      
        console.log(user);
        console.log('logged in successfully');
        loginSubmit.style.display = "none";
        cbLogin.style.display = "block";

    } catch (err) {
        console.log(err)
        popupLogin.style.display = "block";
        loginForm.style.opacity = 0.5;
        if (err.code === 'NotAuthorizedException') {
            dialogueLogin.innerHTML = "Incorrect password";
            // The error happens when the incorrect password is provided
        } else if (err.code === 'UserNotFoundException') {
            dialogueLogin.innerHTML = "Username not found";
            // The error happens when the supplied username/email does not exist in the Cognito user pool
        } else {
            console.log(err);
        }
    }

    getObject();
    refreshView();

}


//get user object, display on homepage
const getObject = () => {
    const welcome = document.getElementById('welcome');
    Auth.currentAuthenticatedUser({
        bypassCache: false // this is the default
    })
    .then(user => {
        console.log(user);
        welcome.innerHTML = user.username + '&nbsp;'+ '&nbsp;'+ '&nbsp;'+ '&nbsp;' +  '/ ';
    })
    .catch(err => {
        console.log(err);
        if (document.getElementById('nepali')) {
            welcome.innerHTML = "तपाई लग इन हुनुहुन्न";
        } else {
            welcome.innerHTML = "You are not logged in";
        }
    })
}

const signOut = () => {
    Auth.signOut()
    .then(data => {
        console.log(data);
        console.log("Logged out successfully");
        getObject();
        refreshView();
    })
    .catch(err => console.log(err));

}




//event listeners
const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
    signUpForm.addEventListener('submit', signUp);
}
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', login);
}
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', signOut);
}




//signUpForm.addEventListener('submit', signUp);


// temp fix to initialize specific pages
//index.html
const loginDiv = document.getElementById('loginDiv');
if (loginDiv) {
    onDeviceReady();
};
//breakInService.html

const signalWR = document.getElementById('signalWR');
if (signalWR) {
    onDeviceReadyBreak();
};
/*
if (window.location.pathname == "/pages/breakInService.html") {
    onDeviceReadyBreak();
}
// this needs to wait.
*/
console.log(window.location.pathname);