const Express = require('express');
const Router = Express.Router();
const firebaseAdmin = require('../apis/firebaseAdmin.js');
const UserController = require('../apis/userController.js');
const TopicController = require('../apis/topicController.js');
const Path = require('path');
const keys = require('../../config/keys.js');
const stripe = require('stripe')(keys.stripeSecretKey);

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
  //res.send(translatedMessage);
  
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
  	const topic = TopicController.createNewTopic(uid,text);
  	TopicController.insertTopic(topic);
  })
  res.send(result);
});

Router.post('/payment_thanks', (req, res) => {
	const amount = 500;
	
	stripe.customers.create({
	  email: req.body.stripeEmail,
	  source: req.body.stripeToken
	})
	.then(customer => stripe.charges.create({
	  amount,
	  description: 'Tutoring',
	  currency: 'usd',
	  customer: customer.id
  }))
  .then(charge => res.sendFile(Path.join(__dirname, "../public/payment_thanks.html")))
	
  });
  



 
  
module.exports = Router;
