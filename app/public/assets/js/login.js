$( document ).ready(function(){

  
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  const uiConfig = {

  signInFlow: 'redirect',
  signInSuccessUrl: 'http://localhost:8080/profile',
  signInOptions: [

    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],

  tosUrl: '<your-tos-url>'
};

  ui.start('#firebaseui-auth-container', uiConfig);
  
  function signOut() {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        //popup signed out modal
      });
    }
    

  $(document).on('click','.sign-out',signOut);



});











