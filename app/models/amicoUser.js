module.exports = function(sequelize, DataTypes) {
  const amico_languages = sequelize.define("amico_languages", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    native_language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    language_code: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  return amico_languages;
};
