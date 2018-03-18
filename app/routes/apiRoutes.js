const Express = require('express');
const Router = Express.Router();
const firebaseAdmin = require('../apis/firebaseAdmin.js');
const UserController = require('../apis/userController.js');
const TopicController = require('../apis/topicController.js');

 /*Router.post('/auth/google/',function(req,res){

 	console.log(req.body);
 	res.end();
 })*/
Router.post('/signup',function(req,res){

 
  const newUser = UserController.createUser(req.body);
  const idToken = req.body.idToken;
  
  UserController.insertUser(newUser);

  res.send(newUser);

  
})

Router.post('/topic', function(req,res){
  const topic = TopicController.createTopic(req.body);
  console.log(req.body);
  TopicController.insertTopic();
});


 
  
module.exports = Router;
