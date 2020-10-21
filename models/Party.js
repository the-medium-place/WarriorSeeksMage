module.exports = function (sequelize, DataTypes) {
  var Party = sequelize.define("Party", {
    id: {
      type: DataTypes.INTEGER,
      //   allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    partyName: {
      type: DataTypes.STRING,
      allowNull: false

    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    game: {
      type: DataTypes.STRING,
    },

    seeking: DataTypes.STRING,

    bio: {
      type: DataTypes.TEXT
    },

    image: DataTypes.STRING

  });

  Party.associate = function (models) {
    Party.hasMany(models.User)
  }


  return Party;
};