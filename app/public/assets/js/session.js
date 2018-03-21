$( document ).ready(function(){

  $(document).on('click','.sign-out',function(){
    firebase.auth().signOut();
    window.location = '/';
    console.log('SIGNED OUT!');
  })    
});