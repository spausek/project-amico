$( document ).ready(function(){



initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            
            user.getIdToken().then(function(accessToken) {
              /*
              $.post('/auth/google/', {accessToken}).then(function(data){
                console.log(data);
              })*/
              document.getElementById('display-name').textContent = displayName;
              document.getElementById('email').textContent = email;
              document.getElementById('uid').textContent = uid;
              document.getElementById('access-token').textContent = accessToken;
            });
          } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        });
      };

      function createProfile(displayName,email,uid){
        const User = {
          displayName : displayName,
          email : email,
          uid : uid,
        }

        $.post('/signup',User).then(function(data){
          console.log(data);
        });
      }


      function checkSignedIn(){
        if(firebase.auth().currentUser){
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          $.post('/auth/validate',{idToken:idToken}).then(function(data){
            console.log('Server response...');
            console.log(data);
          });
        }).catch(function(error) {
          console.log('Error...' + error);
        });
      }
      else{
        console.log('Not logged in...');
      }
      }


      window.addEventListener('load', function() {
        initApp()
      });

      $(document).on('click','.sign-out',function(){
        firebase.auth().signOut();
        window.location = '/';
        console.log('SIGNED OUT!');
      })

      $(document).on('click','.am-i-signed',checkSignedIn);
      $(document).on('click','.create-profile',function(){
        const displayName = document.getElementById('display-name').innerHTML;
        const email = document.getElementById('email').innerHTML;
        const uid = document.getElementById('uid').innerHTML;

       
        createProfile(displayName,email,uid);
      });
});