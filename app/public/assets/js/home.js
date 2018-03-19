$( document ).ready(function(){
  function displayUserProfile(user){
    if(firebase.auth().currentUser){
      $('#user-email').text(user.email);
      $('#user-display-name').text(user.displayName);
      $('#user-uid').text(user.uid);
    }
    else{
        console.log('Not logged in...');
      }
  }
  
  function initialize(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      displayUserProfile(user);
    } else {
      // No user is signed in.
    }
    });
  }

  initialize();
});