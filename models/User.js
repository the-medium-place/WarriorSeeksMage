const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 50]
      }

    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    
    game: DataTypes.STRING,

    bio: {
      type: DataTypes.TEXT
    },

    image: DataTypes.STRING



  });

  User.associate = function (models) {
    User.belongsToMany(models.Party, { through: "userParties" })
  }
  // encrypt password before saving it
  // User.beforeCreate(function (user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });


  return User;
};
