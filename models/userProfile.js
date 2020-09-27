'use strict';
module.exports = (sequelize, DataTypes) => {
  const userProfile = sequelize.define('userProfile', {
    display_Name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  userProfile.associate = (models)=>{
    userProfile.hasMany(models.User, {as: 'User', foreignKey: 'userProfileId'})
  }

  return userProfile;
};