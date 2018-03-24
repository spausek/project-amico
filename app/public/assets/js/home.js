$( document ).ready(function(){
  function displayUserProfile(user){

    if(firebase.auth().currentUser){
      if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
         $.ajax({
            url: '/profile/'+user.uid,
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('idtoken',idToken)
            },
            data: {},
            success: function (currentUser) {
             
              $('.current-user-email').text(currentUser.email);
              $('.current-user-bio').text(currentUser.bio);
              $('.current-user-name').html(currentUser.displayName);
              $('.current-user-avatar').attr("src",currentUser.avatarUrl);

            },
            error: function () { },
        });
       })
    
   

      /*
     */
    }
       else{
        //POP UP MODAL FOR NOT LOGGED IN
        console.log('Not logged in...');
      }
    }
  
}
  
  function initialize(){
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      displayUserProfile(user);
      console.log(user);
    } else {
      // No user is signed in.
    }
    });
  }

  initialize();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      displayUserProfile(user);
      //console.log(user);
    } else {
      // No user is signed in.
    }
    });
 
});