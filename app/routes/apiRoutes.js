const Express = require('express');
const Router = Express.Router();
const firebaseAdmin = require('../apis/firebaseAdmin.js');
const UserController = require('../apis/userController.js');
const TopicController = require('../apis/topicController.js');


Router.post('/topic/search',function(req,res){
 const idToken = req.body.idToken;

 const result = UserController.validateIdToken(idToken, function(language){
    TopicController.getTopics(language,function(topics){

      res.send(topics);
    }); 
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
  UserController.validateIdToken(idToken,function(uid){
  	const text = req.body.topic.text;
  	const topic = TopicController.createNewTopic(uid,text);
  	TopicController.insertTopic(topic);
  });
  res.end();
});


 
  
module.exports = Router;
