
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
          if (user.displayName != null){
          document.getElementById("displayName").innerHTML = "Hi! " + user.displayName;
          }else {
          document.getElementById("displayName").innerHTML = "Hi! " + user.phoneNumber;
          }
        }else{
            uid = null;
            window.location.replace("index.html");
        }
      });

      function logOut(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            window.location.replace("index.html");
          }).catch((error) => {
            // An error happened.
          });
          
      }
