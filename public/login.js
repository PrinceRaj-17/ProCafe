(function(){
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            return true;
          },
          uiShown: function() {
            document.getElementById('loader').style.display = 'none';
          }
        },
        signInFlow: 'popup',
        signInSuccessUrl: 'main.html',
        signInOptions: [
         //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
         //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
         //firebase.auth.GithubAuthProvider.PROVIDER_ID,
         firebase.auth.EmailAuthProvider.PROVIDER_ID,
         firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'main.html',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };

      ui.start('#firebaseui-auth-container', uiConfig);

})()


  