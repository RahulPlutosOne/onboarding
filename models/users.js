const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  pswd: {
    type: Sequelize.STRING,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
});

module.exports = User;
