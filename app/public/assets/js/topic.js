$( document ).ready(function(){
  
  function createTopic(text){
    if(firebase.auth().currentUser){
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        $.post('/topic',{topic:{text:text},idToken:idToken}).then(function(data){
           console.log(data)
           //UPDATE OR REQUERY THE CURRENT TOPICS ON THE PAGE
         });
        }).catch(function(error) {
            //POP UP ERROR MODAL
            console.log('Error...' + error);
          });
    }
    else{
      //POPUP NOT SIGNED IN MODAL
      console.log('Not logged in...');
    }
  }

      
  $(document).on('click','.create-topic',function(){
    const topicText =  $('#topic-text').val();
    createTopic(topicText);
  })

});