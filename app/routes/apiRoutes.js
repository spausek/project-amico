const Express = require('express');
const Router = Express.Router();
const firebaseAdmin = require('../apis/firebaseAdmin.js');
const UserController = require('../apis/userController.js');
const TopicController = require('../apis/topicController.js');
const MessageController = require("../apis/messageController.js");


Router.post('/topic/search',function(req,res){
 const idToken = req.body.idToken;

 const result = UserController.validateIdToken(idToken, function(language){
    TopicController.getTopics(language,function(topics){

      res.send(topics);
    }); 
  });
  
});

Router.post("/message", function(req, res) {
  const newMessage = MessageController.createNewMessage(req.body.newMessage);
  const translatedMessage = MessageController.translateMessage(newMessage.messageText, "en", "es", function(data){
    res.send(data);
  });
  
  
});


//New Profile
Router.post('/profile',function(req,res){

  const idToken = req.body.idToken;  
  const result = UserController.validateIdToken(idToken, function(uid){
    const newUser = UserController.createNewUser(uid,req.body.user);
    UserController.insertUser(newUser);
  });
  res.send(result);
});
//Update Profile
Router.put('/profile',function(req,res){

  const idToken = req.body.idToken;
  


})

Router.post('/topic', function(req,res){
  const idToken = req.body.idToken;
  const result = UserController.validateIdToken(idToken,function(uid){
  	const text = req.body.topic.text;
    //console.log('UID: ' + uid);
  	TopicController.createNewTopic(uid,text,function(topic){
      TopicController.insertTopic(topic);
    });
  	
  })
  res.send(result);
});


 
  
module.exports = Router;
