'use strict';

import { Model } from 'sequelize';

module.exports = (sequelize: any, DataTypes: any) => {
  class WordType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
        this.hasMany(models.Word);
    }
  };
  WordType.init({
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WordType',
    timestamps: false
  });
  return WordType;
};