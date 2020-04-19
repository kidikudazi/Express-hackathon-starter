'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    picture:{
      allowNull:true,
      type: DataTypes.STRING
    },
    picture_key:{
      allowNull:true,
      type: DataTypes.STRING
    },   
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Article, {
    	foreignKey: 'author_id'
    });
  };
  return User;
};