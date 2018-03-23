	const firebaseAdmin = require('./firebaseAdmin.js');

	const moment = require('moment');
	const momentTimezone = require('moment-timezone');

	const TopicController = {

		 createTopic:function(data){
			const Topic = {
				topicId : data.topicId,
				text : data.text,
				authorName : data.authorName,
				authorId : data.authorId,
				timestamp : data.timestamp,
			}
			return Topic;
		},
		createNewTopic:function(uid,text,callback){
			const  userRef = firebaseAdmin.database().ref("users/" + uid);
				userRef.once("value").then(function(snapshot) {
					console.log('SNAP:');
					console.log(snapshot.val());
					const User = snapshot.val();
			
					const Topic = {
						text : text,
						authorName : User.displayName,
						authorId : User.uid
					}
					callback(Topic);
				})

			
			
		},
		insertTopic : function(topic){
			console.log('TOPIC: ' + topic);

				 const topicRef = firebaseAdmin.database().ref('topics/' + topic.authorId + '/');
					topicRef.push({
					authorName : topic.authorName,
					authorId : topic.authorId,
					text : topic.text,
					timestamp : firebaseAdmin.database.ServerValue.TIMESTAMP,
				});
		},

		getTopics : function(desiredLanguage, callback){
			const TopicController = this;

	      	const queryTopicOwners = firebaseAdmin.database().ref("topics").orderByKey();
	      	queryTopicOwners.once("value")
	        	.then(function(snapshot) {
	        		const topics = [];
	          		snapshot.forEach(function(user) {
	           
	            		const userId = user.key;
	            
		            	const userTopicData = user.val();

		            	for(topicId in userTopicData){
			              	const topic = TopicController.createTopic(userTopicData[topicId]);
			              	console.log(topic);
			              	topics.push(topic);
		            	}  
           	    
	        		});
	        		callback(topics);
	      		});
	    	}
	}


module.exports = TopicController;