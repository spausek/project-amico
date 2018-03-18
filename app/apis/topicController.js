const firebaseAdmin = require('./firebaseAdmin.js');

const moment = require('moment');
const momentTimezone = require('moment-timezone');

const TopicController = {

	 createTopic:function(data){
		const Topic = {
			topicId : data.topicId,
			text : data.text,
			authorId : data.uid,
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
			

	}





}


module.exports = TopicController;