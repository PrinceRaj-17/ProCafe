window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    }
  });



window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

    const code = getCodeFromUserInput();
    confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      window.location.replace('main.html');
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log(error);// ...
    });


    function logOut(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            window.location.replace("index.html");
          }).catch((error) => {
            // An error happened.
          });
          
      }


    grecaptcha.reset(window.recaptchaWidgetId);

// Or, if you haven't stored the widget ID:
    window.recaptchaVerifier.render().then(function(widgetId) {
    grecaptcha.reset(widgetId);
    })