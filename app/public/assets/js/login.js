<<<<<<< HEAD
$( document ).ready(function(){

  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: 'http://localhost:8080/home',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-url>'
  };

  ui.start('#firebaseui-auth-container', uiConfig);

$(".register form").on("submit", function(event){
    event.preventDefault();
        $(document).ready(function() {

=======
$(document).ready(function() {

  firebase.initializeApp(config);

  $(".register modal-body form").on("submit", function(event){
    event.preventDefault();
        $(document).ready(function() {
  
>>>>>>> e269ade37ef454fcdad956f9420d243283ffea58
    var email = $(".register .email").val();
    var password = $(".register .password").val();
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user){
            console.log(user);
        })
        .catch(function(err){
            console.log(err);
        });   
<<<<<<< HEAD
      });

    })
});

  












=======
  });
  
  });
    
  });
  
// require('dotenv').config();
// dotenv.config();

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyALJlqbV2CBSFy-nTDjDn5N_0fow6CiziU",
//   authDomain: "user-auth-e01be.firebaseapp.com",
//   databaseURL: "https://user-auth-e01be.firebaseio.com",
//   projectId: "user-auth-e01be",
//   storageBucket: "",
//   messagingSenderId: "387653187343"
// };
// firebase.initializeApp(config);

// // FirebaseUI config.
// var uiConfig = {
//   signInSuccessUrl: 'https://media.giphy.com/media/rmi45iyhIPuRG/giphy.gif',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
//   // Terms of service url.
//   tosUrl: '<your-tos-url>'
// };

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);
>>>>>>> e269ade37ef454fcdad956f9420d243283ffea58
