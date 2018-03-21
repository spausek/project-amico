$( document ).ready(function(){

  $(document).on('click','.sign-out',function(){
    firebase.auth().signOut();
    window.location = '/';
    console.log('SIGNED OUT!');
  })
  
  $(document).on('click', 'save-profile', function () {
    window.location = '/home';
    console.log('Home page!');
  })
      
});