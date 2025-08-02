'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      // 👇 Add this line
      Profile.hasMany(models.Article, { foreignKey: 'profileId' });
    }
  }

  Profile.init(
    {
      name: DataTypes.STRING,
      field: DataTypes.STRING,
      image: DataTypes.STRING,
      bio: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Profile',
    }
  );
  return Profile;
};
