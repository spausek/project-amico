$( document ).ready(function(){
  
  let topics = [];
  const topicContainer = $('#topic-container');
  const newTopicButton = $('.create-topic');

 

  function formatTopic(topic){

    let topicElement = '<li class="media list-group-item p-4">'+
                        '<img class="media-object d-flex align-self-start mr-3" src="assets/img/avatar-haig.png">'+
                        '<div class="media-body">'+
                          '<div class="media-heading">'+
                            '<small class="float-right text-muted">4 min</small>'+
                            '<h6>' + topic.authorName + '</h6>'+
                        '</div>'+
                          '<p>'+
                            topic.text+
                          '</p>'+
                        '</div>'+
                        '</li>';

    return topicElement;
  }
    
  function getTopics(){

   if(firebase.auth().currentUser){
      firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
        $.post('/topic/search',{language:'english',idToken:idToken})
        .then(function(data){
          topics = [];
           console.log(data)
           data.map(function(topic){
           topics.unshift(formatTopic(topic));
           });
           topicContainer.empty();
           topicContainer.append(topics);
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


  function createNewTopic(text){
    if(firebase.auth().currentUser){
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        $.post('/topic',{topic:{text:text},idToken:idToken}).then(function(data){
           console.log(data)
           getTopics();
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
    const topicText =  $('#topic-text-box').val().trim();
    createNewTopic(topicText);
    
  })

  //wait for the user's session to change and if it is a user, then get the topics
   firebase.auth().onAuthStateChanged(function(user) {

       if(user){
          getTopics();
       }

   });

 

});