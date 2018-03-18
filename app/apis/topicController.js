const firebaseAdmin = require('./firebaseAdmin.js');

const TopicController = {

	 createTopic:function(data){
		const Topic = {
			topicId : data.topicId,
			text : data.text,
			author : data.author,
			timestamp : 'timestamp'
		}
		return Topic;
	},
	//should take a TOKEN as well for verification?
	insertTopic : function(topic){
		const ref = firebaseAdmin.database().ref('topics/' + topic.author.uid + '/');
		ref.push({
				authorId : topic.author.uid,
				text : topic.text,
				timestamp : topic.timestamp
			});
	}





}


module.exports = TopicController;