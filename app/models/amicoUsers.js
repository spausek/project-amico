module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    amico_user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    native_language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    learning_laguage: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
};
