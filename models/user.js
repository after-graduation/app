'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: DataTypes.STRING,
    type: DataTypes.ENUM
  }, {});

  User.associate =(models)=>{
  User.belongsTo(models.userProfile, { as : 'userProfile', foreignKey: 'userProfileId' });
} 

  return User;
};