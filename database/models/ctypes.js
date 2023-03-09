'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CTypes.init({
    cTypeName: DataTypes.STRING,
    cTypeId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'CTypes',
  });
  return CTypes;
};