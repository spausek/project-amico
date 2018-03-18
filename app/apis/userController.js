const firebaseAdmin = require('./firebaseAdmin.js');
const UserController = {


	createUser : function(data){

		const User = {
			uid : data.uid,
			displayName : data.displayName,
			email : data.email,
		}

		return User;
	},

	/*validateUid : function(uid, success){
		firebaseAdmin.auth().getUser(uid)
		 .then(function(userRecord) {
		    // See the UserRecord reference doc for the contents of userRecord.
		    //console.log("Successfully fetched user data:", userRecord.toJSON());

		    return true;
		})
		.catch(function(error) {
			console.log("Error fetching user data:", error);
			return false;
		});
	},*/

	insertUser: function(User){
		
		const UserController = this;
		
			firebaseAdmin.database().ref('users/' + User.uid).set({
				uid : User.uid,
				email : User.email,
				displayName : User.displayName
			});
		
	},
	getUser : function(){
			
				const db = firebaseAdmin.database();
				const ref = db.ref("users/");
				ref.once("value", function(snapshot) {
				  console.log(snapshot.val());
				});
			
			
		
	},
	validateIdToken : function(idToken){
		firebaseAdmin.auth().verifyIdToken(token)
  		.then(function(decodedToken) {
    		const uid = decodedToken.uid;
    		console.log('Validated Token for UID: ' + uid);
    		return true;
  		}).catch(function(error) {
     		console.log('ERROR DURING VALIDATION');
     		console.log(error.message);
     		return false;
     	});
	}

}


module.exports = UserController;

