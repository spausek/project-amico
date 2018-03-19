$( document ).ready(function(){

  function createProfile(displayName,email){
    const user = {
      displayName : displayName,
      email : email
      
    }

    if(firebase.auth().currentUser){
      firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
        $.post('/signup',{user:user,idToken:idToken}).then(function(data){
          console.log(data) 
        });
      }).catch(function(error) {
          //POP UP ERROR MODAL WITH ERROR MESSAGE
          console.log('Error...' + error);
      });
    }
    else{
        //POP UP MODAL FOR NOT LOGGED IN
        console.log('Not logged in...');
      }
    }

    $(document).on('click','.create-profile',function(){
        const displayName = document.getElementById('display-name').innerHTML;
        const email = document.getElementById('email').innerHTML;
        createProfile(displayName,email);
      });
}