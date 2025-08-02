'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      // 👇 Add this line inside the associate block
      Article.belongsTo(models.Profile, { foreignKey: 'profileId' });
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      category: DataTypes.STRING,
      image: DataTypes.STRING,
      profileId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Article',
    }
  );
  return Article;
};
