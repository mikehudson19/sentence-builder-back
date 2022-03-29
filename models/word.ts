'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
        this.belongsTo(models.WordTypes)
    }
  };
  Word.init({
    word: DataTypes.STRING,
    wordTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Word',
    paranoid: true
  });
  return Word;
};