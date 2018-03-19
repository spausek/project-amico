	const firebaseAdmin = require('./firebaseAdmin.js');

	const moment = require('moment');
	const momentTimezone = require('moment-timezone');

	const TopicController = {

		 createTopic:function(data){
			const Topic = {
				topicId : data.topicId,
				text : data.text,
				authorId : data.authorId,
				timestamp : data.timestamp,
			}
			return Topic;
		},
		createNewTopic:function(uid,text){
			const Topic = {
				text : text,
				authorId : uid
			}
			return Topic;
		},
		insertTopic : function(topic){
			const ref = firebaseAdmin.database().ref('topics/' + topic.authorId + '/');
			ref.push({
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