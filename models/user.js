module.exports = function(sequelize, DataTypes) {

	const User = sequelize.define("User", {
		id : {
			type : DataTypes.INTEGER,
			autoIncrement : true,
			primaryKey : true,
			allowNull : false,
		},
		user_name : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		
	});

	return User;
}